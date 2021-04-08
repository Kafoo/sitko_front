import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { UserState } from "./types";
import { RootState } from "@/ts/store/types";
import UserModel from "@/ts/models/userClass";

export const state: UserState = {
  users: Array<UserModel>(),
  fetched: {}
};

const namespaced: boolean = true;

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
