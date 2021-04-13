import { auth } from "@/ts/router/middlewares";

export default [
  {
    path: "/map",
    name: "Map",
    beforeEnter: auth,
    component: () => import("@/vue/views/Map.vue"),
    meta: {
      title: "Sitko - Map"
    }
  }
];
