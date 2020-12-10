import { MutationTree } from "vuex";
import { EventState } from "./types";
import EventModel from "@/ts/models/eventClass";

export const mutations: MutationTree<EventState> = {

  setEvents(state, payload:Array<EventModel>) {
    state.events = payload
  },
  setLoading(state) {
    state.loading_events = true;
  },
  removeLoading(state) {
    state.loading_events = false;
  },
  setFirstFetch(state, value:string) {
    state.firstFetch = value;
  }

};
