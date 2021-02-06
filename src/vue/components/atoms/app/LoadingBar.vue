<template>
  <v-progress-linear
    v-if="loading"
    color="green darken-4 accent-4"
    indeterminate
    rounded
    height="6"
    class="progress"
  ></v-progress-linear>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "LoadingBar",

  props: {
    loading: Boolean
  }
});
</script>

<style scoped>
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
