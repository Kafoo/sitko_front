import { MutationTree } from "vuex";
import { EventState } from "./types";
import EventModel from "@/ts/models/eventClass";

export const mutations: MutationTree<EventState> = {
  setEvents(state, payload: Array<EventModel>) {
    state.events = payload;
  },

  pushEvent(state, event: EventModel) {
    var exists = state.events.find((x: EventModel) => x.id === event.id);
    if (exists) {
      //refresh
      const index = state.events.indexOf(exists)
      state.events.splice(index, 1, event)
    } else {
      //or push
      state.events.push(event);
    }
  },

  removeEvent(state, place_id: number) {
    var exists = state.events.find((x: EventModel) => x.id === place_id);
    if (exists) {
      const index = state.events.indexOf(exists)
      state.events.splice(index, 1)
    }
  }
};
