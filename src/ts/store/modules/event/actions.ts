import { ActionTree } from "vuex";
import { EventState } from "./types";
import { RootState } from "@/ts/store/types";
import EventModel from "@/ts/models/eventClass";
import axios from "axios";

export const actions: ActionTree<EventState, RootState> = {
  GET_EVENT({ commit, state }, event_id) {
    var event = state.events.find((x: EventModel) => x.id === event_id);

    if (event && (!event.image || event.image && event.image.public_id !== "downloading")) {
      return event;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "event/" + event_id)
        .then(response => {
          event = new EventModel(response.data);
          commit("pushEvent", event);
          return event;
        })
        .catch(() => {});
    }
  },

  GET_ALL_EVENTS({ state, commit }) {
    if (state.fetched.all_events) {
      return state.events;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "event")
        .then(response => {
          state.fetched.all_events = Date.now();
          for (const event of response.data) {
            commit("pushEvent", new EventModel(event));
          }
          return state.events;
        })
        .catch(() => {});
    }
  },

  GET_INC_EVENTS({ state, getters, commit }) {
    if (state.fetched.inc_events) {
      return getters.inc_events;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "event?filter=incoming")
        .then(response => {
          state.fetched.inc_events = Date.now();
          for (const event of response.data) {
            commit("pushEvent", new EventModel(event));
          }
          return getters.inc_events;
        })
        .catch(() => {});
    }
  },

  GET_EVENTS_BY_PLACE({ state, commit }, place_id) {
    if (state.fetched.place_events[place_id]) {
      return state.events.filter((x: EventModel) => x.place_id == place_id);
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/event")
        .then(response => {
          state.fetched.place_events[place_id] = Date.now();
          for (const event of response.data) {
            commit("pushEvent", new EventModel(event));
          }
          return state.events.filter((x: EventModel) => x.place_id == place_id);
        })
        .catch(() => {});
    }
  },

  SEND_EVENT_CREATION({ commit }, event) {
    return axios
      .post(process.env.VUE_APP_API_URL + "event", event)
      .then(response => {
        var newEvent = new EventModel(response.data.event);
        commit("pushEvent", newEvent);
      });
  },

  SEND_EVENT_EDITION({ commit }, event) {
    return axios
      .put(process.env.VUE_APP_API_URL + "event/" + event.id, event)
      .then(response => {
        commit("pushEvent", new EventModel(response.data.event));
      });
  },

  SEND_EVENT_DELETION({ commit }, event_id) {
    //Delete call to API
    return axios
      .delete(process.env.VUE_APP_API_URL + "event/" + event_id)
      .then(response => {
        commit("removeEvent", event_id);
      });
  }
};
