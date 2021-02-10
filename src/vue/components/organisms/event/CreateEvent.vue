<template>
  <v-card class="pt-7 pb-3 px-4">
    <div class="card-body" v-if="!pickingDate">
      <v-form @submit.prevent="createEvent" ref="form" v-model="form">
        <div class="mb-4">
          <label for="title" class="title">
            {{ $t("actions.new", { item: $t("event") }) | camelize }}
          </label>
        </div>
        <v-text-field
          :label="$t('title') | capitalize"
          outlined
          :rules="[rules.required]"
          v-model="newEvent.title"
          :disabled="loading"
        ></v-text-field>
        <v-textarea
          :label="$t('description') | capitalize"
          type="description"
          id="description"
          outlined
          :rules="[rules.required]"
          name="input-7-4"
          v-model="newEvent.description"
          :disabled="loading"
        ></v-textarea>

        <tags-input
          :tags="newEvent.tags"
          @update="updateTags"
          label="Tags du lieu"
        />

        <image-input
          nullable
          size="100px"
          :image="newEvent.image"
          @update="changeImage"
        />

        <v-chip-group column>
          <v-chip
            v-if="
              !newEvent.caldates ||
                (newEvent.caldates && !newEvent.caldates.length)
            "
            class="py-5"
            @click="pickingDate = true"
          >
            {{ $t("actions.add_f", { item: $t("caldate") }) | capitalize }}
          </v-chip>

          <v-tooltip
            v-for="(caldate, index) in newEvent.caldates"
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
            v-if="newEvent.caldates && newEvent.caldates.length"
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
      @addCaldate="addCaldate"
    />
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import ChooseDate from "@c/organisms/app/ChooseDate.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import TagsInput from "@c/molecules/tag/TagsInput.vue";

export default {
  name: "CreateEvent",

  data() {
    return {
      place_id: this.$route.params.id,
      form: false,
      loading: false,
      pickingDate: false,
      newEvent: {
        place_id: this.$route.params.id,
        caldates: [],
        image: undefined,
        tags: []
      }
    };
  },

  components: {
    ChooseDate,
    ImageInput,
    TagsInput
  },

  props: {
    event: Object
  },

  computed: {
    rules() {
      return {
        required: v =>
          !!v || this.$options.filters.capitalize(this.$t("form.required"))
      };
    }
  },

  methods: {
    ...mapActions("event", ["SEND_EVENT_CREATION"]),
    cancel() {
      this.resetEvent();
      this.$emit("closeCreation");
    },

    resetEvent() {
      this.newEvent = {
        place_id: this.place_id,
        caldates: []
      };
    },

    createEvent() {
      this.loading = true;
      this.SEND_EVENT_CREATION(this.newEvent)
        .then(() => {
          this.loading = false;
          this.$emit("closeCreation");
          this.resetEvent();
        })
        .catch(() => {
          this.loading = false;
        });
    },
    closeDatePicker() {
      this.pickingDate = false;
    },
    addCaldate(caldate) {
      this.newEvent.caldates.push(caldate);
    },
    removeCaldate(index) {
      this.newEvent.caldates.splice(index, 1);
    },

    changeImage(data) {
      this.newEvent.image = data;
    },

    updateTags(tags) {
      this.newEvent.tags = tags;
    }
  }
};
</script>
