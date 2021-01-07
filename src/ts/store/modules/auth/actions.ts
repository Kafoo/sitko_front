import { ActionTree } from "vuex";
import { AuthState } from "./types";
import { RootState } from "@/ts/store/types";
import axios from "axios";
import router from "@/ts/router";
import UserModel from "@/ts/models/userClass"

export const actions: ActionTree<AuthState, RootState> = {
  GET_USER_DATA({ commit }) {
    commit("setLoading");
    axios
      .get(process.env.VUE_APP_API_URL + "user")
      .then(response => {
        commit("setUserData", new UserModel(response.data));
        commit("removeLoading");
      })
      .catch(() => {
        localStorage.removeItem("authToken");
      });
  },

  SEND_LOGIN_REQUEST({ commit }, data) {
    commit("app/setErrors", {}, { root: true });
    return axios
      .post(process.env.VUE_APP_API_URL + "login", data)
      .then(response => {
        commit("setUserData", response.data.user);
        localStorage.setItem("authToken", response.data.token);
      });
  },

  SEND_REGISTER_REQUEST({ commit }, data) {
    commit("app/setErrors", {}, { root: true });
    return axios
      .post(process.env.VUE_APP_API_URL + "register", data)
      .then(response => {
        commit("setUserData", response.data.user);
        localStorage.setItem("authToken", response.data.token);
      });
  },

  SEND_LOGOUT_REQUEST({ commit }) {
    commit("setLoading");
    router.push("/").catch(() => {});
    axios.post(process.env.VUE_APP_API_URL + "logout").then(() => {
      commit("setUserData", null);
      commit("removeLoading");
      localStorage.removeItem("authToken");
    });
  },

  SEND_VERIFY_RESEND_REQUEST() {
    return axios.get(process.env.VUE_APP_API_URL + "email/resend");
  },

  SEND_VERIFY_REQUEST({ dispatch }, hash) {
    return axios
      .get(process.env.VUE_APP_API_URL + "email/verify/" + hash)
      .then(() => {
        dispatch("GET_USER_DATA");
      });
  },

  SEND_USER_EDITION({ state, commit }, user  ) {

    var oldUser = state.userData

    return axios
      .put(process.env.VUE_APP_API_URL + "user/" + user.id, user)
        .then((response) => {
          commit("setUserData", response.data.user);
        })
        .catch(() => {
          commit("setUserData", oldUser);
        })
  },

  SEND_DELETE_USER({ state, commit }, data) {
    commit("app/setErrors", {}, { root: true });

    if (state.userData) {
      return axios
        .delete(process.env.VUE_APP_API_URL + "user/" + state.userData.id, data)
        .then(() => {
          commit("setUserData", null);
          localStorage.removeItem("authToken");
        });
    } else {
      commit("app/setErrors", { user: "User Not Found" }, { root: true });
    }
  }
};
