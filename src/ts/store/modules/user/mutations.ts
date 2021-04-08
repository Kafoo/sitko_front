import { MutationTree } from "vuex";
import { UserState } from "./types";
import UserModel from "@/ts/models/userClass";

export const mutations: MutationTree<UserState> = {
  pushUser(state, user: UserModel) {
    var exists = state.users.find((x: UserModel) => x.id === user.id);
    if (exists) {
      //refresh
      Object.assign(exists, user);
    } else {
      //or push
      state.users.push(user);
    }
  },

  removeUser(state, user_id: number) {
    var exists = state.users.find((x: UserModel) => x.id === user_id);
    if (exists) {
      const index = state.users.indexOf(exists);
      state.users.splice(index, 1);
    }
  }
};
