<template>
  <div 
  v-if="!loading_place"
  class="text-center" >

    <h1 class="mb-3">{{place.name}}</h1>

    <img class='image' 
    :src="place.image.medium"
    width="250px"
    />

    <h3 class="mt-6">{{place.description}}</h3>

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

<style scoped>
  
  .image{
    border-radius: 4px;
    box-shadow: 0 0 5px black;
  }

</style>