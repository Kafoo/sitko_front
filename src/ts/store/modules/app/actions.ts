import { ActionTree } from "vuex";
import { AppState } from "./types";
import { RootState } from "@/ts/store/types";
import axios from "axios";

export const actions: ActionTree<AppState, RootState> = {

  SET_IDLE_USER({commit, state}, payload:boolean){
    commit('setIdleUser', payload)
  },

};
