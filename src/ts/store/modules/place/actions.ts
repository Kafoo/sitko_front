import { ActionTree } from "vuex";
import { PlaceState } from "./types";
import { RootState } from "@/ts/store/types";
import PlaceModel from "@/ts/models/placeClass";
import axios from "axios";
import {
  _SEND_UNLINK_REQUEST,
  _SEND_LINK_REQUEST,
  _SEND_CANCEL_LINK_REQUEST,
  _SEND_CONFIRM_LINK,
  _SEND_DECLINE_LINK
} from "@/ts/functions/actions/linkActions";

export const actions: ActionTree<PlaceState, RootState> = {
  GET_PLACE({ commit, state }, place_id) {
    var place = state.places.find((x: PlaceModel) => x.id === place_id);

    if (place) {
      return place;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id)
        .then(response => {
          place = new PlaceModel(response.data);
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
        return state.places;
      });
    }
  },

  GET_USER_PLACES({ state, getters, commit }) {
    if (state.fetched.user_places) {
      return getters.userPlaces;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "place?user")
        .then(response => {
          state.fetched.user_places = Date.now();
          for (const place of response.data) {
            commit("pushPlace", new PlaceModel(place));
          }
          return getters.userPlaces;
        });
    }
  },

  GET_LINKED_PLACES({ state, getters, commit }) {
    if (state.fetched.linked_places) {
      return getters.linkedPlaces;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "place?linked")
        .then(response => {
          state.fetched.linked_places = Date.now();
          for (const place of response.data) {
            commit("pushPlace", new PlaceModel(place));
          }
          return getters.linkedPlaces;
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

  SEND_LINK_REQUEST({ commit }, payload) {
    return _SEND_LINK_REQUEST({ commit }, payload);
  },

  SEND_CANCEL_LINK_REQUEST({ commit }, payload) {
    return _SEND_CANCEL_LINK_REQUEST({ commit }, payload);
  },

  SEND_UNLINK_REQUEST({ commit }, payload) {
    return _SEND_UNLINK_REQUEST({ commit }, payload);
  },

  SEND_CONFIRM_LINK({ commit }, payload) {
    return _SEND_CONFIRM_LINK({ commit }, payload);
  },

  SEND_DECLINE_LINK({ commit }, payload) {
    return _SEND_DECLINE_LINK({ commit }, payload);
  }
};
