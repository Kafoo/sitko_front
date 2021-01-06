import { MutationTree } from "vuex";
import { EventState } from "./types";
import EventModel from "@/ts/models/eventClass";

export const mutations: MutationTree<EventState> = {
  setEvents(state, payload:Array<EventModel>) {
    state.events = payload
  },

  removeEvent(state, index:number) {
    state.events.splice(index, 1);
  },

  insertEvent(state, {event, index} ) {
    state.events.splice(index, 0, event);
  },

  pushEvent(state, event:EventModel) {
    state.events.push(event);
  },

  editEvent(state, event:EventModel) {
    let oldEvent = state.events.find((x:EventModel) => x.id === event.id);
    let oldEventIndex = state.events.indexOf(oldEvent);
    state.events.splice(oldEventIndex, 1, event);
  },

  setLoading(state) {
    state.loading_events = true;
  },

  removeLoading(state) {
    state.loading_events = false;
  },

  closeExpands(state, id:number | undefined) {
    state.events.forEach((event:EventModel) => {
      if (event.id !== id) {
        event.expanded = false;
      }
    });
  },

  toogleExpand(state, id:number) {
    var event = state.events.find((x:EventModel) => x.id == id);
    event.expanded = !event.expanded;
  },

  setFirstFetch(state, value) {
    state.firstFetch = value;
  }
};
