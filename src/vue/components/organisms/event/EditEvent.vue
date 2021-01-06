<template>
  <v-card class="pt-7 pb-3 px-4">
    <div class="card-body py-0" v-if="!pickingDate">
      <v-form @submit.prevent="sendEdit" ref="form" v-model="form">
        <v-text-field
          outlined
          :label="$t('title') | capitalize"
          v-model="editedEvent.title"
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
          v-model="editedEvent.type"
        ></v-select>
        <v-textarea
          outlined
          :label="$t('description') | capitalize"
          name="input-7-4"
          v-model="editedEvent.description"
          :rules="[rules.required]"
        ></v-textarea>

        <div
          v-if="editedEvent.image && !editedEvent.imageChanged"
          class="imgContainer"
        >
          <img :src="editedEvent.image.thumb" />
          <v-btn
            class="close"
            color="secondary"
            fab
            x-small
            dark
            @click="removeImage"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </div>

        <v-file-input
          v-else
          v-model="editedEvent.file"
          :rules="[rules.image]"
          accept="image/jpeg"
          :label="$t('image') | capitalize"
          @change="imageChange"
          prepend-icon="insert_photo"
        />

        <v-chip-group column class="d-flex align-center">
          <v-chip
            v-if="
              !editedEvent.caldates ||
                (editedEvent.caldates && !editedEvent.caldates.length)
            "
            class="py-5"
            @click="pickingDate = true"
          >
            {{ $t("actions.add", { item: $t("caldate") }) | capitalize }}
          </v-chip>

          <v-tooltip
            v-for="(caldate, index) in editedEvent.caldates"
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
            v-if="editedEvent.caldates && editedEvent.caldates.length"
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
              {{ $t("actions.add", { item: $t("caldate") }) | capitalize }}
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
export default {
  name: "EditEvent",
  components: {
    ChooseDate
  },

  data() {
    return {
      form: false,
      loading: false,
      pickingDate: false,
      editedEvent: {},
      types: ["ferme", "écolieu", "autre"]
    };
  },

  mounted() {
    this.editedEvent = JSON.parse(JSON.stringify(this.propEvent));
  },

  props: {
    propEvent: Object,
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
    propEvent(newValue) {
      this.editedEvent = JSON.parse(JSON.stringify(newValue));
    }
  },

  methods: {
    ...mapActions("event", ["SEND_EVENT_EDITION"]),

    closeEdit() {
      this.$emit("closeEdit");
    },

    sendEdit() {
      this.loading = true;
      this.editedEvent.eventOnly = !this.showCaldates;
      this.SEND_EVENT_EDITION(this.editedEvent)
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
      this.editedEvent.caldates.push(caldate);
    },

    removeCaldate(index) {
      this.editedEvent.caldates.splice(index, 1);
    },

    imageChange() {
      this.editedEvent.imageChanged = true;
      if (this.editedEvent.file) {
        const reader = new FileReader();
        reader.readAsDataURL(this.editedEvent.file);
        reader.onload = e => {
          this.editedEvent.image = e.target.result;
        };
      } else {
        this.editedEvent.image = null;
      }
    },

    removeImage() {
      this.editedEvent.imageChanged = true;
      this.editedEvent.image = null;
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
