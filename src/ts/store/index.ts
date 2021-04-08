import Vue from "vue";
import Vuex from "vuex";
import { project } from "./modules/project";
import { event } from "./modules/event";
import { auth } from "./modules/auth";
import { caldate } from "./modules/caldate";
import { place } from "./modules/place";
import { app } from "./modules/app";
import { tag } from "./modules/tag";
import { note } from "./modules/note";
import { notification } from "./modules/notification";
import { user } from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    auth,
    project,
    event,
    caldate,
    place,
    tag,
    note,
    notification,
    user
  }
});
