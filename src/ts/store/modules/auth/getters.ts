import { GetterTree } from "vuex";
import { AuthState } from "./types";
import { RootState } from "@/ts/store/types";
import UserModel from "@/ts/models/userClass";

export const getters: GetterTree<AuthState, RootState> = {
  user(state): UserModel | undefined {
    return state.userData;
  },
  loading(state): Boolean {
    return state.loading;
  },
  verifying(state): string | null {
    return state.verifying
  }
};
