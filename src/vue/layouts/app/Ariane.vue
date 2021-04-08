<template>
  <div class="mx-sm-2 mx-1 mt-2 mb-4 d-flex justify-space-between flex-wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "",

  setup() {
    return {};
  }
});
</script>

<style scoped></style>
