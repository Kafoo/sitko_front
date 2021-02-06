<template>
  <v-btn
    large
    @click="$emit('action')"
    class="center mb-8 green lighten-1"
    justify="center"
    align="center"
  >
    {{ $t("actions.create", { item: item }) }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CreateButton",

  props: {
    item: String
  }
});
</script>
