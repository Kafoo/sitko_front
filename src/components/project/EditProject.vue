<template>
  <v-card class="pt-7 pb-3">
    <v-text-field
      outlined
      class="mx-4"
      label="Titre"
      v-model="project.title"
    ></v-text-field>
    <v-textarea
      outlined
      name="input-7-4"
      class="mx-4"
      label="Description"
      v-model="project.description"
    ></v-textarea>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="closeEdit" :disabled="loading">
        Annuler
      </v-btn>
      <v-btn text color="primary" @click="sendEdit" :disabled="loading">
        Confirmer
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
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProject",
  data() {
    return {
      loading: false,
      project: {}
    };
  },
  mounted() {
    this.project = { ...this.propProject };
  },
  props: {
    propProject: Object
  },
  watch: {
    propProject(newValue) {
      this.project = { ...newValue };
    }
  },
  methods: {
    closeEdit() {
      this.$emit("closeEdit");
    },
    sendEdit() {
      this.loading = true;
      axios
        .put(
          process.env.VUE_APP_API_URL + "project/" + this.project.id,
          this.project
        )
        .then(response => {
          this.$emit("commitEdit", this.project);
          this.$emit("closeEdit");
          this.loading = false;
        })
        .catch(() => {
          console.log("error");
        });
    }
  }
};
</script>

<style>
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
