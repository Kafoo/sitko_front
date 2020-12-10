import Vue from "vue";
import Vuex from "vuex";
import { project } from "./modules/project";
import { auth } from "./modules/auth";
import { event } from "./modules/event";
import { place } from "./modules/place";
import { app } from "./modules/app";

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    app,
    auth,
    project,
    event,
    place
  }
});
