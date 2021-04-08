import { GetterTree } from "vuex";
import { NotificationState } from "./types";
import { RootState } from "@/ts/store/types";
import NotificationModel from "@/ts/models/notificationClass";

export const getters: GetterTree<NotificationState, RootState> = {
  notifications(state): Array<NotificationModel> {
    return state.notifications;
  },

  newNotificationsCount(state): number {
    return state.notifications.filter(notification=> !notification.read).length
  }
};
