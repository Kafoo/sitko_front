import { GetterTree } from "vuex";
import { EventState } from "./types";
import { RootState } from "@/ts/store/types";
import EventModel from "@/ts/models/eventClass";

export const getters: GetterTree<EventState, RootState> = {
  events(state): Array<EventModel> {
    return state.events;
  },
  loading_events(state): Boolean {
    return state.loading_events;
  }
};
