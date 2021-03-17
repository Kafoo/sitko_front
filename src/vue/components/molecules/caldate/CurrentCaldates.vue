<template>
  <v-card 
  class="d-flex flex-column text-caption grey--text text--darken-1"
  elevation="0">
    <caldate-chip
    v-for="caldate in caldates.slice(0, 2)"
    :key="caldate.id"
    :caldate="caldate"
    clickable
    small/> 

    <span
      v-if="caldates.length > 2"
      :class="more ? 'text-decoration-underline c-pointer' : ''"
      @click="more ? (morePopup = true) : undefined"
      ><!--
    -->+
      {{ caldates.length - 2 }}
      {{ $tc("other caldate", caldates.length - 2 > 1 ? 2 : 1) }}
    </span>

    <v-dialog v-model="morePopup" max-width="400px">
      <caldates-popup
        @close="morePopup = false"
        :caldates="caldates"
        :title="title"
      />
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import CaldatesPopup from "@c/organisms/caldate/CaldatesPopup.vue";
import CaldateChip from "@c/atoms/caldate/CaldateChip.vue"

export default defineComponent({
  name: "CurrentCaldates",

  components: {
    CaldatesPopup,
    CaldateChip
  },

  props: {
    caldates: {
      type: Array,
      default: []
    },

    more: {
      type: Boolean,
      default: false
    },

    title: String
  },

  setup() {
    var morePopup = ref(false);

    return {
      morePopup
    };
  }
});
</script>

<style scoped></style>
