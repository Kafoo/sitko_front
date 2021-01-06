import { ActionTree } from "vuex";
import { CaldateState } from "./types";
import { RootState } from "@/ts/store/types";
import CaldateModel from "@/ts/models/caldateClass";
import axios from "axios";

export const actions: ActionTree<CaldateState, RootState> = {

    GET_EVENTS({ rootState, state, commit }, place_id:number|string) {
      //Loading flag only if first time fetch for this place
      if (
        rootState.place.place.id == place_id &&
        state.firstFetch == place_id
      ) {
        // ('==' strict opposite doesn't exist)
      } else {
        commit("setLoading");
        commit("setCaldates", []);
        commit("setFirstFetch", place_id);
      }

      axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/caldate")
        .then(response => {
          const newCollection = [];
          for (const caldate of response.data) {
            newCollection.push(new CaldateModel(caldate));
          }

          //Refresh project if currently loading
          if (state.loading_caldates) {
            commit("setCaldates", newCollection);
            commit("removeLoading");
          } else {
            //Suggest refresh to user without messing with UI
          }
        })
        .catch(() => {});
    }

};
