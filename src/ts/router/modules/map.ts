import { auth } from "@/ts/router/middlewares";

export default [
  {
    path: "/map/:focusType?/:focusId?",
    name: "Map",
    beforeEnter: auth,
    component: () => import("@/vue/views/Map.vue"),
    meta: {
      title: "Sitko - Map"
    }
  }
];
