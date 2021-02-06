<template>
  <primary-content-body>
    <div v-if="!loading && event" class="card-body py-0">
      <v-form @submit.prevent="editEvent" v-model="form">

        <v-row justify="center">
          <label
            for="name"
            class="name text-h5 font-weight-bold black--text mb-3"
          >
            <!-- TOTRANSLATE -->
            Edition du Projet
          </label>
        </v-row>

        <v-row justify="center">
            <image-input
              nullable
              :image="event.image"
              @update="
                image => {
                  event.image = image;
                }
              "
            />
        </v-row>

        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-text-field
              outlined
              :label="$t('title') | capitalize"
              v-model="event.title"
              :rules="[rules.required[0]]"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12" sm="10">
            <v-textarea
              outlined
              :label="$t('description') | capitalize"
              name="input-7-4"
              v-model="event.description"
              :rules="[rules.required[0]]"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12">
            <tags-input
              :tags="event.tags"
              @update="
                tags => {
                  event.tags = tags;
                }
              "
              label="Tags du projet"
            />
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-3">
          <caldate-input
            :caldates="event.caldates"
            @update="
              caldates => {
                event.caldates = caldates;
              }
            "
          />
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>

          <!-- TOTRANSLATE -->
          <delete-button
            :disabled="loading_edit"
            :loading="loading_deletion"
            text="Supprimer le projet"
            :confirmation_text="$t('Event deletion is definitive.')"
            @confirm-action="deleteEvent"
          />

          <v-btn 
          type="submit" 
          color="success" 
          :loading="loading_edit" 
          :disabled="loading_edit || !form"
          >
            <!-- TOTRANSLATE -->
            Valider
          </v-btn>
        </v-card-actions>

      </v-form>
    </div>
  </primary-content-body>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from "@vue/composition-api";
import { useActions } from "vuex-composition-helpers";
import useEventGetter from "@use/useEventGetter";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import EventModel from "@/ts/models/eventClass";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import DeleteButton from "@c/atoms/app/DeleteButton.vue"

export default defineComponent({
  name: "EventEdition",

  components: {
    TagsInput,
    ImageInput,
    CaldateInput,
    DeleteButton
  },

  setup(props, {root} ) {

    var form = ref(false);
    var loading_deletion = ref(false);
    var loading_edit = ref(false);

    const rules = useInputRules();

    const event_id = parseInt(root.$route.params.id)
    var { event, loading } = useEventGetter(event_id, true);

    const { SEND_EVENT_EDITION } = useActions({
      SEND_EVENT_EDITION: "event/SEND_EVENT_EDITION"
    } as any);
    const { SEND_EVENT_DELETION } = useActions({
      SEND_EVENT_DELETION: "event/SEND_EVENT_DELETION"
    } as any);

    const editEvent = () => {
    console.log(event.value.image)
      loading_edit.value = true;
      SEND_EVENT_EDITION(event.value)
        .then(() => {
          loading_edit.value = false;
          root.$router.push("/event/" + event.value.id);
        })
        .catch(() => {
          loading_edit.value = false;
        });
    };

    const deleteEvent = () => {
      loading_deletion.value = true;
      SEND_EVENT_DELETION(event.value.id)
        .then(() => {
          loading_deletion.value = false;
          root.$router.push("/place/" + event.value.place_id);
        })
        .catch(() => {
          loading_deletion.value = false;
        });
    };

    return {
      loading,
      loading_edit,
      loading_deletion,
      rules,
      form,
      event,
      deleteEvent,
      editEvent
    };
  }
});
</script>

<style scoped></style>
