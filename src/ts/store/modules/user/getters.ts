import { GetterTree } from "vuex";
import { PlaceState } from "./types";
import { RootState } from "@/ts/store/types";
import PlaceModel from "@/ts/models/placeClass";

export const getters: GetterTree<PlaceState, RootState> = {
  places(state): Array<PlaceModel> {
    return state.places;
  },
  place(state): PlaceModel | undefined {
    return state.place;
  },
  loading_places(state): Boolean {
    return state.loading_places!;
  },
  loading_place(state): Boolean {
    return state.loading_place!;
  }
};
