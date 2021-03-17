<template>
  <v-img
    :aspect-ratio="16/9"
    v-if="image"
    class="image mt-sm-5"
    :class="isDefault ? '' : 'c-pointer'"
    :src="image.full"
    @click="!isDefault ? (expand_image = true) : undefined"
  >
    <template>
      <v-dialog v-model="expand_image" width="90%">
        <image-popup :image="image" @close="expand_image = false" />
      </v-dialog>
    </template>
  </v-img>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import ImagePopup from "@c/organisms/app/ImagePopup.vue";
import ImageModel from "@/ts/models/imageClass";

export default defineComponent({
  name: "MediumImage",

  components: {
    ImagePopup
  },

  props: {
    image: {
      type: Object,
      default: () => new ImageModel()
    }
  },

  setup(props) {
    var expand_image = ref(false);

    const isDefault =
      props.image.full ===
      "https://res.cloudinary.com/dyigive9u/image/upload/v1611173096/default_image_01_scb2id.png";

    return {
      expand_image,
      isDefault
    };
  }
});
</script>


<style scoped>

.image {
  border-radius: 0 0 4px 4px;
  width: 60%;
  box-shadow: 0 0 5px black;
}

@media (max-width: 600px) {
  .image {
    border-radius: 0px;
    width: 100%;
    box-shadow: none;
  }
}

</style>
