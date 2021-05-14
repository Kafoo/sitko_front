<template>
  <loading-circle v-if="!place" small />
  <div v-else>
    <page-title>{{ $t("place projects") | capitalize }}</page-title>
    <div v-if="place.can.createEntity" class="text-center">
      <create-button
        :text="$t('actions.create.project')"
        @action="$router.push('/project/create/' + place.id)"
      />
    </div>

    <!-- No Project -->
    <h4 v-if="!loading_projects && !projects.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("project") }) }} --
    </h4>

    <!-- No Active Project -->
    <h4 v-else-if="!loading_projects && !projects.length" class="text-center">
      -- {{ $t("data.empty_typed", { item: $t("project") }) }} --
    </h4>

    <!-- Loadings -->
    <div
      v-if="loading_projects"
      class="projects d-flex justify-center flex-wrap"
    >
      <skeleton-index v-for="item in 6" v-bind:key="item" />
    </div>

    <!-- Index -->
    <div v-else>
      <transition-group
        class="projects d-flex justify-center flex-wrap"
        name="list-complete"
        tag="p"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="list-complete-item ma-2"
        >
          <project-card class="mb-sm-2 mb-5" :project="project" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useGetters } from "vuex-composition-helpers";
import useFetcher from "@use/useFetcher";
import ProjectCard from "@c/molecules/project/ProjectCard.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import SkeletonIndex from "@c/molecules/project/SkeletonIndex.vue";
import PlaceModel from "@/ts/models/placeClass";

export default defineComponent({
  name: "Projects",

  components: {
    ProjectCard,
    CreateButton,
    SkeletonIndex
  },

  props: {
    place: Object as () => PlaceModel
  },

  setup(props, { root }) {
    const { user } = useGetters({ user: "auth/user" } as any);

    var hash = ref(null);
    const place_id = parseInt(root.$route.params.id);

    var { entity: projects, loading: loading_projects } = useFetcher(
      "project/GET_PROJECTS_BY_PLACE",
      {action_param:place_id}
    );

    return {
      projects,
      loading_projects,
      user
    };
  }
});
</script>

<style scoped>
.projects::after {
  content: "";
  width: 472px;
}

.list-complete-item {
  transition: all 0.2s;
}
.list-complete-enter {
  opacity: 0;
  transform: translateX(-500px);
}
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(500px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
