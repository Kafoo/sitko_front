<template>
  <div class="home mt-5 d-flex justify-center">
    <v-card max-width="1000px" width="90%" class="pa-8 mt-2 elevation-3">
      <div class="text-center">
        <v-btn
          large
          @click="creating = true"
          class="center mb-8 green lighten-1"
          justify="center"
          align="center"
        >
          Créer
        </v-btn>
      </div>

        <v-select
          :items="types"
          label="Type"
          outlined
          v-model="activeType"
        ></v-select>


      <h4 v-if="!loading && !projects.length" class="text-center">
        - Il n'y a pas encore de projet -
      </h4>

      <h4 v-else-if="!loading && !activeProjects.length" class="text-center">
        - Il n'y a pas encore de projet de ce type -
      </h4>

      <div v-if="loading" class="d-flex flex-wrap">
        <v-skeleton-loader
          v-for="item in [1, 2, 3, 4]"
          v-bind:key="item"
          class="boilerplate pa-5 ma-1 elevation-3"
          width="200"
          height="180"
          type="article, actions"
        ></v-skeleton-loader>
      </div>

      <div v-else>
        <transition-group
          class="projects d-flex flex-wrap"
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
            @commitCreation="commitCreation"
            @closeCreation="closeCreation"
          />
        </v-dialog>

        <v-dialog v-model="editing" width="500">
          <EditProject
            :propProject="editionProject"
            @commitEdit="commitEdit"
            @closeEdit="closeEdit"
          />
        </v-dialog>
      </div>
    </v-card>
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
      loading: false,
      editing: false,
      creating: false,
      projects: [],
      types: ["tous les projets", "idée", "commun", "perso"],
      activeType: "tous les projets",
      editionProject: {},
    };
  },
  mounted() {
    this.loading = true;
    this.getProjects();
  },
  computed: {
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
    ...mapMutations(["setGeneralError"]),
    openEdit(index) {
      this.editionProject = this.projects[index];
      this.editing = true;
    },
    commitEdit(project) {
      let editedProjectId = project.id;
      let oldProject = this.projects.find(x => x.id === editedProjectId);
      let oldProjectIndex = this.projects.indexOf(oldProject);
      this.projects.splice(oldProjectIndex, 1, project);
    },
    commitCreation(project) {
      this.creating = false;
      this.projects.push(project);
    },
    closeEdit() {
      this.editing = false;
    },
    closeCreation() {
      this.creating = false;
    },
    deleteProject(id) {
      //Deleting state
      let project = this.projects.find(x => x.id === id);
      let index = this.projects.indexOf(project);
      this.projects.splice(index, 1);
      //Delete call to API
      axios
        .delete(process.env.VUE_APP_API_URL + "project/" + id)
        .then(response => {
          console.log(response.data.success);
        })
        .catch(() => {
          console.log(index);
          this.projects.splice(index, 0, project);
          this.setGeneralError(
            "Oups, petite erreur dans la suppression du projet"
          );
        });
    },
    getProjects() {
      axios
        .get(process.env.VUE_APP_API_URL + "project")
        .then(response => {
          this.projects = response.data;
          this.loading = false;
        })
        .catch(() => {});
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
    transform: translateX(500px);
  }
  .list-complete-leave-to {
    opacity: 0;
    transform: translateX(5000000px);
  }
  .list-complete-leave-active {
    position: absolute;
  }



</style>
