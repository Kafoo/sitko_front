<template>
  <v-btn
    large
    to="/place/create"
    class="text-center center green lighten-1"
    justify="center"
    align="center"
  >
    {{ $t("actions.create", { item: $t("place") }) }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CreatePlaceButton",

  setup() {
    return {};
  }
});
</script>

<style scoped></style>
