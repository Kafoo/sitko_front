<template>
  <v-card class="pt-7 pb-3 px-4">
    <div class="card-body py-0" v-if="!pickingDate">
      <v-form @submit.prevent="sendEdit" ref="form" v-model="form">
        <v-text-field
          outlined
          :label="$t('title') | capitalize"
          v-model="editedProject.title"
          :rules="[rules.required]"
        ></v-text-field>
        <v-select
          :label="$t('type') | capitalize"
          type="type"
          id="type"
          :items="types"
          :rules="[rules.required]"
          solo
          max-width="200px"
          v-model="editedProject.type"
        ></v-select>
        <v-textarea
          outlined
          :label="$t('description') | capitalize"
          name="input-7-4"
          v-model="editedProject.description"
          :rules="[rules.required]"
        ></v-textarea>

        <image-input
        delete
        size="100px"
        :image="editedProject.image" 
        @changeImage="changeImage"/>

        <v-chip-group column class="d-flex align-center">
          <v-chip
            v-if="
              !editedProject.caldates ||
                (editedProject.caldates && !editedProject.caldates.length)
            "
            class="py-5"
            @click="pickingDate = true"
          >
            {{ $t("actions.add_f", { item: $t("caldate") }) | capitalize }}
          </v-chip>

          <v-tooltip
            v-for="(caldate, index) in editedProject.caldates"
            :key="index"
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-chip
                class="caldate-chip py-6 mt-0"
                v-on="on"
                close
                @click:close="removeCaldate(index)"
              >
                <v-icon class="px-2" v-if="caldate.singleDate">today</v-icon>
                <v-icon class="px-2" v-else>date_range</v-icon>
              </v-chip>
            </template>
            <span>{{ caldate.chip }}</span>
          </v-tooltip>

          <v-tooltip
            v-if="editedProject.caldates && editedProject.caldates.length"
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                height="45"
                width="45"
                v-on="on"
                color="green"
                v-if="showCaldates"
                @click="pickingDate = true"
              >
                <v-icon>add</v-icon>
              </v-btn>
            </template>
            <span>
              {{ $t("actions.add_f", { item: $t("caldate") }) | capitalize }}
            </span>
          </v-tooltip>
        </v-chip-group>

        <v-divider class="mb-0"></v-divider>

        <v-card-actions class="actions d-flex justify-end">
          <v-spacer></v-spacer>
          <v-btn @click="closeEdit" :disabled="loading" text>
            {{ $t("confirm.cancel") }}
          </v-btn>
          <v-btn
            color="primary"
            type="submit"
            :disabled="loading || !form"
            text
          >
            {{ $t("confirm.confirm") }}
          </v-btn>
          <v-progress-linear
            v-if="loading"
            color="green darken-4 accent-4"
            indeterminate
            rounded
            height="6"
            class="progress"
          ></v-progress-linear>
        </v-card-actions>
      </v-form>
    </div>

    <ChooseDate
      class="choose-date"
      v-if="pickingDate"
      @closeDatePicker="closeDatePicker"
      @addCaldate="addCaldate"
    />
  </v-card>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import ChooseDate from "@c/organisms/app/ChooseDate.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue"
import ProjectModel from "@/ts/models/projectClass"

export default {
  name: "EditProject",
  components: {
    ChooseDate,
    ImageInput
  },

  data() {
    return {
      form: false,
      loading: false,
      pickingDate: false,
      editedProject: new ProjectModel,
      types: ["ferme", "écolieu", "autre"]
    };
  },

  mounted() {
    this.editedProject = new ProjectModel(this.propProject);
  },

  props: {
    propProject: Object,
    showCaldates: { type: Boolean, default: true }
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

  watch: {
    propProject(newValue) {
      this.editedProject = new ProjectModel(newValue);
    }
  },

  methods: {
    ...mapActions("project", ["SEND_PROJECT_EDITION"]),

    closeEdit() {
      this.$emit("closeEdit");
    },

    sendEdit() {
      this.loading = true;
      this.editedProject.projectOnly = !this.showCaldates;
      this.SEND_PROJECT_EDITION(this.editedProject)
        .then(() => {
          this.$emit("closeEdit");
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    closeDatePicker() {
      this.pickingDate = false;
    },

    addCaldate(caldate) {
      this.editedProject.caldates.push(caldate);
    },

    removeCaldate(index) {
      this.editedProject.caldates.splice(index, 1);
    },

    changeImage(data) {
      this.editedProject.image = data
    },

    removeImage() {
      this.editedProject.imageChanged = true;
      this.editedProject.image = null;
    }
  }
};
</script>

<style scoped>

.choose-date,
.card-body {
  animation: fade-in 0.4s ease;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.imgContainer {
  position: relative;
  display: inline-block;
}

.close {
  position: absolute;
  right: 3px;
  top: 3px;
}
</style>
