<template>
  <v-card class="d-flex" color="black" height="90vh">
    <v-btn
      class="close"
      color="secondary"
      fab
      x-small
      dark
      @click="$emit('toogle')"
    >
      <v-icon>close</v-icon>
    </v-btn>
    <cropper
      class="cropper"
      :src="image"
      :stencil-props="{aspectRatio: 1}"
    ></cropper>
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-card>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api"
import { Cropper } from 'vue-advanced-cropper'

export default defineComponent({
  name: "CropPopup",

  props: {
    image:String
  },

  components: {
    Cropper
  }

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
