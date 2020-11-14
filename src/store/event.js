import axios from "axios";
import Vue from 'vue'
import Event from '@/models/eventClass'

export default {
  namespaced: true,

  state: {
    events: [],
    loading_events:false
  },

  getters: {
    events: state => state.events,
    loading_events: state => state.loading_events
  },

  mutations: {
    setEvents(state, events) {
      Vue.set(state, 'events', events)
    },
    setLoading(state) {
      state.loading_events = true;
    },
    removeLoading(state) {
      state.loading_events = false;
    }
  },

  actions: {

    getEvents({commit}){
      commit("setLoading");
      axios
        .get(process.env.VUE_APP_API_URL + "event")
        .then(response => {
          const newCollection = []
          for (const event of response.data) {
            newCollection.push(new Event(event))
          }
          commit('setEvents', newCollection)
          commit("removeLoading");
        })
        .catch(() => {});
    }
  }
};
