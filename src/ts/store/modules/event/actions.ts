import { ActionTree } from "vuex";
import { EventState } from "./types";
import { RootState } from "@/ts/store/types";
import EventModel from "@/ts/models/eventClass";
import axios from "axios";

export const actions: ActionTree<EventState, RootState> = {

  GET_PLACE_EVENTS({ rootState, state, commit }, { place_id, hash }) {
    //Loading flag only if first time fetch for this place
    if (
      rootState.place.place.id == place_id &&
      state.firstFetch == place_id
    ) {
      //If hash, we still load not to UImess
      if (hash) {
        commit("setLoading");
        commit("setFirstFetch", place_id);
      }
    } else {
      commit("setLoading");
      commit("setFirstFetch", place_id);
    }
    //FETCH
    axios
      .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/event")
      .then(response => {
        const newCollection = [];

        for (const event of response.data) {
          newCollection.push(new EventModel(event));
        }

        //Refresh event if currently loading
        if (state.loading_events) {
          commit("setEvents", newCollection);
          commit("removeLoading");
        } else {
          //Suggest refresh to user without messing with UI
        }
      })
      .catch(() => {});
  },

  SEND_EVENT_CREATION({ commit }, event) {
    return axios
      .post(process.env.VUE_APP_API_URL + "event", event)
      .then(response => {
        var newEvent = new EventModel(response.data.event);
        commit("pushEvent", newEvent);
        commit(
          "app/setAlert",
          // TOTRANSLATE
          { type: "success", msg: "Evénement créé avec succès" },
          { root: true }
        );
      })
  },

  SEND_EVENT_EDITION({ commit }, event) {
    return axios
      .put(process.env.VUE_APP_API_URL + "event/" + event.id, event)
      .then(response => {
        commit("editEvent", new EventModel(response.data.event));
      })
  },

  SEND_EVENT_DELETION({ commit, state }, id) {
    //Deleting state
    let event = state.events.find((x:EventModel) => x.id === id);
    let index = state.events.indexOf(event);
    commit("removeEvent", index);
    //Delete call to API
    axios
      .delete(process.env.VUE_APP_API_URL + "event/" + id)
      .catch(() => {
        commit("insertEvent", {event, index});
      });
  },

  TOOGLE_EVENT_EXPAND({ commit }, id) {
    commit("closeExpands", id);
    commit("toogleExpand", id);
  }

};
