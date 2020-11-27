<template>

  <div class="d-flex justify-center">
    <v-card :tile="tile" class="account d-flex flex-column flex-grow-1 align-center ma-xs-0 ma-sm-5 elevation-4 pa-5"
    max-width="800px">

      <h1 class="mb-8">Mes lieux</h1>

      <div
      v-if="loading_places"
      class="d-flex flex-wrap justify-center">
        <v-skeleton-loader
        type="card"
        class="ma-2"
        width="200px"
        height="200px"
        v-for="item in [1, 2, 3, 4, 5]"
        v-bind:key="item"
        ></v-skeleton-loader>
      </div>

      <div 
      v-else
      class="d-flex flex-wrap justify-center">
        <card-place
        v-for="place in places"
        :key="place.id"
        :place="place"
        />
      </div>

    </v-card>
  </div>

</template>

<script>
import CardPlace from "@/components/places/CardPlace"
import { mapGetters, mapActions, mapMutations } from "vuex";

export default{

  components:{
    CardPlace
  },

  data(){
    return{

    }
  },

  computed: {
    ...mapGetters("place", ["loading_places", "places"]),
    tile () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
      }
      return false
    },
  },

  created() {
    this.getPlaces();
  },

  methods:{
    ...mapActions("place", ["getPlaces"]),
  }
}

</script>