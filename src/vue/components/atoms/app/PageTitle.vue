<template>
  <h1 class="text-center">
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "PageTitle",

  props: {
    title: String
  }
});
</script>
