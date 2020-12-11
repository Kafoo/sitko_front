import router from "@/ts/router";
import store from "@/ts/store";
import axios from "axios";

axios.interceptors.response.use(
  response => {
    /*    if (response.data.message) {
      store.commit('app/setAlert', {type:'success', msg: response.data.message})  
    }*/
    return response;
  },
  error => {
    if (error.response.status === 422) {
      store.commit("app/setErrors", error.response.data.errors);
    } else if (error.response.status === 401) {
      store.commit("auth/setUserData", null);
      localStorage.removeItem("authToken");
      router.push({ name: "Login" });
    } else {
      if (error.response.data.message) {
        store.commit("app/setAlert", {
          type: "error",
          msg: error.response.data.message,
          info: error.response.data.info
        });
      } else {
        store.commit("app/setAlert", {
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
    Accept: "application/json",
    "Accept-Language": store.state.app.locale
  };
  return config;
});