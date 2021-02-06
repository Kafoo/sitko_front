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
        <v-textarea
          outlined
          :label="$t('description') | capitalize"
          name="input-7-4"
          v-model="editedEvent.description"
          :rules="[rules.required]"
        ></v-textarea>

        <tags-input
          :tags="editedEvent.tags"
          @update="
            tags => {
              editedEvent.tags = tags;
            }
          "
          label="Tags de l'événement"
        />

        <image-input
          nullable
          size="100px"
          :image="editedEvent.image"
          @update="changeImage"
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
            {{ $t("actions.add_f", { item: $t("caldate") }) | capitalize }}
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
import ImageInput from "@c/molecules/media/ImageInput.vue";
import EventModel from "@/ts/models/eventClass";
import TagsInput from "@c/molecules/tag/TagsInput.vue";

export default {
  name: "EditEvent",
  components: {
    ChooseDate,
    ImageInput,
    TagsInput
  },

  data() {
    return {
      form: false,
      loading: false,
      pickingDate: false,
      editedEvent: new EventModel()
    };
  },

  mounted() {
    this.editedEvent = new EventModel(this.propEvent);
  },

  props: {
    propEvent: Object
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
      this.editedEvent = new EventModel(newValue);
    }
  },

  methods: {
    ...mapActions("event", ["SEND_EVENT_EDITION"]),

    closeEdit() {
      this.$emit("closeEdit");
    },

    sendEdit() {
      this.loading = true;
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

    changeImage(data) {
      this.editedEvent.image = data;
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
