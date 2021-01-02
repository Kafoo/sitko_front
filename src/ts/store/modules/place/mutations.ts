import { MutationTree } from "vuex";
import { PlaceState } from "./types";
import PlaceModel from "@/ts/models/placeClass";

export const mutations: MutationTree<PlaceState> = {
  setPlace(state: PlaceState, payload: PlaceModel) {
    state.place = payload;
  },

  setPlaces(state, payload: Array<PlaceModel>) {
    state.places = payload;
  },

  setLoadingPlaces(state) {
    state.loading_places = true;
  },

  removeLoadingPlaces(state) {
    state.loading_places = false;
  },

  setLoadingPlace(state) {
    state.loading_place = true;
  },

  removeLoadingPlace(state) {
    state.loading_place = false;
  },

  // editPlace(state, project:PlaceModel) {
  //   let oldPlace = state.places.find((x:PlaceModel) => x.id === project.id);
  //   let oldPlaceIndex = state.places.indexOf(oldPlace);
  //   state.places.splice(oldPlaceIndex, 1, project);
  // },

};
