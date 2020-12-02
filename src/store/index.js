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
    app_alert: null,
    errors: [],
    windowWidth: window.innerWidth
  },

  getters: {
    errors: state => state.errors,
    app_alert: state => state.app_alert
  },

  mutations: {
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    },
    setErrors(state, errors) {
      state.errors = errors;
    },
    setAlert(state, app_alert) {
      state.app_alert = app_alert;
      setTimeout(() => {
        state.app_alert = null;
      }, 5000);
    },
    removeAlert(state) {
      state.app_alert = null;
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
