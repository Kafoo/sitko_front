import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { AppState } from "./types";
import { RootState } from "@/ts/store/types";

var isConfirmed;
localStorage.getItem("AccessCode") == process.env.VUE_APP_ACCESS_CODE
  ? (isConfirmed = true)
  : (isConfirmed = false);

export const state: AppState = {
  app_alert: undefined,
  app_data: {},
  confirmed_guest: isConfirmed,
  idle_user: false,
  errors: [],
  windowWidth: window.innerWidth,
  locale: "fr",
  routes: []
};

const namespaced: boolean = true;

export const app: Module<AppState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
