import { MutationTree } from "vuex";
import { NotificationState } from "./types";
import NotificationModel from "@/ts/models/notificationClass";
import { state } from "../project";

export const mutations: MutationTree<NotificationState> = {
  setNotifications(state, payload: Array<NotificationModel>) {
    state.notifications = payload;
  },

  resetNotifications(state) {
    state.notifications = [];
  },

  pushNotification(state, notification: NotificationModel) {
    var exists = state.notifications.find(
      (x: NotificationModel) => x.id === notification.id
    );
    if (exists) {
      //refresh
      if (
        !notification.updated_at ||
        notification.updated_at > exists.updated_at
      ) {
        Object.assign(exists, notification);
      }
    } else {
      //or push
      state.notifications.push(notification);
    }
  },

  updateNotification(state, notification: NotificationModel) {
    var exists = state.notifications.find(
      (x: NotificationModel) => x.id === notification.id
    );
    if (exists) {
      //refresh
      var one = notification.updated_at;
      var two = exists.updated_at;
      if (
        !notification.updated_at ||
        notification.updated_at > exists.updated_at
      ) {
        Object.assign(exists, notification);
      }
    }
  },

  removeNotification(state, place_id: number) {
    var exists = state.notifications.find(
      (x: NotificationModel) => x.id === place_id
    );
    if (exists) {
      const index = state.notifications.indexOf(exists);
      state.notifications.splice(index, 1);
    }
  }
};
