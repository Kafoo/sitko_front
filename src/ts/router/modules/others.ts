import { auth } from "@/ts/router/middlewares";

export default [
  {
    path: "/wtfis",
    name: "Wtfis",
    component: () => import("@/vue/views/Wtfis.vue"),
    meta: {
      title: "Sitko"
    }
  }
];
