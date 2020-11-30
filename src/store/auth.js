import axios from "axios";
import router from "../router";

export default {
  namespaced: true,

  state: {
    userData: null,
    loading: false
  },

  getters: {
    user: state => state.userData,
    loading: state => state.loading
  },

  mutations: {
    setUserData(state, user) {
      state.userData = user;
    },
    setLoading(state) {
      state.loading = true;
    },
    removeLoading(state) {
      state.loading = false;
    }
  },

  actions: {
    getUserData({ commit }) {
      commit("setLoading");
      axios
        .get(process.env.VUE_APP_API_URL + "user")
        .then(response => {
          commit("setUserData", response.data);
          commit("removeLoading");
        })
        .catch(() => {
          localStorage.removeItem("authToken");
        });
    },
    
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post(process.env.VUE_APP_API_URL + "login", data)
        .then(response => {
          commit("setUserData", response.data.user);
          localStorage.setItem("authToken", response.data.token);
        });
    },

    sendRegisterRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post(process.env.VUE_APP_API_URL + "register", data)
        .then(response => {
          commit("setUserData", response.data.user);
          localStorage.setItem("authToken", response.data.token);
        });
    },

    sendLogoutRequest({ commit }) {
      commit("setLoading");
      router.push("/").catch(() => {});
      axios.post(process.env.VUE_APP_API_URL + "logout").then(() => {
        commit("setUserData", null);
        commit("removeLoading");
        localStorage.removeItem("authToken");
      });
    },

    sendVerifyResendRequest() {
      return axios.get(process.env.VUE_APP_API_URL + "email/resend");
    },

    sendVerifyRequest({ dispatch }, hash) {
      return axios
        .get(process.env.VUE_APP_API_URL + "email/verify/" + hash)
        .then(() => {
          dispatch("getUserData");
        });
    },

    sendDeleteUser({ state, commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .delete(process.env.VUE_APP_API_URL + "user/" + state.userData.id, data)
        .then(() => {
          commit("setUserData", null);
          localStorage.removeItem("authToken");
        });
    }
  }
};
