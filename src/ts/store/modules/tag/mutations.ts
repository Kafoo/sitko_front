import { MutationTree } from "vuex";
import { TagState } from "./types";
import TagModel from "@/ts/models/tagClass";

export const mutations: MutationTree<TagState> = {
  setTags(state, payload: Array<TagModel>) {
    state.tags = payload;
  },

  setLoading(state) {
    state.loading = true;
  },

  removeLoading(state) {
    state.loading = false;
  },

};
