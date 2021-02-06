import { auth, guest } from "@/ts/router/middlewares";

export default [
  {
    path: "/event/create/:place_id",
    name: "EventCreation",
    beforeEnter: auth,
    component: () => import("@/vue/views/Event/EventCreation.vue"),
    meta: {
      title: "Sitko - Event Creation"
    }
  },
  {
    path: "/event/:id",
    name: "Event",
    beforeEnter: auth,
    component: () => import("@/vue/views/Event/EventOverview.vue"),
    meta: {
      title: "Sitko - Event"
    }
  },
  {
    path: "/event/:id/edit",
    name: "EventEdition",
    beforeEnter: auth,
    component: () => import("@/vue/views/Event/EventEdition.vue"),
    meta: {
      title: "Sitko - Event Edition"
    }
  }
];
