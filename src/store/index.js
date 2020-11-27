import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import project from "./project";
import event from "./event";
import place from "./place";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,

  state: {
    generalError: "",
    errors: [],
    windowWidth: window.innerWidth
  },

  getters: {
    errors: state => state.errors,
    generalError: state => state.generalError
  },

  mutations: {
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    },
    setErrors(state, errors) {
      state.errors = errors;
    },
    setGeneralError(state, generalError) {
      state.generalError = generalError;
      setTimeout(()=>{state.generalError = ''}, 5000)
    },
    removeGeneralError(state){
      state.generalError = '';
    }
  },

  actions: {},

  modules: {
    auth,
    project,
    event,
    place
  }
});
