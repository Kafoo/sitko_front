import { ActionTree } from "vuex";
import { PlaceState } from "./types";
import { RootState } from "@/ts/store/types";
import PlaceModel from "@/ts/models/placeClass";
import axios from "axios";

export const actions: ActionTree<PlaceState, RootState> = {
  GET_PLACES({ state, commit }) {
    if (state.places.length === 0) {
      commit("setLoadingPlaces");
    }
    axios
      .get(process.env.VUE_APP_API_URL + "place")
      .then(response => {
        const newCollection = [];
        for (const place of response.data) {
          newCollection.push(new PlaceModel(place));
        }
        commit("setPlaces", newCollection);
        commit("removeLoadingPlaces");
      })
      .catch(() => {});
  },

  GET_PLACE({ commit }, id) {
    commit("setLoadingPlace");
    axios
      .get(process.env.VUE_APP_API_URL + "place/" + id)
      .then(response => {
        commit("setPlace", response.data);
        commit("removeLoadingPlace");
      })
      .catch(() => {});
  }
};
