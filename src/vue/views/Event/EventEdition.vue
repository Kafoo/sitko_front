<template>
  <primary-content-body>
    <loading-circle v-if="loading" small />
    <div v-else-if="event" class="card-body">

      <v-row class="mx-sm-2 mt-2 mb-4">
        <back-button 
        :text="event.title"
        :path="event.path"/>
      <v-row>
      </v-row>
        <place-chip :place="event.place"/>
      </v-row>

      <v-form @submit.prevent="editEvent" v-model="form">

        <cud-layout>

          <template v-slot:header-title>
            {{ $t("event edition") | capitalize }}
          </template>

          <template v-slot:image>
            <image-input
              nullable
              :image="event.image"
              @update="
                image => {
                  event.image = image;
                }
              "
            />
          </template>

          <template v-slot:title>
            <v-text-field
              outlined
              class="rounded-lg"
              :label="$t('title') | capitalize"
              v-model="event.title"
              :rules="[rules.required[0]]"
            ></v-text-field>
          </template>

          <template v-slot:visibility>
            <v-select
              disabled :items="['Public', 'Restreint', 'Privé']"
              label="Visibilité"
              outlined
              class="rounded-lg"
            ></v-select>

            <help
            class="mt-2 mx-2"
            :text="$t('help.visibility')"
            />
          </template>

          <template v-slot:description>
            <v-textarea
              outlined
              class="rounded-lg"
              :label="$t('description') | capitalize"
              name="input-7-4"
              v-model="event.description"
              :rules="[rules.required[0]]"
            ></v-textarea>
          </template>

          <template v-slot:tags>
            <tags-input
              :tags="event.tags"
              @update="
                tags => {
                  event.tags = tags;
                }
              "
              :label="$t('event tags') | capitalize"
            />
          </template>

          <template v-slot:caldates>
            <caldate-input
              :caldates="event.caldates"
              @update="
                caldates => {
                  event.caldates = caldates;
                }
              "
              :label="$t('event dates') | capitalize"
            />
          </template>

          <template v-slot:actions>
            <delete-button
              :disabled="loading_edit"
              :loading="loading_deletion"
              :text="$t('delete event')"
              :confirmation_text="$t('Event deletion is definitive.')"
              @confirm-action="deleteEvent"
            />

            <v-btn
              type="submit"
              color="success"
              :loading="loading_edit"
              :disabled="loading_edit || !form"
            >
              {{ $t("confirm.save") }}
            </v-btn>
          </template>

        </cud-layout>

      </v-form>
    </div>
  </primary-content-body>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  watch
} from "@vue/composition-api";
import { useActions } from "vuex-composition-helpers";
import useFetcher from "@use/useFetcher";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import EventModel from "@/ts/models/eventClass";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import DeleteButton from "@c/atoms/app/DeleteButton.vue";
import PlaceChip from "@c/atoms/place/PlaceChip.vue"
import BackButton from "@c/atoms/app/BackButton.vue"
import CudLayout from "@/vue/layouts/crud/CudLayout.vue"

export default defineComponent({
  name: "EventEdition",

  components: {
    TagsInput,
    ImageInput,
    CaldateInput,
    DeleteButton,
    PlaceChip,
    BackButton,
    CudLayout
  },

  setup(props, { root }) {
  
    var form = ref(false);
    var loading_deletion = ref(false);
    var loading_edit = ref(false);

    const rules = useInputRules();

    const event_id = parseInt(root.$route.params.id);

    var { entity:event, loading } = useFetcher("event/GET_EVENT", event_id, true);

    const { SEND_EVENT_EDITION } = useActions({
      SEND_EVENT_EDITION: "event/SEND_EVENT_EDITION"
    } as any);
    const { SEND_EVENT_DELETION } = useActions({
      SEND_EVENT_DELETION: "event/SEND_EVENT_DELETION"
    } as any);

    const editEvent = () => {
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
