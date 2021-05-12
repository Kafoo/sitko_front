import { GetterTree } from "vuex";
import { PlaceState } from "./types";
import { RootState } from "@/ts/store/types";
import PlaceModel from "@/ts/models/placeClass";

export const getters: GetterTree<PlaceState, RootState> = {
  places(state): Array<PlaceModel> {
    return state.places;
  },
  userPlaces(state, getters, rootState): Array<PlaceModel> {
    return state.places.filter((place: PlaceModel) => {
      return place.author.id == rootState.auth.userData.id;
    });
  },
  linkedPlaces(state): Array<PlaceModel> {
    return state.places.filter((project: PlaceModel) => {
      return project.link === "confirmed";
    });
  }
};
