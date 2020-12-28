<template>
  <div>
    <div class="text-center">
      <v-btn
        large
        class="center mb-8 green lighten-1"
        justify="center"
        align="center"
      >
        {{ $t("actions.create", { item: $t("event") }) }}
      </v-btn>
    </div>

    <v-select
      :items="types"
      label="Type"
      outlined
      v-model="activeType"
    ></v-select>

    <!-- NO ACTIVE PROJECT -->
    <h4 v-if="!loading_projects && !projects.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("event") }) }} --
    </h4>

    <h4
      v-else-if="!loading_projects && !activeEvents.length"
      class="text-center"
    >
      -- {{ $t("data.empty_typed", { item: $t("event") }) }} --
    </h4>

    <!-- LOADINGS -->
    <div v-if="loading_projects" class="d-flex flex-column">
      <v-skeleton-loader
        v-for="item in [1, 2, 3, 4]"
        v-bind:key="item"
        class="boilerplate ma-1 elevation-3"
        height="60"
        type="table-heading"
      ></v-skeleton-loader>
    </div>

    <div v-else>
      <transition-group
        class="projects d-flex flex-column"
        name="list-complete"
        tag="p"
      >
        <!-- INDEX -->
        <div
          v-for="(project, index) in activeEvents"
          :key="project.id"
          class="list-complete-item"
        >
          <CardProject
            :project="project"
            :index="index"
            :expanded="project.expanded"
            @toogleExpand="toogleExpand(project.id)"
            @openEdit="openEdit"
            @deleteProject="SEND_PROJECT_DELETION"
          />
        </div>
      </transition-group>

      <!-- CREATION -->
      <v-dialog v-model="creating" width="500">
        <CreateProject @closeCreation="closeCreation" />
      </v-dialog>

      <!-- EDITION -->
      <v-dialog v-model="editing" width="500">
        <EditProject :propProject="editionProject" @closeEdit="closeEdit" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import EditProject from "@c/organisms/project/EditProject.vue";
import CreateProject from "@c/organisms/project/CreateProject.vue";
import CardProject from "@c/molecules/project/CardProject.vue";

export default {
  name: "Projects",

  data() {
    return {
      editing: false,
      creating: false,
      activeType: "",
      editionProject: {}
    };
  },

  components: {
    EditProject,
    CreateProject,
    CardProject
  },

  created() {
    this.activeType = this.types[0];

    if (location.hash) {
      this.hash = location.hash;
    }
    location.hash = "";
  },

  watch: {
    loading_projects: function() {
      if (this.loading_projects === false) {
        this.$nextTick(() => {
          if (this.hash) {
            var id = this.hash.slice(1);
            this.TOOGLE_PROJECT_EXPAND(id);
            setTimeout(() => {
              document.getElementById(id).scrollIntoView({
                behavior: "smooth"
              });
            }, 300);
          }
        });
      }
    },

    //If locale changes, types change and so must activeType
    types() {
      this.activeType = this.types[0];
    }
  },

  computed: {
    ...mapGetters("project", ["loading_projects", "projects"]),

    types() {
      return [this.$t("all"), "public", "perso", "détente"];
    },

    activeEvents() {
      return [];
    }
  },

  methods: {
    ...mapActions("project", [
      "getProjects",
      "SEND_PROJECT_DELETION",
      "TOOGLE_PROJECT_EXPAND"
    ]),
    openEdit(index) {
      this.editionProject = this.projects[index];
      this.editing = true;
    },
    closeEdit() {
      this.editing = false;
      this.editionProject = {};
    },
    closeCreation() {
      this.creating = false;
    },
    toogleExpand(id) {
      this.TOOGLE_PROJECT_EXPAND(id);
    }
  }
};
</script>

<style scoped>
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
