<template>
  <v-img
    :aspect-ratio="16 / 9"
    v-if="comp_image"
    class="image mt-sm-5"
    :class="image ? 'c-pointer' : ''"
    :src="comp_image.full"
    @click="image ? (expand_image = true) : undefined"
  >
    <template>
      <v-dialog v-model="expand_image" width="90%">
        <image-popup :image="comp_image" @close="expand_image = false" />
      </v-dialog>
    </template>
  </v-img>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import ImagePopup from "@c/organisms/app/ImagePopup.vue";
import ImageModel from "@/ts/models/imageClass";

export default defineComponent({
  name: "MediumImage",

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
      comp_image,
      expand_image
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
