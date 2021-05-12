<template>
  <v-img
    class="choose-img rounded-lg elevation-3"
    :class="circle ? 'rounded-circle' : 'rounded-lg'"
    :width="size"
    :height="size"
    :src="imageSrc"
  />
</template>

<script lang="ts">
import { defineComponent, computed, Ref } from "@vue/composition-api";
import ImageModel from "@/ts/models/imageClass";

export default defineComponent({
  name: "",

  props: {
    image: [Object as () => ImageModel, String],

    size: {
      type: String,
      default: "170px"
    },

    default: {
      type: String,
      default: undefined
    },

    circle: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    var imageSrc: Ref<string> = computed(() => {
      if (props.image) {
        if (typeof props.image !== "string") {
          return props.image.medium;
        } else {
          return props.image;
        }
      } else {
        var image;

        if (props.default == "avatar") {
          image = new ImageModel("avatar");
          return image.medium;
        } else {
          image = new ImageModel();
          return image.medium;
        }
      }
    });

    return {
      imageSrc
    };
  }
});
</script>

<style scoped></style>
