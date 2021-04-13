<template>
  <div class="d-flex justify-center">
    <v-card
      :tile="mobile"
      :elevation="mobile ? 0 : 2"
      class="flex-grow-1 align-center ma-xs-0 ma-sm-5 pa-sm-5"
      max-width="800px"
      min-width="0"
      min-height="500px"
    >
      <slot></slot>
    </v-card>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from "@vue/composition-api";
import { isMobile } from "@/ts/functions/composition/displayHelpers";

export default defineComponent({
  setup(props, { root }) {
    const mobile = isMobile(root);

    return { mobile };
  }
});
</script>
