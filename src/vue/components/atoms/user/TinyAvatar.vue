<template>
  <v-avatar :size="size">
    <v-img :src="imageSrc" />
  </v-avatar>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import ImageModel from "@/ts/models/imageClass";

export default defineComponent({
  name: "TinyAvatar",

  props: {
    image: {
      type: Object as () => ImageModel
    },
    size: {
      type: String,
      default: "35"
    }
  },

  setup(props) {
    var imageSrc: any = computed(() => {
      if (props.image) {
        return props.image.thumb;
      } else {
        var image = new ImageModel();
        return image.thumb;
      }
    });

    return {
      imageSrc
    };
  }
});
</script>

<style scoped></style>
