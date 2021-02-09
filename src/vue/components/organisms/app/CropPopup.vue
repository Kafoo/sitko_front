<template>
  <v-card class="d-flex justify-center" color="black" height="80vh">
    <v-btn
      class="close"
      color="secondary"
      fab
      small
      dark
      @click="$emit('toogle')"
    >
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <cropper
      class="cropper"
      :src="image"
      :stencil-props="{ aspectRatio: 1 }"
      @change="crop"
    ></cropper>
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>

    <v-btn class="validate-button" color="success" @click="validate"
      >Valider</v-btn
    >
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Cropper } from "vue-advanced-cropper";

export default defineComponent({
  name: "CropPopup",

  props: {
    image: String
  },

  components: {
    Cropper
  },

  setup(props, { emit }) {
    var croppedImage = ref("");

    const validate = () => {
      emit("confirm", croppedImage.value);
      emit("toogle");
    };

    var crop = (e: any) => {
      croppedImage.value = e.canvas.toDataURL();
    };

    return {
      crop,
      validate
    };
  }
});
</script>

<style scoped>
.close {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
}

.validate-button {
  position: absolute;
  bottom: 20px;
}
</style>
