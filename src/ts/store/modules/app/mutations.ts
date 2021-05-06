import { MutationTree } from "vuex";
import { AppState, AppAlert } from "./types";

export const mutations: MutationTree<AppState> = {
  setWindowWidth(state) {
    state.windowWidth = window.innerWidth;
  },

  setErrors(state, errors) {
    state.errors = errors;
  },

  setAlert(state, app_alert: AppAlert) {
    state.app_alert = app_alert;
    setTimeout(() => {
      state.app_alert = undefined;
    }, 7000);
  },

  removeAlert(state) {
    state.app_alert = undefined;
  },

  setLocale(state, locale: string) {
    state.locale = locale;
    localStorage.setItem("locale", locale);
  },

  setAppData(state, data: Object) {
    state.app_data = data;
  },

  setAccessCode(state, code: string) {
    state.locale = code;
    localStorage.setItem("AccessCode", code);
  },

  pushRoute(state, route) {
    state.routes.push(route);
  }
};
