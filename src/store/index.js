import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: [],
    windowWidth: window.innerWidth
  },

  getters: {
    errors: state => state.errors
  },

  mutations: {
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    },
    setErrors(state, errors) {
      state.errors = errors;
    }
  },

  actions: {},

  modules: {
    auth
  }
});
