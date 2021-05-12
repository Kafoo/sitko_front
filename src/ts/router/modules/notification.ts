import { auth } from "@/ts/router/middlewares";

export default [
  {
    path: "/notifications",
    name: "Notifications",
    beforeEnter: auth,
    component: () => import("@/vue/views/Notifications.vue"),
    meta: {
      title: "Sitko - Notifications"
    }
  }
];
