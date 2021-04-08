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
      return axios
        .get(process.env.VUE_APP_API_URL + "user/" + user_id)
        .then(response => {
          user = new UserModel(response.data);
          commit("pushUser", user);
          return user;
        });
    }
  },

  SEND_LINK_REQUEST({ commit }, user) {
    return _SEND_LINK_REQUEST({ commit }, user, "user");
  },

  SEND_CANCEL_LINK_REQUEST({ commit }, user) {
    return _SEND_CANCEL_LINK_REQUEST({ commit }, user, "user");
  },

  SEND_UNLINK_REQUEST({ commit }, user) {
    return _SEND_UNLINK_REQUEST({ commit }, user, "user");
  },

  SEND_CONFIRM_LINK({ commit }, user) {
    return _SEND_CONFIRM_LINK({ commit }, user, "user");
  },

  SEND_DECLINE_LINK({ commit }, user) {
    return _SEND_DECLINE_LINK({ commit }, user, "user");
  }
};
