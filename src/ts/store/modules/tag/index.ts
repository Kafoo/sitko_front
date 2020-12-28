import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { TagState } from "./types";
import { RootState } from "@/ts/store/types";
import TagModel from "@/ts/models/tagClass";

export const state: TagState = {
  tags: Array<TagModel>(),
  loading: false
};

const namespaced: boolean = true;

export const tag: Module<TagState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
