import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/vue/views/Home.vue";

import place from "./modules/place";
import project from "./modules/project";
import event from "./modules/event";
import user from "./modules/user";

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
  ...user,

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
  routes
});

export default router;
