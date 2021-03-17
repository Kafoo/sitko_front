import { auth, guest } from "@/ts/router/middlewares";

export default [
  {
    path: "/place/create",
    name: "PlaceCreation",
    beforeEnter: auth,
    component: () => import("@/vue/views/Places/PlaceCreation.vue"),
    meta: {
      title: "Sitko - Création d'un lieu"
    }
  },

  {
    path: "/places",
    name: "Places",
    beforeEnter: auth,
    component: () => import("@/vue/views/Places.vue"),
    meta: {
      title: "Sitko"
    },
    children: [
      {
        path: "myplaces",
        name: "MyPlaces",
        beforeEnter: auth,
        component: () => import("@/vue/views/Places/MyPlaces.vue"),
        meta: {
          title: "Sitko - Mes Lieux"
        }
      }
    ]
  },
  {
    path: "/place/:id",
    beforeEnter: auth,
    component: () => import("@/vue/views/Place.vue"),
    meta: {
      title: "Sitko"
    },
    children: [
      {
        path: "",
        name: "PlaceOverview",
        beforeEnter: auth,
        component: () => import("@/vue/views/Place/PlaceOverview.vue"),
        meta: {
          title: "Sitko - Lieu"
        }
      },
      {
        path: "calendar",
        name: "Calendar",
        beforeEnter: auth,
        component: () => import("@/vue/views/Place/Calendar.vue"),
        meta: {
          title: "Sitko - Calendrier"
        }
      },
      {
        path: "projects",
        name: "Projects",
        beforeEnter: auth,
        component: () => import("@/vue/views/Place/Projects.vue"),
        meta: {
          title: "Sitko - Projets"
        }
      },
      {
        path: "notes",
        name: "Notes",
        beforeEnter: auth,
        component: () => import("@/vue/views/Place/Notes.vue"),
        meta: {
          title: "Sitko - Notes"
        }
      },
      {
        path: "events",
        name: "Events",
        beforeEnter: auth,
        component: () => import("@/vue/views/Place/Events.vue"),
        meta: {
          title: "Sitko - Evénements"
        }
      },
      {
        path: "contact",
        name: "Contact",
        beforeEnter: auth,
        component: () => import("@/vue/views/Place/Contact.vue"),
        meta: {
          title: "Sitko - Contact"
        }
      }
    ]
  },
  {
    path: "/place/:id/edit",
    name: "PlaceEdition",
    beforeEnter: auth,
    component: () => import("@/vue/views/Place/PlaceEdition.vue"),
    meta: {
      title: "Sitko - Edition du lieu"
    }
  }
];
