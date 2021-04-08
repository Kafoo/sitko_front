import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { NotificationState } from "./types";
import { RootState } from "@/ts/store/types";
import NotificationModel from "@/ts/models/notificationClass";

export const state: NotificationState = {
  notifications: Array<NotificationModel>(),
  initial_newNotifications: 0,
  fetched: {
    notifications: undefined
  }
};

const namespaced: boolean = true;

export const notification: Module<NotificationState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
