import { GetterTree } from "vuex";
import { CaldateState } from "./types";
import { RootState } from "@/ts/store/types";
import CaldateModel from "@/ts/models/caldateClass";

export const getters: GetterTree<CaldateState, RootState> = {
  caldates(state): Array<CaldateModel> {
    return state.caldates;
  }
};
