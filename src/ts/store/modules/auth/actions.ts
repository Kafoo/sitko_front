import { ActionTree } from "vuex";
import { AuthState } from "./types";
import { RootState } from "@/ts/store/types";
import axios from "axios";
import router from "@/ts/router";
import UserModel from "@/ts/models/userClass";
import i18n from "@/ts/plugins/i18n.js";
import { capitalize } from "@/ts/functions/vueFilters";

export const actions: ActionTree<AuthState, RootState> = {
  GET_USER_DATA({ commit }) {
    commit("setLoading");
    axios
      .get(process.env.VUE_APP_API_URL + "auth")
      .then(response => {
        commit("app/setAppData", response.data.app_data, { root: true });
        commit("setUserData", new UserModel(response.data.user));
        commit("removeLoading");
      })
      .catch(() => {
        commit("removeLoading");
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

  SEND_LOGOUT_REQUEST({ commit }, next_route = "/") {
    commit("setLoading");
    axios.post(process.env.VUE_APP_API_URL + "logout").then(() => {
      router.push(next_route).catch(() => {});
      commit("setUserData", null);
      commit("removeLoading");
      localStorage.removeItem("authToken");
    });
  },

  SEND_VERIFY_RESEND_REQUEST() {
    return axios.get(process.env.VUE_APP_API_URL + "email/resend");
  },

  SEND_VERIFY_REQUEST({ commit }, hash) {
    commit("setVerifying", hash);
    return axios
      .get(process.env.VUE_APP_API_URL + "email/verify/" + hash)
      .then(() => {
        commit("setVerifying", null);
      });
  },

  SEND_USER_EDITION({ state, commit }, user) {
    var oldUser = state.userData;
    return axios
      .put(process.env.VUE_APP_API_URL + "user/" + user.id, user)
      .then(response => {
        commit("setUserData", new UserModel(response.data.auth));
        commit("user/pushUser", new UserModel(response.data.user), {
          root: true
        });
        commit(
          "app/setAlert",
          { type: "success", msg: capitalize(i18n.t("modifications saved")) },
          { root: true }
        );
      })
      .catch(() => {
        commit("setUserData", oldUser);
      });
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
      commit(
        "app/setErrors",
        { user: capitalize(i18n.t("user not found")) },
        { root: true }
      );
    }
  }
};
