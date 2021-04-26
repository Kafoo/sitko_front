<template>
  <v-img
    max-height="400px"
    width="100%"
    :aspect-ratio="16 / 9"
    v-if="comp_image"
    class="image"
    :class="image ? 'c-pointer' : ''"
    :src="comp_image.full"
    @click="image ? (expand_image = true) : undefined"
  >
    <template>
      <v-dialog v-model="expand_image" width="90%">
        <image-popup :image="comp_image" @close="expand_image = false" />
      </v-dialog>
    </template>
    <template v-slot:placeholder>
      <v-row
        class="image_placeholder fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          size="50"
          color="#858585"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import ImagePopup from "@c/organisms/app/ImagePopup.vue";
import ImageModel from "@/ts/models/imageClass";

export default defineComponent({
  name: "HeaderImage",

  components: {
    ImagePopup
  },

  props: {
    image: {
      type: Object
    }
  },

  setup(props) {
    var expand_image = ref(false);

    var comp_image = computed(()=>{
      if (props.image) {
        return props.image
      } else {
        return new ImageModel()
      }
    })

    return {
      expand_image,
      comp_image
    };
  }
});
</script>

<style scoped>
.image {
  border-radius: 0 0 4px 4px;
}

@media (max-width: 600px) {
  .image {
    border-radius: 0px;
  }
}
</style>
