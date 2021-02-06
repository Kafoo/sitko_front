import { MutationTree } from "vuex";
import { CaldateState } from "./types";
import CaldateModel from "@/ts/models/caldateClass";

export const mutations: MutationTree<CaldateState> = {
  pushCaldate(state, caldate: CaldateModel) {
    var exists = state.caldates.find((x: CaldateModel) => x.id === caldate.id);
    if (exists) {
      exists = caldate;
    } else {
      state.caldates.push(caldate);
    }
  }
};
