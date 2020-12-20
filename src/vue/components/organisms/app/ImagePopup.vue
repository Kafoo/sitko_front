<template>
  <v-card color="black" height="90vh">
    <v-btn
      class="close"
      color="secondary"
      fab
      x-small
      dark
      @click="$emit('toogleImage')"
    >
      <v-icon>close</v-icon>
    </v-btn>
    <v-img
      contain
      height="90vh"
      aspect-ratio="1"
      :lazy-src="image.thumb"
      :src="image.full"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script>
import {defineComponent} from "@vue/composition-api"

export default defineComponent({
  name: "ImagePopup",

  props: {
    image:Object
  },

})
</script>

<style scoped>
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
}
</style>
