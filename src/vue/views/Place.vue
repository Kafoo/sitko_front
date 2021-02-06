<template>
  <div class="place d-flex pb-12" style="max-width:1200px; margin:auto">
    <div v-if="$route.name != 'PlaceOverview'" class="hidden-sm-and-down">
      <v-skeleton-loader
        v-if="loading"
        type="heading, list-item@5"
        class="pt-10 pa-8 ma-5 elevation-3 flex-shrink-0"
        width="300px"
        height="400px"
      >
      </v-skeleton-loader>

      <sidebar v-else :place="place" />

    </div>

    <v-divider 
      v-if="$route.name != 'PlaceOverview'" 
      class="hidden-sm-and-down"
      vertical
    ></v-divider>

    <v-card
      class="ma-xs-0 ma-sm-5 pa-0 flex-grow-1 flex-shrink-10"
      elevation="0"
      min-width="0"
    >
      <router-view></router-view>
    </v-card>

    <float-menu v-if="place" :place="place"/>


  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Sidebar from "@c/molecules/app/Sidebar.vue";
import FloatMenu from "@c/molecules/place/FloatMenu.vue"

export default {
  name: "Place",
  components: {
    Sidebar,
    FloatMenu
  },
  data() {
    return {
      place_id: parseInt(this.$route.params.id),
      loading: false
    };
    
  },

  computed: {
    ...mapGetters("place", ["places"]),

    place() {
      return this.places.find(x => x.id === this.place_id);
    },

    elevation() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 0;
      }
      return 3;
    }
  },

  created() {
    this.loading = true;
    this.GET_PLACE(this.place_id).then(() => {
      this.loading = false;
    });
  },

  methods: {
    ...mapActions("place", ["GET_PLACE"])
  }
};
</script>

<style scoped>

</style>
