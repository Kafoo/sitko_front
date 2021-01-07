<template>
  <div v-if="!loading_place" class="text-center">

    <h1 class="mb-3">
      {{ place.name }}

      <v-btn 
      icon
      fab
      small
      class="ml-1"
      :to="`/dashboard/place/${place.id}`">
        <v-icon>edit</v-icon>
      </v-btn>
    </h1>

    <img class="image" :src="place.image.medium" width="250px" />

    <div class="mt-6 breakwrap">{{ place.description }}</div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"
import { useGetters } from 'vuex-composition-helpers';
import axios from "axios";

export default defineComponent({

  name : "Overview",

  setup() {

    const { place } = useGetters({place: 'place/place'} as any)
    const { loading_place } = useGetters({loading_place: 'place/loading_place'} as any)

    return{
      place,
      loading_place
    }

  }

});
</script>

<style scoped>
.image {
  border-radius: 4px;
  box-shadow: 0 0 5px black;
}
</style>
