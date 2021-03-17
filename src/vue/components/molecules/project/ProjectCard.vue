<template>

  <projent-card :projent="project" type="project" :withPlace="withPlace" />

</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import ProjectModel from "@/ts/models/projectClass";
import ProjentCard from "@c/molecules/card/ProjentCard.vue"

export default defineComponent({
  name: "ProjectCard",

  components: {
    ProjentCard
  },

  props: {
    project: Object as () => ProjectModel,
    withPlace: {
      type: Boolean,
      default: false
    }
  },

  setup() {


    return {

    };
  }
});
</script>

<style scoped>

</style>
