<template>
  <v-card class="pt-7 pb-3">
    <v-form @submit.prevent="sendEdit" ref="form" v-model="form">
      <v-text-field
        outlined
        class="mx-4"
        label="Titre"
        v-model="project.title"
        :rules="[v => !!v || 'Titre obligatoire']"
      ></v-text-field>
      <v-textarea
        outlined
        name="input-7-4"
        class="mx-4"
        label="Description"
        v-model="project.description"
        :rules="[v => !!v || 'Description obligatoire']"
      ></v-textarea>

      <v-chip-group>
        <v-chip v-for="event in project.events" :key="event.start">
          {{event.chip}}
        </v-chip>
      </v-chip-group>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeEdit" :disabled="loading">
          Annuler
        </v-btn>
        <v-btn text color="primary" type="submit" :disabled="loading || !form">
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
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "EditProject",
  data() {
    return {
      form: false,
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
    ...mapActions("project", ["sendEditProject"]),
    closeEdit() {
      this.$emit("closeEdit");
    },
    sendEdit() {
      this.loading = true;
      this.sendEditProject(this.project)
        .then(() => {
          this.$emit("closeEdit");
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
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
