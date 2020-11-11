import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
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
    }
  },

  actions: {},

  modules: {
    auth
  }
});
