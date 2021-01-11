import { GetterTree } from "vuex";
import { TagState } from "./types";
import { RootState } from "@/ts/store/types";
import TagModel from "@/ts/models/tagClass";

export const getters: GetterTree<TagState, RootState> = {
  tags(state): Array<TagModel> {
    return state.tags;
  },
  loading(state): Boolean {
    return state.loading!;
  },
  categories(state): Array<Object> {
    return state.categories;
  },
  loading_categories(state): Boolean {
    return state.loading_categories!;
  }
};
