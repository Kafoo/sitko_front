import { auth, guest } from "@/ts/router/middlewares";

export default [
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
    beforeEnter: auth,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "account" */ "@/vue/views/Account.vue"),
    meta: {
      title: "Sitko - Account"
    }
  }
];
