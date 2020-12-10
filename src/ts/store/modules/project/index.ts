import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ProjectState } from "./types";
import { RootState } from "@/ts/store/types";
import ProjectModel from "@/ts/models/projectClass";

export const state: ProjectState = {
    projects: Array<ProjectModel>(),
    loading_projects: false,
    firstFetch: ""
};

const namespaced: boolean = true;

export const project: Module<ProjectState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
