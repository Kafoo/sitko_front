import { ActionTree } from "vuex";
import { EventState } from "./types";
import { RootState } from "@/ts/store/types";
import EventModel from "@/ts/models/eventClass";
import axios from "axios";

export const actions: ActionTree<EventState, RootState> = {

  GET_EVENT({ commit, state }, event_id) {
    if (state.events.find((x: EventModel) => x.id === event_id)) {
      return true;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "event/" + event_id)
        .then(response => {
          //(Le projet aura été push dans le store)
          commit("pushEvent", new EventModel(response.data));
        })
        .catch(() => {});
    }
  },

  GET_ALL_EVENTS({ state, commit }) {
    if (state.fetched.all_events) {
      return true;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "event")
        .then(response => {
          state.fetched.all_events = Date.now();
          for (const event of response.data) {
            commit("pushEvent", new EventModel(event));
          }
        })
        .catch(() => {});
    }
  },

  GET_EVENTS_BY_PLACE({ state, commit }, place_id) {
    if (state.fetched.place_events[place_id]) {
      return true;
    } else {
      state.fetched.place_events[place_id] = Date.now();
      return axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/event")
        .then(response => {
          for (const event of response.data) {
            commit("pushEvent", new EventModel(event));
          }
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
    return axios.delete(process.env.VUE_APP_API_URL + "event/" + event_id)
      .then(response => {
        commit("removeEvent", event_id);
      });
  }

};
