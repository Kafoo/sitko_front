<template>

  <div class="text-center"
  v-if="!loading_place">

    <h1 class="mb-6">{{place.name}}</h1>

    <h5>Page facebook</h5>
    <h5>Instagram</h5>
    <h5>E-mail</h5>
    <h5>...</h5>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("place", ["place", 'loading_place']),
  },
  methods: {

  }
};
</script>
