<template>
  <div 
  v-if="!loading && project"
  class="pt-sm-5"
  style="max-width:800px; margin:auto">

    <div class="d-flex flex-column flex-sm-row justify-center align-center mb-5">

        <medium-image 
        class="image mr-sm-5 flex-grow-0"
        :image="project.image"/>

      <div class="d-flex flex-column flex-wrap align-center align-sm-start">
        <h1 class="mt-2">
          {{ project.title }}

          <v-btn icon fab small class="ml-1" :to="`/project/${project.id}/edit`">
            <v-icon>edit</v-icon>
          </v-btn>
        </h1>

        <current-caldates
        class="ml-1"
        :caldates="project.caldates"
        title="Dates du projet"
        more
        />

      </div>
    </div>

    <div class="mx-2">
    
      <current-tags :tags="project.tags" label="Tags du projet" />
    </div>


    <div 
    class="description grey lighten-3 font-italic mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap"
    :class="$vuetify.breakpoint.name !== 'xs'?'rounded-xl':''">
      {{ project.description }}
    </div>

  </div>

</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed
} from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import ProjectModel from "@/ts/models/projectClass";
import CurrentTags from "@c/molecules/tag/CurrentTags.vue";
import useProjectGetter from "@use/useProjectGetter";
import MediumImage from "@c/molecules/media/MediumImage.vue"
import CurrentCaldates from "@c/molecules/caldate/CurrentCaldates.vue"

export default defineComponent({
  name: "ProjectOverview",

  components: {
    CurrentTags,
    MediumImage,
    CurrentCaldates
  },

  setup(props, {root}) {
  
    const project_id = parseInt(root.$route.params.id)
    var { project, loading } = useProjectGetter(project_id);

    return {
      project,
      loading
    };
  }
});
</script>

<style scoped>

.image {
  border-radius: 4px;
  box-shadow: 0 0 5px black;
  width: 200px;
}

@media (max-width: 600px) {
  .image {
    width: 100%;
    height: auto;
    max-height: 300px;
    border-radius: 0px;
    box-shadow: none;
  }
}

</style>
