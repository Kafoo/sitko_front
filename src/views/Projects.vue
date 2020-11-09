<template>
  <div class="home mt-5 d-flex justify-center">
    <v-card max-width="1000px" width="90%" class="pa-8 mt-2 elevation-5">

      <v-card class="mb-8 green lighten-5 elevation-6 ">
        <div class="card-body">
          <form @submit.prevent="createProject">
            <label for="title" class="h3 mb-5">Nouveau Projet</label>
            <v-text-field
              outlined
              :class="{ 'is-invalid': errors.title }"
              id="name"
              v-model="newProject.title"
              label="Titre"
              :disabled="createLoading"
            ></v-text-field>
            <div class="invalid-feedback" v-if="errors.title">
              {{ errors.title[0] }}
            </div>
            <v-select
              :items="types"
              label="type"
              solo
              class="select-type"
              :class="{ 'is-invalid': errors.title }"
              max-width="200px"
              v-model="newProject.type"
            ></v-select>
            <div class="invalid-feedback" v-if="errors.type">
              {{ errors.type[0] }}
            </div>
            <v-textarea
              outlined
              name="input-7-4"
              :class="{ 'is-invalid': errors.description }"
              id="name"
              label="Description"
              v-model="newProject.description"
              :disabled="createLoading"
            ></v-textarea>
            <div class="invalid-feedback" v-if="errors.description">
              {{ errors.description[0] }}
            </div>

            <v-card-actions class="d-flex justify-center">
              <v-btn type="submit" :disabled="createLoading">
                Créer
              </v-btn>
            </v-card-actions>
            <v-progress-linear
              v-if="createLoading"
              color="green darken-4 accent-4"
              indeterminate
              rounded
              height="6"
              class="progress"
            ></v-progress-linear>
          </form>
        </div>
      </v-card>

      <h2 class="text-center mb-5">
        Projets existants
      </h2>

      <h4 v-if="!generalLoading && !projects.length"
      class="text-center">- Il n'y a pas encore de projet -</h4>

      <div v-if="generalLoading" class="d-flex justify-space-around flex-wrap">
        <v-skeleton-loader
          v-for="item in [1,2,3,4]"
          v-bind:key="item"
          class="pa-5 ma-1 elevation-3 d-flex flex-grow-1"
          width="300"
          height="250"
          type="article, actions"
        ></v-skeleton-loader>
      </div>

      <div v-else>
        <transition-group class="d-flex justify-space-around flex-wrap" name="list-complete" tag="p">
          <v-card
          v-for="(project, index)  in projects" :key="project.id"
          class="project d-flex flex-column flex-grow-1 ma-1 elevation-3 list-complete-item"
          width="300"
          height="200">
            <v-card-title> 
              {{project.title}}
            </v-card-title>
            <v-card-subtitle>
              {{project.type}}          
            </v-card-subtitle>
            <v-card-text class="description pb-0">
              <v-clamp autoresize :max-lines="3">
                {{project.description}}
              </v-clamp>      
            </v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn small @click="openEdit(index)" :disabled="project.deleting">
                modifier
              </v-btn>
              <v-btn small @click="deleteProject(project.id)" :disabled="project.deleting">
                supprimer
              </v-btn>
            </v-card-actions>
          </v-card>
        </transition-group>

        <editProjectPopup :dialog="dialog" :propProject="editProject" v-on:commitEdit="commitEdit" v-on:closeDialog="closeDialog"/>
      </div>


    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import VClamp from "vue-clamp";
import editProjectPopup from "@/components/project/editProjectPopup.vue"

export default {
  name: "Projects",
  components:{
    VClamp,
    editProjectPopup
  },
  data() {
    return {
      generalLoading: false,
      createLoading:false,
      dialog:false,
      editProject: {},
      newProject: {},
      projects: [],
      types:["commun", "idée", "perso"]
    };
  },
  mounted(){
    this.generalLoading = true
    this.getProjects();
  },
  computed: {
    ...mapGetters(["errors"]),
    ...mapGetters("auth", ["user"])
  },
  methods: {
    ...mapActions("auth", ["sendVerifyResendRequest"]),
    openEdit(index){
      this.editProject = this.projects[index]
      this.dialog = true
    },
    commitEdit(project){
      const tamere = project
      let editedProjectId = project.id
      let oldProject = this.projects.find(x => x.id === editedProjectId)
      let oldProjectIndex = this.projects.indexOf(oldProject)
      console.log(oldProjectIndex)
      this.projects.splice(oldProjectIndex, 1, project)
    },
    closeDialog(){
      this.dialog = false
    },
    createProject(){
      this.createLoading = true
      axios
      .post(process.env.VUE_APP_API_URL + "project", this.newProject)
      .then(response => {
        this.createLoading = false
        this.projects.push(response.data.project)
        this.newProject = {}
      })
      .catch(() => {
        console.log('error')
      });
    },
    deleteProject(id){
      //Deleting state
      let project = this.projects.find(x => x.id === id)
      this.$set(project, 'deleting', true)
      project.deleting = true;
      this.projects.splice(this.projects.indexOf(project), 1)
      //Delete call to API
      axios
      .delete(process.env.VUE_APP_API_URL + "project/" + id)
      .then(response => {
        console.log(response.data.success)
      })
      .catch(() => {
        console.log('error')
      });
    },
    getProjects(){
      axios
      .get(process.env.VUE_APP_API_URL + "project")
      .then(response => {
        this.projects = response.data
        this.generalLoading = false
      })
      .catch(() => {
      });
    }
  }
};
</script>

<style scoped>
  
  .list-complete-item {
    transition: all 0.2s;
  }
  .list-complete-enter{
    opacity: 0;
    transform: translateX(500px);
  }
  .list-complete-leave-to{
    opacity: 0;
    transform: translateX(500px);
  }
  .list-complete-leave-active {
    position: absolute;
  }


</style>