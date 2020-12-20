<template>
  <div>
    <v-skeleton-loader
      v-if="loading_place"
      type="heading, list-item@5"
      class="pt-10 pa-8 ma-5 elevation-3 flex-shrink-0"
      width="350px"
      height="600px"
    >
    </v-skeleton-loader>

    <v-card
      v-else
      class="d-flex flex-column align-center ma-5 elevation-3 flex-shrink-0"
      width="350px"
      height="600px"
    >
      <v-card-title>{{ place.name }}</v-card-title>

      <v-btn
        v-for="(item, index) in placeNavItems"
        :key="index"
        :to="item.path"
        width="80%"
        class="my-2"
      >
        <v-icon class="mx-3">{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  props: {
    placeNavItems: Array
  },

  computed: {
    ...mapGetters("place", ["place", "loading_place"])
  }
};
</script>
