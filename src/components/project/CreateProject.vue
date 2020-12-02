<template>
  <v-card class="pt-7 pb-3 px-4">
    <div class="card-body" v-if="!pickingDate">
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

        <v-file-input
          v-model="newProject.file"
          :rules="[
            v => !v || v.size < 2000000 || 'Poids maximal de l\'image : 2 MB'
          ]"
          accept="image/jpeg"
          label="Image"
          @change="onFileChange"
          prepend-icon="insert_photo"
        />

        <v-chip-group column>
          <v-tooltip
            v-for="(event, index) in newProject.events"
            :key="index"
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-chip
                class="event-chip py-6 mt-0"
                v-on="on"
                close
                @click:close="removeEvent(index)"
              >
                <v-icon class="px-2" v-if="event.singleDate">today</v-icon>
                <v-icon class="px-2" v-else>date_range</v-icon>
              </v-chip>
            </template>
            <span>{{ event.chip }}</span>
          </v-tooltip>
        </v-chip-group>

        <v-card-actions class="d-flex justify-center">
          <v-btn @click="pickingDate = true">Ajouter un événement</v-btn>
        </v-card-actions>

        <v-card-actions class="d-flex justify-center">
          <v-btn @click="cancel" :disabled="loading">
            Annuler
          </v-btn>
          <v-btn type="submit" :disabled="loading || !form">
            Valider
          </v-btn>
        </v-card-actions>
      </v-form>
      <v-progress-linear
        v-if="loading"
        color="green darken-4 accent-4"
        indeterminate
        rounded
        height="6"
        class="progress"
      ></v-progress-linear>
    </div>

    <ChooseDate
      class="choose-date"
      v-if="pickingDate"
      @closeDatePicker="closeDatePicker"
      @addEvent="addEvent"
    />
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import ChooseDate from "@/components/project/ChooseDate.vue";

export default {
  name: "CreateProject",

  data() {
    return {
      place_id: this.$route.params.id,
      form: false,
      loading: false,
      pickingDate: false,
      newProject: {
        place_id: this.$route.params.id,
        events: []
      },
      types: ["ferme", "écolieu", "autre"]
    };
  },

  components: {
    ChooseDate
  },

  props: {
    project: Object
  },

  computed: {},

  methods: {
    ...mapActions("project", ["sendCreateProject"]),
    cancel() {
      this.resetProject();
      this.$refs.form.reset();
      this.$emit("closeCreation");
    },

    resetProject() {
      this.newProject = {
        place_id: this.place_id,
        events: []
      };
    },

    createProject() {
      this.loading = true;
      this.sendCreateProject(this.newProject)
        .then(() => {
          this.loading = false;
          this.$emit("closeCreation");
          this.resetProject();
          this.$refs.form.reset();
        })
        .catch(() => {
          this.loading = false;
        });
    },
    closeDatePicker() {
      this.pickingDate = false;
    },
    addEvent(event) {
      this.newProject.events.push(event);
    },
    removeEvent(index) {
      this.newProject.events.splice(index, 1);
    },
    onFileChange() {
      if (this.newProject.file) {
        const reader = new FileReader();
        reader.readAsDataURL(this.newProject.file);
        reader.onload = e => {
          this.newProject.image = e.target.result;
        };
      } else {
        this.newProject.image = undefined;
      }
    }
  }
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
