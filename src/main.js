import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";
Vue.use(vuetify);

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./assets/css/main.css";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('camelize', function (value) {
  if (!value) return ''
  value = value.toString()
  var parts = value.split(' ')
  value = ''
  parts.forEach(function(part, index){
    value += part.charAt(0).toUpperCase() + part.slice(1)
    if (index < parts.length - 1 ) {
      value += ' '
    }
  })
  return value
})

axios.interceptors.response.use(
  response => {
    /*    if (response.data.message) {
      store.commit('setAlert', {type:'success', msg: response.data.message})  
    }*/
    return response;
  },
  error => {
    if (error.response.status === 422) {
      store.commit("setErrors", error.response.data.errors);
    } else if (error.response.status === 401) {
      store.commit("auth/setUserData", null);
      localStorage.removeItem("authToken");
      router.push({ name: "Login" });
    } else {
      if (error.response.data.custom) {
        store.commit("setAlert", {
          type: "error",
          msg: error.response.data.message
        });
      } else {
        store.commit("setAlert", {
          type: "error",
          msg: "Petit problème de serveur"
        });
      }
      return Promise.reject(error);
    }
  }
);

axios.interceptors.request.use(function(config) {
  config.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  return config;
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
