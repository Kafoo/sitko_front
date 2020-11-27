import axios from "axios";
import Vue from 'vue'
import Event from '@/models/eventClass'

export default {
  namespaced: true,

  state: {
    events: [],
    loading_events:false,
    firstFetch:''
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
    },
    setFirstFetch(state, value){
      state.firstFetch = value
    }
  },

  actions: {

    getEvents({rootState, state, commit}, place_id){

      console.log(rootState.place.place.id)
      console.log(place_id)

      if (rootState.place.place.id == place_id && state.firstFetch == place_id) {
        // No '==' strict opposite exists
      }else{
        commit("setLoading");
        commit('setEvents', [])
        commit('setFirstFetch', place_id)
      }

      axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/event" )
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
