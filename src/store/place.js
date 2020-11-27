import axios from "axios";
import Vue from 'vue'
import Place from '@/models/placeClass'

export default {
  namespaced: true,

  state: {
    places: [],
    place: {},
    loading_places:false,
    loading_place:false
  },

  getters: {
    places: state => state.places,
    place: state => state.place,
    loading_places: state => state.loading_places,
    loading_place: state => state.loading_place
  },

  mutations: {
    setPlace(state, place) {
      Vue.set(state, 'place', place)
    },
    setPlaces(state, places) {
      Vue.set(state, 'places', places)
    },
    setLoadingPlaces(state) {
      state.loading_places = true;
    },
    removeLoadingPlaces(state) {
      state.loading_places = false;
    },
    setLoadingPlace(state) {
      state.loading_place = true;
    },
    removeLoadingPlace(state) {
      state.loading_place = false;
    }
  },

  actions: {

    getPlaces({state, commit}){
      console.log(state.places)
      if (state.places.length === 0) {
        commit("setLoadingPlaces");
      }

      axios
        .get(process.env.VUE_APP_API_URL + "place")
        .then(response => {
          const newCollection = []
          for (const place of response.data) {
            newCollection.push(new Place(place))
          }
          commit('setPlaces', newCollection)
          commit("removeLoadingPlaces");
        })
        .catch(() => {});
    },

    getPlace({commit}, id){
      commit("setLoadingPlace");
      axios
        .get(process.env.VUE_APP_API_URL + "place/" + id)
        .then(response => {
          commit('setPlace', response.data)
          commit("removeLoadingPlace");
        })
        .catch(() => {});
    }

  }
}
