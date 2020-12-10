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
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class LoadingBar extends Vue {
  @Prop(Boolean) loading?: boolean;
}
</script>

<style scoped>
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
