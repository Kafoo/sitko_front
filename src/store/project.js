import axios from "axios";
import Vue from 'vue'
import Project from '@/models/projectClass'

export default {
  namespaced: true,

  state: {
    projects: [],
    loading_projects:false,
    firstFetch:''
  },

  getters: {
    projects: state => state.projects,
    loading_projects: state => state.loading_projects
  },

  mutations: {
    setProjects(state, projects) {
      Vue.set(state, 'projects', projects)
    },
    removeProject(state, index) {
      state.projects.splice(index, 1);
    },
    insertProject(state, project) {
      state.projects.splice(project.index, 0, project);
    },
    pushProject(state, project) {
      state.projects.push(project);
    },
    editProject(state, project) {
      let oldProject = state.projects.find(x => x.id === project.id);
      let oldProjectIndex = state.projects.indexOf(oldProject);
      state.projects.splice(oldProjectIndex, 1, project);
    },
    setLoading(state) {
      state.loading_projects = true;
    },
    removeLoading(state) {
      state.loading_projects = false;
    },
    closeExpands(state, id = null) {
      state.projects.forEach((project)=>{
        if (project.id !== id) {
          project.expanded = false
        }
      })
    },
    toogleExpand(state, id) {
      var project = state.projects.find(x => x.id == id);
      project.expanded = !project.expanded
    },
    setFirstFetch(state, value){
      state.firstFetch = value
    }
  },

  actions: {

    getPlaceProjects({rootState, state, commit}, {place_id, hash}){

      //Loading flag only if first time fetch for this place
      if (rootState.place.place.id == place_id && state.firstFetch == place_id) {
        //If hash, we still load not to UImess
        if (hash) {
          commit("setLoading");
          commit('setFirstFetch', place_id)
        }
      }else{
        commit("setLoading");
        commit('setFirstFetch', place_id)
      }
      //FETCH
      axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/project")
        .then(response => {
          const newCollection = []

          for (const project of response.data) {
            newCollection.push(new Project(project))
          }

          //Refresh project if currently loading
          if (state.loading_projects) {
            commit('setProjects', newCollection)
            commit("removeLoading");
          }else{
            //Suggest refresh to user without messing with UI
          }

        })
        .catch(() => {});
    },
    sendCreateProject({commit}, project) {
      console.log(project)
      return axios
        .post(process.env.VUE_APP_API_URL + "project", project)
        .then(response => {
          var newProject = new Project(response.data.project)
          commit('pushProject', newProject)
        })
        .catch(() => {
          commit('setGeneralError', "Oups, petite erreur dans la création du projet", {root: true});
        });
    },
    sendEditProject({commit}, project) {
      return axios
        .put(
          process.env.VUE_APP_API_URL + "project/" + project.id, project)
        .then(response => {
          commit('editProject', new Project(response.data.project))
        })
        .catch(() => {
          commit('setGeneralError', "Oups, petite erreur dans l'édition du projet", {root: true});
        });
    },
    deleteProject({commit, state}, id) {
      //Deleting state
      let project = state.projects.find(x => x.id === id);
      project.index = state.projects.indexOf(project);
      commit('removeProject', project.index)
      //Delete call to API
      axios
        .delete(process.env.VUE_APP_API_URL + "project/" + id)
        .then(response => {
          console.log(response.data.success);
        })
        .catch(() => {
          commit('insertProject', project)
          commit('setGeneralError', "Oups, petite erreur dans la suppression du projet", {root: true});
        });
    },
    toogleProjectExpand({commit}, id) {
      commit('closeExpands', id)
      commit('toogleExpand', id)
    }


  }
};
