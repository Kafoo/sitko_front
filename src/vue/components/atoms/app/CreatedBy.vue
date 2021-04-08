<template>
  <span v-if="item" class="text-caption grey--text text--darken-1">
    {{ $t("created_by." + item.essence + ".public") | capitalize }}
    <user-chip :user="item.author" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ProjectModel from "@/ts/models/projectClass";
import PlaceModel from "@/ts/models/placeClass";
import EventModel from "@/ts/models/eventClass";
import UserChip from "../user/UserChip.vue";

export default defineComponent({
  name: "CreatedBy",

  props: {
    item: Object as () => PlaceModel | ProjectModel | EventModel
  },

  components: {
    UserChip
  },

  setup() {
    return {};
  }
});
</script>

<style scoped></style>
