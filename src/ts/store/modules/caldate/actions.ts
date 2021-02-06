import { ActionTree } from "vuex";
import { CaldateState } from "./types";
import { RootState } from "@/ts/store/types";
import CaldateModel from "@/ts/models/caldateClass";
import axios from "axios";

export const actions: ActionTree<CaldateState, RootState> = {
  GET_CALDATES_BY_PLACE({ state, commit }, place_id) {
    if (state.fetched.place_caldates[place_id]) {
      return true;
    } else {
      state.fetched.place_caldates[place_id] = Date.now();
      return axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/caldate")
        .then(response => {
          for (const caldate of response.data) {
            commit("pushCaldate", new CaldateModel(caldate));
          }
        })
        .catch(() => {});
    }
  }
};
