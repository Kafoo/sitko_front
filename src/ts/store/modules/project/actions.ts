import { ActionTree } from "vuex";
import { ProjectState } from "./types";
import { RootState } from "@/ts/store/types";
import ProjectModel from "@/ts/models/projectClass";
import axios from "axios";

export const actions: ActionTree<ProjectState, RootState> = {

  GET_PROJECT({ commit, state }, project_id) {
    if (state.projects.find((x: ProjectModel) => x.id === project_id)) {
      return true;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "project/" + project_id)
        .then(response => {
          //(Le projet aura été push dans le store)
          commit("pushProject", new ProjectModel(response.data));
        })
        .catch(() => {});
    }
  },

  GET_ALL_PROJECTS({ state, commit }) {
    if (state.fetched.all_projects) {
      return true;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "project")
        .then(response => {
          state.fetched.all_projects = Date.now();
          for (const project of response.data) {
            commit("pushProject", new ProjectModel(project));
          }
        })
        .catch(() => {});
    }
  },

  GET_PROJECTS_BY_PLACE({ state, commit }, place_id) {
    if (state.fetched.place_projects[place_id]) {
      return true;
    } else {
      state.fetched.place_projects[place_id] = Date.now();
      return axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/project")
        .then(response => {
          for (const project of response.data) {
            commit("pushProject", new ProjectModel(project));
          }
        })
        .catch(() => {});
    }
  },

  SEND_PROJECT_CREATION({ commit }, project) {
    return axios
      .post(process.env.VUE_APP_API_URL + "project", project)
      .then(response => {
        var newProject = new ProjectModel(response.data.project);
        commit("pushProject", newProject);
      });
  },

  SEND_PROJECT_EDITION({ commit }, project) {
    return axios
      .put(process.env.VUE_APP_API_URL + "project/" + project.id, project)
      .then(response => {
        commit("pushProject", new ProjectModel(response.data.project));
      });
  },

  SEND_PROJECT_DELETION({ commit }, project_id) {
    //Delete call to API
    return axios.delete(process.env.VUE_APP_API_URL + "project/" + project_id)
      .then(response => {
        commit("removeProject", project_id);
      });
  }

};
