<template>
  <v-btn
    class="close"
    color="secondary"
    fab
    x-small
    dark
    @click="$emit('action')"
  >
    <v-icon>close</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CloseDialog",

});
</script>

<style scoped>
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
}
</style>
