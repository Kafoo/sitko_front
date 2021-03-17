import { MutationTree } from "vuex";
import { PlaceState } from "./types";
import PlaceModel from "@/ts/models/placeClass";

export const mutations: MutationTree<PlaceState> = {
  setPlaces(state, payload: Array<PlaceModel>) {
    state.places = payload;
  },

  pushPlace(state, place: PlaceModel) {
    var exists = state.places.find((x: PlaceModel) => x.id === place.id);
    if (exists) {
      //refresh
      const index = state.places.indexOf(exists);
      state.places.splice(index, 1, place);
    } else {
      //or push
      state.places.push(place);
    }
  },

  removePlace(state, place_id: number) {
    var exists = state.places.find((x: PlaceModel) => x.id === place_id);
    if (exists) {
      const index = state.places.indexOf(exists);
      state.places.splice(index, 1);
    }
  }

};
