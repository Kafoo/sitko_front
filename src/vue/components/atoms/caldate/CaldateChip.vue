<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-chip
        class="caldate-chip py-6 my-1 mx-1"
        v-on="on"
        close
        @click:close="$emit('remove', caldate)"
      >
        <v-icon class="px-2" v-if="caldate.singleDate">today</v-icon>
        <v-icon class="px-2" v-else>date_range</v-icon>
      </v-chip>
    </template>
    <span>{{ caldate.chip }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CaldateModel from "@/ts/models/caldateClass";

export default defineComponent({
  name: "",

  props: {
    caldate: {
      type: Object
    }
  },

  setup() {
    return {};
  }
});
</script>

<style scoped></style>
