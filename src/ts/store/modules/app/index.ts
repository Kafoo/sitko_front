import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { AppState } from "./types";
import { RootState } from "@/ts/store/types";

export const state: AppState = {

  app_alert: undefined,
  errors: [],
  windowWidth: window.innerWidth,
  locale: 'fr'

};

const namespaced: boolean = true;

export const app: Module<AppState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
