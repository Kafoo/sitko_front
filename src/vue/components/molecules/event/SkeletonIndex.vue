<template>
  <v-skeleton-loader
    type="card"
    class="ma-2"
    width="180px"
    height="212px"
  ></v-skeleton-loader>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "EventSkeleton",

  setup() {
    return {};
  }
});
</script>
