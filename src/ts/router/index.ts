import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/vue/views/Home.vue";
import store from "@/ts/store";

import place from "./modules/place";
import project from "./modules/project";
import event from "./modules/event";
import note from "./modules/note";
import user from "./modules/user";
import notification from "./modules/notification";
import map from "./modules/map";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  ...place,
  ...project,
  ...event,
  ...note,
  ...user,
  ...notification,
  ...map,

  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/vue/views/404.vue"),
    meta: {
      title: "Sitko - 404"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

router.beforeEach((to, from, next) => {
  store.commit("app/pushRoute", from);
  next();
});

export default router;
