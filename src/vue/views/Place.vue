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
      class="flex-grow-1 flex-shrink-10"
      elevation="0"
      min-width="0"
      min-height="500px"
    >
      <router-view :place="place" :loading_place="loading"></router-view>
    </v-card>

    <float-menu v-if="place" :place="place" />
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { defineComponent } from "@vue/composition-api";
import Sidebar from "@c/molecules/app/Sidebar.vue";
import FloatMenu from "@c/molecules/place/FloatMenu.vue";
import useFetcher from "@use/useFetcher";

export default defineComponent({
  name: "Place",

  components: {
    Sidebar,
    FloatMenu
  },

  setup(props, { root }) {
    const place_id = parseInt(root.$route.params.id);

    var { entity: place, loading } = useFetcher("place/GET_PLACE", {action_param:place_id});

    return {
      place,
      loading
    };
  }
});
</script>

<style scoped></style>
