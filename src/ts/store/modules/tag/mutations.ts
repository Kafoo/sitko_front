import { MutationTree } from "vuex";
import { TagState } from "./types";
import TagModel from "@/ts/models/tagClass";

export const mutations: MutationTree<TagState> = {
  setTags(state, payload: Array<TagModel>) {
    state.tags = payload;
  },

  setCategories(state, payload: Array<Object>) {
    state.categories = payload;
  }
};
