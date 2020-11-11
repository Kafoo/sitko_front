<template>
  <v-card class="pt-7 pb-3">
    <div class="card-body">
      <v-form @submit.prevent="createProject" ref="form" v-model="form">
        <label for="title" class="h3 mb-5">Nouveau Projet</label>
        <v-text-field
          label="Titre"
          outlined
          :rules="[v => !!v || 'Titre obligatoire']"
          v-model="newProject.title"
          :disabled="loading"
        ></v-text-field>
        <v-select
          label="Type"
          type="type"
          id="type"
          :items="types"
          :rules="[v => !!v || 'Type obligatoire']"
          solo
          max-width="200px"
          v-model="newProject.type"
        ></v-select>
        <v-textarea
          label="Description"
          type="description"
          id="description"
          outlined
          :rules="[v => !!v || 'Description obligatoire']"
          name="input-7-4"
          v-model="newProject.description"
          :disabled="loading"
        ></v-textarea>

        <v-card-actions class="d-flex justify-center">
          <v-btn @click="cancel" :disabled="loading">
            Annuler
          </v-btn>
          <v-btn type="submit" :disabled="loading || !form">
            Valider
          </v-btn>
        </v-card-actions>
        <v-progress-linear
          v-if="loading"
          color="green darken-4 accent-4"
          indeterminate
          rounded
          height="6"
          class="progress"
        ></v-progress-linear>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "CreateProject",
  data() {
    return {
      form: false,
      loading: false,
      newProject: {},
      types: ["commun", "idée", "perso"]
    };
  },
  mounted() {
    this.$store.commit("setErrors", {});
  },
  props: {
    project: Object
  },
  computed: {
    ...mapGetters(["errors"])
  },
  methods: {
    ...mapMutations(["setGeneralError"]),
    cancel() {
      this.newProject = {};
      this.$refs.form.reset();
      this.$emit("closeCreation");
    },
    createProject() {
      this.loading = true;
      axios
        .post(process.env.VUE_APP_API_URL + "project", this.newProject)
        .then(response => {
          this.loading = false;
          this.$emit("commitCreation", response.data.project);
          this.newProject = {};
          this.$refs.form.reset();
        })
        .catch(() => {
          this.loading = false;
          this.setGeneralError(
            "Oups, petite erreur dans la création du projet"
          );
        });
    }
  }
};
</script>

<style></style>
