<template>
  <div>
    <page-title class="my-5" :title="$t('place projects') | capitalize" />
    <div v-if="user.place && user.place.id === place_id" class="text-center">
      <create-button
        :item="$t('project')"
        @action="$router.push('/project/create/' + place_id)"
      />
    </div>

    <!-- No Project -->
    <h4 v-if="!loading && !projects.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("project") }) }} --
    </h4>

    <!-- No Active Project -->
    <h4 v-else-if="!loading && !activeProjects.length" class="text-center">
      -- {{ $t("data.empty_typed", { item: $t("project") }) }} --
    </h4>

    <!-- Loadings -->
    <div v-if="loading" class="projects d-flex justify-center flex-wrap">
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
          v-for="project in activeProjects"
          :key="project.id"
          class="list-complete-item ma-2"
        >
          <project-card class="mb-sm-2 mb-5" :project="project" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ProjectCard from "@c/molecules/project/ProjectCard.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import SkeletonIndex from "@c/molecules/project/SkeletonIndex.vue";
import PageTitle from "@c/atoms/app/PageTitle.vue";

export default {
  name: "Projects",

  components: {
    ProjectCard,
    CreateButton,
    SkeletonIndex,
    PageTitle
  },

  data() {
    return {
      hash: null,
      place_id: parseInt(this.$route.params.id),
      editing: false,
      creating: false,
      editionProject: undefined,
      loading: false
    };
  },

  mounted() {
    this.loading = true;
    this.GET_PROJECTS_BY_PLACE(this.place_id).then(() => {
      this.loading = false;
    });
  },

  computed: {
    ...mapGetters("project", ["projects"]),
    ...mapGetters("auth", ["user"]),

    activeProjects() {
      return this.projects.filter(x => x.place_id == this.place_id);
    }
  },

  methods: {
    ...mapActions("project", ["GET_PROJECTS_BY_PLACE"])
  }
};
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
