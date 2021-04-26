import { GetterTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "@/ts/store/types";
import UserModel from "@/ts/models/userClass";

export const getters: GetterTree<UserState, RootState> = {
  users(state): Array<UserModel> {
    return state.users;
  },
  linkedUsers(state): Array<UserModel> {
    return state.users.filter((project: UserModel) => {
      return project.link === 'confirmed';
    });
  }
};
