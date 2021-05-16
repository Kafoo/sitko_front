import { ActionTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "@/ts/store/types";
import UserModel from "@/ts/models/userClass";
import axios from "axios";
import {
  _SEND_UNLINK_REQUEST,
  _SEND_LINK_REQUEST,
  _SEND_CANCEL_LINK_REQUEST,
  _SEND_CONFIRM_LINK,
  _SEND_DECLINE_LINK
} from "@/ts/functions/actions/linkActions";

export const actions: ActionTree<UserState, RootState> = {
  GET_USER({ commit, state }, user_id) {
    var user = state.users.find((x: UserModel) => x.id === user_id);
    if (user) {
      return user;
    } else {
    console.log(user)
      return axios
        .get(process.env.VUE_APP_API_URL + "user/" + user_id)
        .then(response => {
          user = new UserModel(response.data);
          commit("pushUser", user);
          return user;
        });
    }
  },

  GET_LINKED_USERS({ state, getters, commit }) {
    if (state.fetched.linked_users) {
      return getters.linkedUsers;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "user?linked")
        .then(response => {
          state.fetched.linked_users = Date.now();
          for (const user of response.data) {
            commit("pushUser", new UserModel(user));
          }
          return getters.linkedUsers;
        });
    }
  },

  SEND_LINK_REQUEST({ commit }, payload) {
    return _SEND_LINK_REQUEST({ commit }, payload);
  },

  SEND_CANCEL_LINK_REQUEST({ commit }, payload) {
    return _SEND_CANCEL_LINK_REQUEST({ commit }, payload);
  },

  SEND_UNLINK_REQUEST({ commit }, payload) {
    return _SEND_UNLINK_REQUEST({ commit }, payload);
  },

  SEND_CONFIRM_LINK({ commit }, payload) {
    return _SEND_CONFIRM_LINK({ commit }, payload);
  },

  SEND_DECLINE_LINK({ commit }, payload) {
    return _SEND_DECLINE_LINK({ commit }, payload);
  }
};
