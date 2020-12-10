import { ActionTree } from "vuex";
import { ProjectState } from "./types";
import { RootState } from "@/ts/store/types";
import ProjectModel from "@/ts/models/projectClass";
import axios from "axios";

export const actions: ActionTree<ProjectState, RootState> = {

  GET_PLACE_PROJECTS({ rootState, state, commit }, { place_id, hash }) {
    //Loading flag only if first time fetch for this place
    if (
      rootState.place.place.id == place_id &&
      state.firstFetch == place_id
    ) {
      //If hash, we still load not to UImess
      if (hash) {
        commit("setLoading");
        commit("setFirstFetch", place_id);
      }
    } else {
      commit("setLoading");
      commit("setFirstFetch", place_id);
    }
    //FETCH
    axios
      .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/project")
      .then(response => {
        const newCollection = [];

        for (const project of response.data) {
          newCollection.push(new ProjectModel(project));
        }

        //Refresh project if currently loading
        if (state.loading_projects) {
          commit("setProjects", newCollection);
          commit("removeLoading");
        } else {
          //Suggest refresh to user without messing with UI
        }
      })
      .catch(() => {});
  },

  SEND_PROJECT_CREATION({ commit }, project) {
    console.log(project);
    return axios
      .post(process.env.VUE_APP_API_URL + "project", project)
      .then(response => {
        var newProject = new ProjectModel(response.data.project);
        commit("pushProject", newProject);
        commit(
          "app/setAlert",
          { type: "success", msg: "Projet créé avec succès" },
          { root: true }
        );
      })
      .catch(() => {
        commit(
          "app/setAlert",
          {
            type: "error",
            msg: "Oups, petite erreur dans la création du projet"
          },
          { root: true }
        );
      });
  },

  SEND_PROJECT_EDITION({ commit }, project) {
    return axios
      .put(process.env.VUE_APP_API_URL + "project/" + project.id, project)
      .then(response => {
        commit("editProject", new ProjectModel(response.data.project));
      })
      .catch(() => {
        commit(
          "app/setAlert",
          {
            type: "error",
            msg: "Oups, petite erreur dans l'édition du projet"
          },
          { root: true }
        );
      });
  },

  SEND_PROJECT_DELETION({ commit, state }, id) {
    //Deleting state
    let project = state.projects.find((x:ProjectModel) => x.id === id);
    let index = state.projects.indexOf(project);
    commit("removeProject", project.index);
    //Delete call to API
    axios
      .delete(process.env.VUE_APP_API_URL + "project/" + id)
      .then(response => {
        console.log(response.data.success);
      })
      .catch(() => {
        commit("insertProject", {project, index});
        // commit(
        //   "app/setAlert",
        //   {
        //     type: "error",
        //     msg: "Oups, petite erreur dans la suppression du projet"
        //   },
        //   { root: true }
        // );
      });
  },

  TOOGLE_PROJECT_EXPAND({ commit }, id) {
    commit("closeExpands", id);
    commit("toogleExpand", id);
  }

};
