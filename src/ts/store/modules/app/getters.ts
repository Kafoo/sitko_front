import { GetterTree } from "vuex";
import { AppState, AppAlert } from "./types";
import { RootState } from "@/ts/store/types";

export const getters: GetterTree<AppState, RootState> = {
  errors(state): Array<any> {
    return state.errors;
  },
  app_alert(state):AppAlert | undefined {
    return state.app_alert;
  }
};
