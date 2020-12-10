import { ActionTree } from "vuex";
import { EventState } from "./types";
import { RootState } from "@/ts/store/types";
import EventModel from "@/ts/models/eventClass";
import axios from "axios";

export const actions: ActionTree<EventState, RootState> = {

    GET_EVENTS({ rootState, state, commit }, place_id:number|string) {
      //Loading flag only if first time fetch for this place
      if (
        rootState.place.place.id == place_id &&
        state.firstFetch == place_id
      ) {
        // ('==' strict opposite doesn't exist)
      } else {
        commit("setLoading");
        commit("setEvents", []);
        commit("setFirstFetch", place_id);
      }

      axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/event")
        .then(response => {
          const newCollection = [];
          for (const event of response.data) {
            newCollection.push(new EventModel(event));
          }

          //Refresh project if currently loading
          if (state.loading_events) {
            commit("setEvents", newCollection);
            commit("removeLoading");
          } else {
            //Suggest refresh to user without messing with UI
          }
        })
        .catch(() => {});
    }

};
