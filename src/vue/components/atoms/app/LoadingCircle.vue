<template>
  <v-progress-circular
    indeterminate
    :color="app ? 'green lighten-2' : 'grey'"
    class="loading"
    :class="relative ? '' : 'centered'"
    :size="small ? 50 : 100"
    :width="small ? 6 : 10"
  ></v-progress-circular>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "LoadingCircle",

  props: {
    small: {
      type: Boolean,
      default: false
    },
    relative: {
      type: Boolean,
      default: false
    },
    app: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    return {};
  }
});
</script>

<style scoped>
.loading.centered {
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translate(
    -50%,
    -50%
  ); /* This is a shorthand of
                                         translateX(-50%) and translateY(-50%) */
}
</style>
