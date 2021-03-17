<template>
  <v-card class="text-center pb-3">
    <close-dialog @action="$emit('close')" />
    <div class="text-h6 pa-3">
      {{ title }}
    </div>
    <div class="d-flex flex-column align-center">

      <caldate-chip 
      v-for="caldate in caldates"
      :key="caldate.id"
      :caldate="caldate"
      clickable
      /> 

    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CloseDialog from "@c/atoms/app/CloseDialog.vue";
import CaldateChip from "@c/atoms/caldate/CaldateChip.vue"

export default defineComponent({
  name: "CaldatesPopup",

  components: { 
    CloseDialog,
    CaldateChip 
  },

  props: {
    caldates: {
      type: Array,
      default: []
    },
    title: String
  },

  setup() {
    return {};
  }
});
</script>

<style scoped>
.chip {
  width: max-content;
}
</style>
