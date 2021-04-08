import { ActionTree } from "vuex";
import { NotificationState } from "./types";
import { RootState } from "@/ts/store/types";
import NotificationModel from "@/ts/models/notificationClass";
import axios from "axios";

export const actions: ActionTree<NotificationState, RootState> = {
  GET_NOTIFICATIONS({ state, commit }, { reload = null } = {}) {
    if (!reload && state.fetched.notifications) {
      return state.notifications;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "notification/chunk/500")
        .then(response => {
          commit("resetNotifications");
          state.fetched.notifications = Date.now();
          for (const notification of response.data) {
            commit("pushNotification", new NotificationModel(notification));
          }
          return state.notifications;
        })
        .catch(() => {});
    }
  },

  SEND_NOTIFICATION_DELETION({ state, commit }, notification_id) {
    var notification = state.notifications.find(
      (x: NotificationModel) => x.id === notification_id
    );
    var copy = JSON.parse(JSON.stringify(notification));
    commit("removeNotification", notification_id);
    //Delete call to API
    return axios
      .delete(process.env.VUE_APP_API_URL + "notification/" + notification_id)
      .then(response => {})
      .catch(() => {
        commit("pushNotification", copy);
      });
  },

  SEND_NOTIFICATION_READ({ state, commit }, notification_id) {
    return axios
      .put(process.env.VUE_APP_API_URL + "notification/read/" + notification_id)
      .then(response => {
        commit(
          "updateNotification",
          new NotificationModel(response.data.notification)
        );
      })
      .catch(() => {});
  }
};
