<template>
  <loading-circle v-if="loading" small />

  <div v-else-if="project" style="max-width:1000px; margin:auto">
    
    <div class="d-flex justify-center">
      <medium-image class="image mr-sm-5 flex-grow-0" :image="project.image" />
    </div>
    
    <div
      class="mx-5 mb-5 mt-2 d-flex flex-column flex-sm-row align-stretch justify-space-around"
    >
      <div
        class="mt-2 mb-5 d-flex flex-column align-center text-center text-sm-start align-sm-start"
      >
        <h1>
          {{ project.title }}
        </h1>


        <span class="ml-1 text-caption grey--text text--darken-1">
          {{ $t("created_by.project.public", { user: project.author.name }) | capitalize }}
        </span>

        <v-btn
          x-small
          text
          plain
          v-if="user.id == project.author.id"
          class="mb-2 pa-0"
          :to="`/project/${project.id}/edit`"
        >
          <v-icon small class="mr-1">edit</v-icon>
          {{$t('options.edit')}}
        </v-btn>
        <place-chip :place="project.place" />
      </div>

      <div 
      class="mt-4"
      >
        <current-caldates
          class="ml-1 mb-5"
          clickable
          :caldates="project.caldates"
          :label="$t('project dates') | capitalize"
          more
        />
      </div>
    </div>


    <div class="mx-5">
      <current-tags
        :tags="project.tags"
        :label="$t('project tags') | capitalize"
      />
    </div>

    <div
      class="description grey lighten-3 font-italic mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap"
      :class="$vuetify.breakpoint.name !== 'xs' ? 'rounded-xl' : ''"
    >
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
import CurrentTags from "@c/molecules/current/CurrentTags.vue";
import useFetcher from "@use/useFetcher";
import MediumImage from "@c/molecules/media/MediumImage.vue";
import CurrentCaldates from "@c/molecules/current/CurrentCaldates.vue";
import PlaceChip from "@c/atoms/place/PlaceChip.vue";

export default defineComponent({
  name: "ProjectOverview",

  components: {
    CurrentTags,
    MediumImage,
    CurrentCaldates,
    PlaceChip
  },

  setup(props, { root }) {
    const { user } = useGetters({ user: "auth/user" } as any);

    const project_id = parseInt(root.$route.params.id);
    var { entity:project, loading } = useFetcher("project/GET_PROJECT", project_id);

    return {
      project,
      loading,
      user
    };
  }
});
</script>

<style scoped>

</style>
