import { GetterTree } from "vuex";
import { TagState } from "./types";
import { RootState } from "@/ts/store/types";
import TagModel from "@/ts/models/tagClass";

export const getters: GetterTree<TagState, RootState> = {
  tags(state): Array<TagModel> {
    return state.tags;
  },
  categories(state): Array<Object> {
    return state.categories;
  }
};
