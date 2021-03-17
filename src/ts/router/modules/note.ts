import { auth, guest } from "@/ts/router/middlewares";

export default [
  {
    path: "/note/create/:place_id",
    name: "NoteCreation",
    beforeEnter: auth,
    component: () => import("@/vue/views/Note/NoteCreation.vue"),
    meta: {
      title: "Sitko - Note Creation"
    }
  },
  {
    path: "/note/:id",
    name: "Note",
    beforeEnter: auth,
    component: () => import("@/vue/views/Note/NoteOverview.vue"),
    meta: {
      title: "Sitko - Note"
    }
  },
  {
    path: "/note/:id/edit",
    name: "NoteEdition",
    beforeEnter: auth,
    component: () => import("@/vue/views/Note/NoteEdition.vue"),
    meta: {
      title: "Sitko - Note Edition"
    }
  }
];
