<template>
  <primary-content-body>
    <h1 class="mb-8">{{$t('Places')}}</h1>

    <div v-if="loading_places" class="d-flex flex-wrap justify-center">
      <v-skeleton-loader
        type="card"
        class="ma-2"
        width="200px"
        height="200px"
        v-for="item in [1, 2, 3, 4, 5]"
        v-bind:key="item"
      ></v-skeleton-loader>
    </div>

    <div v-else class="d-flex flex-wrap justify-center">
      <card-place v-for="place in places" :key="place.id" :place="place" />
    </div>
  </primary-content-body>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import CardPlace from "@/components/places/CardPlace";
import PrimaryContentBody from "@/components/app/templates/PrimaryContentBody";

export default {
  components: {
    CardPlace,
    PrimaryContentBody
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters("place", ["loading_places", "places"])
  },

  created() {
    this.getPlaces();
  },

  methods: {
    ...mapActions("place", ["getPlaces"])
  }
};
</script>
