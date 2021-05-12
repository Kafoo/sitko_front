import { MutationTree } from "vuex";
import { AuthState } from "./types";
import UserModel from "@/ts/models/userClass";

export const mutations: MutationTree<AuthState> = {
  setUserData(state, payload: UserModel) {
    state.userData = payload;
  },
  setLoading(state) {
    state.loading = true;
  },
  removeLoading(state) {
    state.loading = false;
  },
  setVerifying(state, payload: string) {
    state.verifying = payload;
  }
};
