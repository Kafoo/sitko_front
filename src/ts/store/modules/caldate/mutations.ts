import { MutationTree } from "vuex";
import { CaldateState } from "./types";
import CaldateModel from "@/ts/models/caldateClass";

export const mutations: MutationTree<CaldateState> = {

  setCaldates(state, payload:Array<CaldateModel>) {
    state.caldates = payload
  },
  setLoading(state) {
    state.loading_caldates = true;
  },
  removeLoading(state) {
    state.loading_caldates = false;
  },
  setFirstFetch(state, value:string) {
    state.firstFetch = value;
  }

};
