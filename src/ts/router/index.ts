import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/vue/views/Home.vue";

Vue.use(VueRouter);

const guest = (to: any, from: any, next: any) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};

const auth = (to: any, from: any, next: any) => {
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/login");
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: guest,
    component: () => import("@/vue/views/Auth/Login.vue"),
    meta: {
      title: "Sitko - Login"
    }
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("@/vue/views/Explore.vue"),
    meta: {
      title: "Sitko - Explorer"
    }
  },
  {
    path: "/places",
    name: "Places",
    beforeEnter: auth,
    component: () => import("@/vue/views/Places.vue"),
    meta: {
      title: "Sitko - Mes lieux"
    }
  },
  {
    path: "/Place/:id",
    name: "Place",
    beforeEnter: auth,
    component: () => import("@/vue/views/Place.vue"),
    meta: {
      title: "Sitko"
    },
    children: [
      {
        path: "overview",
        name: "Overview",
        beforeEnter: auth,
        component: () => import("@/vue/views/Place/Overview.vue"),
        meta: {
          title: "Sitko - Les Vallées"
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
    path: "/register",
    name: "Register",
    beforeEnter: guest,
    component: () =>
      import(
        /* webpackChunkName: "register" */ "@/vue/views/Auth/Register.vue"
      ),
    meta: {
      title: "Sitko - Register"
    }
  },
  {
    path: "/verify/:hash",
    name: "Verify",
    props: true,
    component: () =>
      import(/* webpackChunkName: "verify" */ "@/vue/views/Auth/Verify.vue")
  },
  {
    path: "/account",
    name: "Account",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/vue/views/Account.vue"),
    meta: {
      title: "Sitko - Account"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
