<template>
  <v-avatar :size="size">
    <v-img :src="image" />
  </v-avatar>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TinyAvatar",

  props: {
    image: {
      type: String
    },
    size:{
      type:String,
      default:"35"
    }
  },

  setup() {
    return {};
  }
});
</script>

<style scoped></style>
