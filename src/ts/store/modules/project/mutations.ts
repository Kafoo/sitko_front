import { MutationTree } from "vuex";
import Vue from "vue";
import { ProjectState } from "./types";
import ProjectModel from "@/ts/models/projectClass";

export const mutations: MutationTree<ProjectState> = {
  setProjects(state, payload: Array<ProjectModel>) {
    state.projects = payload;
  },

  pushProject(state, project: ProjectModel) {
    var exists = state.projects.find((x: ProjectModel) => x.id === project.id);
    if (exists) {
      //refresh
      const index = state.projects.indexOf(exists)
      state.projects.splice(index, 1, project)
    } else {
      //or push
      state.projects.push(project);
    }
  },

  removeProject(state, place_id: number) {
    var exists = state.projects.find((x: ProjectModel) => x.id === place_id);
    if (exists) {
      const index = state.projects.indexOf(exists)
      state.projects.splice(index, 1)
    }
  }
};
