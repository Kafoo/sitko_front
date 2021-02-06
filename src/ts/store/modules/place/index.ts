import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { PlaceState } from "./types";
import { RootState } from "@/ts/store/types";
import PlaceModel from "@/ts/models/placeClass";

export const state: PlaceState = {
  places: Array<PlaceModel>(),
  fetched: {}
};

const namespaced: boolean = true;

export const place: Module<PlaceState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
