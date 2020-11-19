<template>
  <div>
    <div class="text-center">
      <v-btn
        large
        @click="creating = true"
        class="center mb-8 green lighten-1"
        justify="center"
        align="center"
      >
        Créer un projet
      </v-btn>
    </div>

      <v-select
        :items="types"
        label="Type"
        outlined
        v-model="activeType"
      ></v-select>


    <h4 v-if="!loading_projects && !projects.length" class="text-center">
      - Il n'y a pas encore de projet -
    </h4>

    <h4 v-else-if="!loading_projects && !activeProjects.length" class="text-center">
      - Il n'y a pas encore de projet de ce type -
    </h4>

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
        <div v-for="(project, index) in activeProjects"
        :key="project.id"
        class="list-complete-item">
          <CardProject
          :project="project"
          :index="index"
          @openEdit="openEdit"
          @deleteProject="deleteProject"/>
        </div>
      </transition-group>

      <v-dialog v-model="creating" width="500">
        <CreateProject
          @closeCreation="closeCreation"
        />
      </v-dialog>

      <v-dialog v-model="editing" width="500">
        <EditProject
          :propProject="editionProject"
          @closeEdit="closeEdit"
        />
      </v-dialog>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import EditProject from "@/components/project/EditProject.vue";
import CreateProject from "@/components/project/CreateProject.vue";
import CardProject from "@/components/project/CardProject.vue";

export default {
  name: "Projects",
  components: {
    EditProject,
    CreateProject,
    CardProject
  },
  data() {
    return {
      editing: false,
      creating: false,
      types: ["tous les projets", "idée", "commun", "perso"],
      activeType: "tous les projets",
      editionProject: {},
    };
  },
  created() {
    this.getProjects();
  },
  computed: {
    ...mapGetters("project", ["loading_projects", "projects"]),
    ...mapGetters(["errors"]),
    activeProjects(){
      if (this.activeType === "tous les projets") {
        return this.projects
      }else{
        return this.projects.filter((project)=>{
          return project.type === this.activeType
        })
      }
    }
  },
  methods: {
    ...mapActions("project", ["getProjects", "deleteProject"]),
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
