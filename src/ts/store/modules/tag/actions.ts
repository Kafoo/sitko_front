import { ActionTree } from "vuex";
import { TagState } from "./types";
import { RootState } from "@/ts/store/types";
import TagModel from "@/ts/models/tagClass";
import axios from "axios";

export const actions: ActionTree<TagState, RootState> = {
  GET_TAGS({ state, commit }) {
    commit("setLoading");
    axios
      .get(process.env.VUE_APP_API_URL + "tag")
      .then(response => {
        const newCollection = [];
        for (const tag of response.data) {
          newCollection.push(new TagModel(tag));
        }
        commit("setTags", newCollection);
        commit("removeLoading");
      })
      .catch(() => {});
  }
};
