import { ActionTree } from "vuex";
import { PlaceState } from "./types";
import { RootState } from "@/ts/store/types";
import PlaceModel from "@/ts/models/placeClass";
import axios from "axios";

export const actions: ActionTree<PlaceState, RootState> = {

  GET_ALL_PLACES({ state, commit }) {
    if (state.fetched.all_places) {
      return true;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "place")
        .then(response => {
          state.fetched.all_places = Date.now();
          for (const place of response.data) {
            commit("pushPlace", new PlaceModel(place));
          }
        });
    }
  },

  GET_PLACE({ commit, state }, place_id) {
    if (state.places.find((x: PlaceModel) => x.id === place_id)) {
      return true;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id)
        .then(response => {
          commit("pushPlace", new PlaceModel(response.data));
        });
    }
  },

  SEND_PLACE_CREATION({ commit }, place) {
    return axios
      .post(process.env.VUE_APP_API_URL + "place", place)
      .then(response => {
        commit("pushPlace", new PlaceModel(response.data.place));
      });
  },

  SEND_PLACE_EDITION({ commit }, place) {
    return axios
      .put(process.env.VUE_APP_API_URL + "place/" + place.id, place)
      .then(response => {
        commit("pushPlace", new PlaceModel(response.data.place));
      });
  },

  SEND_PLACE_DELETION({ commit }, place_id) {
    //Delete call to API
    return axios.delete(process.env.VUE_APP_API_URL + "place/" + place_id)
      .then(response => {
        commit("removePlace", place_id);
      });
  }
};
