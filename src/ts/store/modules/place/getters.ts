import { GetterTree } from "vuex";
import { PlaceState } from "./types";
import { RootState } from "@/ts/store/types";
import PlaceModel from "@/ts/models/placeClass";

export const getters: GetterTree<PlaceState, RootState> = {
  places(state): Array<PlaceModel> {
    return state.places;
  }
};
