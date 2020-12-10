<template>
  <v-progress-circular
    indeterminate
    color="green lighten-2"
    class="mt-16"
    size="100"
    width="10"
  ></v-progress-circular>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class LoadingCircle extends Vue {}
</script>
