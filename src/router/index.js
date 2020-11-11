import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const guest = (to, from, next) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};

const auth = (to, from, next) => {
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
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/Login.vue"),
    meta: {
      title: "Sitko - Login"
    }
  },
  {
    path: "/calendar",
    name: "Calendar",
    beforeEnter: auth,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Calendar.vue"),
    meta: {
      title: "Sitko - Calendrier"
    }
  },
  {
    path: "/projects",
    name: "Projects",
    beforeEnter: auth,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Projects.vue"),
    meta: {
      title: "Sitko - Projets"
    }
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: guest,
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Auth/Register.vue"),
    meta: {
      title: "Sitko - Register"
    }
  },
  {
    path: "/verify/:hash",
    name: "Verify",
    props: true,
    component: () =>
      import(/* webpackChunkName: "verify" */ "../views/Auth/Verify.vue")
  },
  {
    path: "/account",
    name: "Account",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue"),
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
