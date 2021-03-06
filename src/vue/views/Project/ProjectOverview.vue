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

        <created-by :item="project" />

        <v-btn
          x-small
          text
          plain
          v-if="project.can.update"
          class="mb-2 pa-0"
          :to="`/project/${project.id}/edit`"
        >
          <v-icon small class="mr-1">edit</v-icon>
          {{ $t("options.edit") }}
        </v-btn>

        <place-chip :place="project.place" />

        <v-card
        v-if="project.place.location"
        class="location text-caption grey--text text-lighten-2 px-1 mt-1"
        elevation="0">
          <v-icon small>place</v-icon>
          {{project.place.location.address.city}}, {{project.place.location.address.countryName}}
        </v-card>

      </div>

      <div class="mt-4">
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
      class="description grey lighten-3 text-subtitle mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap"
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
import CreatedBy from "@c/atoms/app/CreatedBy.vue";

export default defineComponent({
  name: "ProjectOverview",

  components: {
    CurrentTags,
    MediumImage,
    CurrentCaldates,
    PlaceChip,
    CreatedBy
  },

  setup(props, { root }) {

    const project_id = parseInt(root.$route.params.id);
    var { entity: project, loading } = useFetcher(
      "project/GET_PROJECT",
      {action_param:project_id}
    );

    return {
      project,
      loading
    };
  }
});
</script>

<style scoped></style>
