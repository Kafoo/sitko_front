<template>
  <h1>{{ title | capitalize }}</h1>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class PageTitle extends Vue {
  @Prop(String) title: string | undefined;
}
</script>
