<template>
  <v-card class="pt-7 pb-3 px-4">
    <div class="card-body" v-if="!pickingDate">
      <v-form @submit.prevent="createProject" ref="form" v-model="form">
        <div class="mb-4">
          <label for="title" class="title">
            {{ $t("actions.new", { item: $t("project") }) | camelize }}
          </label>
        </div>
        <v-text-field
          :label="$t('title') | capitalize"
          outlined
          :rules="[rules.required]"
          v-model="newProject.title"
          :disabled="loading"
        ></v-text-field>
        <v-select
          :label="$t('type') | capitalize"
          type="type"
          id="type"
          :items="types"
          :rules="[rules.required]"
          solo
          max-width="200px"
          v-model="newProject.type"
        ></v-select>
        <v-textarea
          :label="$t('description') | capitalize"
          type="description"
          id="description"
          outlined
          :rules="[rules.required]"
          name="input-7-4"
          v-model="newProject.description"
          :disabled="loading"
        ></v-textarea>

        <v-file-input
          v-model="newProject.file"
          :label="$t('image') | capitalize"
          :rules="[rules.image]"
          accept="image/jpeg"
          @change="changeImage"
        />

        <v-chip-group column>
          <v-chip
            v-if="
              !newProject.events ||
                (newProject.events && !newProject.events.length)
            "
            class="py-5"
            @click="pickingDate = true"
          >
            {{ $t("actions.add", { item: $t("event") }) | capitalize }}
          </v-chip>

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

          <v-tooltip
            v-if="newProject.events && newProject.events.length"
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                height="45"
                width="45"
                v-on="on"
                color="green"
                @click="pickingDate = true"
              >
                <v-icon>add</v-icon>
              </v-btn>
            </template>
            <span>
              {{ $t("actions.add", { item: $t("event") }) | capitalize }}
            </span>
          </v-tooltip>
        </v-chip-group>

        <v-card-actions class="d-flex justify-center">
          <v-btn @click="cancel" :disabled="loading">
            {{ $t("confirm.cancel") }}
          </v-btn>
          <v-btn type="submit" :disabled="loading || !form">
            {{ $t("confirm.confirm") }}
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
import ChooseDate from "@c/organisms/app/ChooseDate.vue";

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
    ChooseDate,
  },

  props: {
    project: Object
  },

  computed: {
    rules() {
      return {
        required: v =>
          !!v || this.$options.filters.capitalize(this.$t("form.required")),
        image: v =>
          !v ||
          v.size < 3000000 ||
          this.$options.filters.capitalize(
            this.$t("media.max_size", { max: "3 MB" })
          )
      };
    }
  },

  methods: {
    ...mapActions("project", ["SEND_PROJECT_CREATION"]),
    cancel() {
      this.resetProject();
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
      this.SEND_PROJECT_CREATION(this.newProject)
        .then(() => {
          this.loading = false;
          this.$emit("closeCreation");
          this.resetProject();
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

    changeImage() {
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