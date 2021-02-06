import { auth, guest } from "@/ts/router/middlewares";

export default [
  {
    path: "/project/create/:place_id",
    name: "ProjectCreation",
    beforeEnter: auth,
    component: () => import("@/vue/views/Project/ProjectCreation.vue"),
    meta: {
      title: "Sitko - Project Creation"
    }
  },
  {
    path: "/project/:id",
    name: "Project",
    beforeEnter: auth,
    component: () => import("@/vue/views/Project/ProjectOverview.vue"),
    meta: {
      title: "Sitko - Project"
    }
  },
  {
    path: "/project/:id/edit",
    name: "ProjectEdition",
    beforeEnter: auth,
    component: () => import("@/vue/views/Project/ProjectEdition.vue"),
    meta: {
      title: "Sitko - Project Edition"
    }
  }
];
