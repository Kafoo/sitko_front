<template>
  <v-btn
    large
    @click="$emit('action')"
    class="center mb-6 green lighten-1"
    justify="center"
    rounded
    align="center"
  >
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CreateButton",

  props: {
    text: String
  }
});
</script>
