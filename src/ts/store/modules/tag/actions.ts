import { ActionTree } from "vuex";
import { TagState } from "./types";
import { RootState } from "@/ts/store/types";
import TagModel from "@/ts/models/tagClass";
import axios from "axios";

export const actions: ActionTree<TagState, RootState> = {
  GET_TAGS({ state, commit }) {
    if (state.fetched.all_tags) {
      return true;
    } else {
      state.fetched.all_tags = Date.now();
      return axios
        .get(process.env.VUE_APP_API_URL + "tag")
        .then(response => {
          const newCollection = [];
          for (const tag of response.data) {
            newCollection.push(new TagModel(tag));
          }
          commit("setTags", newCollection);
        })
        .catch(() => {});
    }
  },

  GET_TAGS_CATEGORIES({ state, commit }) {
    if (state.fetched.categories) {
      return true;
    } else {
      state.fetched.categories = Date.now();
      return axios
        .get(process.env.VUE_APP_API_URL + "tags_category")
        .then(response => {
          const newCollection = [];
          for (const category of response.data) {
            newCollection.push(category);
          }
          commit("setCategories", newCollection);
        })
        .catch(() => {});
    }
  }
};
