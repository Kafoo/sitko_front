import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { CaldateState } from "./types";
import { RootState } from "@/ts/store/types";
import CaldateModel from "@/ts/models/caldateClass";

export const state: CaldateState = {
  caldates: Array<CaldateModel>(),
  loading_caldates: false,
  firstFetch: ""
};

const namespaced: boolean = true;

export const caldate: Module<CaldateState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
