import { MutationTree } from "vuex";
import { TagState } from "./types";
import TagModel from "@/ts/models/tagClass";

export const mutations: MutationTree<TagState> = {
  setTags(state, payload: Array<TagModel>) {
    state.tags = payload;
  },

  setCategories(state, payload: Array<Object>) {
    state.categories = payload;
  },

  setLoading(state) {
    state.loading = true;
  },

  removeLoading(state) {
    state.loading = false;
  },

  setCategoriesLoading(state) {
    state.loading_categories = true;
  },

  removeCategoriesLoading(state) {
    state.loading_categories = false;
  },

};
