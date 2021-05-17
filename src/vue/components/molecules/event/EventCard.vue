<template>
  <projent-card 
  :projent="event" 
  type="event" 
  :withPlace="withPlace"
  :withLocation="withLocation"/>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import EventModel from "@/ts/models/eventClass";
import ProjentCard from "@c/molecules/card/ProjentCard.vue";

export default defineComponent({
  name: "EventCard",

  components: {
    ProjentCard
  },

  props: {
    event: Object as () => EventModel,
    withPlace: {
      type: Boolean,
      default: false
    },
    withLocation: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    return {};
  }
});
</script>

<style scoped></style>
