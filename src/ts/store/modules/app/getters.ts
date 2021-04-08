import { GetterTree } from "vuex";
import { AppState, AppAlert } from "./types";
import { RootState } from "@/ts/store/types";
import { Route } from "vue-router";

export const getters: GetterTree<AppState, RootState> = {
  errors(state): Array<any> {
    return state.errors;
  },
  app_alert(state): AppAlert | undefined {
    return state.app_alert;
  },
  lastRoute(state): Route | undefined {
    if (state.routes.length > 1) {
      return state.routes[state.routes.length - 1];
    }
  }
};
