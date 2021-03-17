import { ActionTree } from "vuex";
import { PlaceState } from "./types";
import { RootState } from "@/ts/store/types";
import PlaceModel from "@/ts/models/placeClass";
import axios from "axios";
import i18n from "@/ts/plugins/i18n.js";

export const actions: ActionTree<PlaceState, RootState> = {

  GET_PLACE({ commit, state }, place_id) {
    
    var place = state.places.find((x: PlaceModel) => x.id === place_id)
    
    if (place) {
      return place;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id)
        .then(response => {
          place = new PlaceModel(response.data)
          commit("pushPlace", place);
          return place;
        });
    }
  },

  GET_ALL_PLACES({ state, commit }) {
    if (state.fetched.all_places) {
      return state.places;
    } else {
      return axios.get(process.env.VUE_APP_API_URL + "place").then(response => {
        state.fetched.all_places = Date.now();
        for (const place of response.data) {
          commit("pushPlace", new PlaceModel(place));
        }
        return state.places
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
    return axios
      .delete(process.env.VUE_APP_API_URL + "place/" + place_id)
      .then(response => {
        commit("removePlace", place_id);
      });
  },

  SEND_JOIN_REQUEST({ commit, rootGetters }, place) {

    return axios
      .put(process.env.VUE_APP_API_URL + "join/" + place.id)
      .then(response => {
        place.joined = true
        commit("pushPlace", place);
        commit(
          "app/setAlert",
          { type: "success", msg: i18n.t('You joined this place') },
          { root: true }
        );
      });
  },

  SEND_LEAVE_REQUEST({ commit }, place) {

    return axios
      .put(process.env.VUE_APP_API_URL + "leave/" + place.id)
      .then(response => {
        place.joined = false
        commit("pushPlace", place);
        commit(
          "app/setAlert",
          { type: "success", msg: i18n.t('You left this place') },
          { root: true }
        );
      });
  }

};
