<template>
  <primary-content-body>
    <loading-circle v-if="loading" small />
    <div v-else-if="note" class="card-body">
      <ariane>
        <back-button v-if="lastRoute" :path="lastRoute.path" />
      </ariane>

      <v-form @submit.prevent="editNote" v-model="form">
        <cud-layout>
          <template v-slot:header-title>
            {{ $t("note edition") | capitalize }}
          </template>

          <template v-slot:title>
            <v-text-field
              outlined
              class="rounded-lg"
              :label="$t('title') | capitalize"
              v-model="note.title"
              :rules="[rules.required[0]]"
            ></v-text-field>
          </template>

          <template v-slot:description>
            <v-textarea
              outlined
              class="rounded-lg"
              :label="$t('description') | capitalize"
              name="input-7-4"
              v-model="note.description"
              :rules="[rules.required[0]]"
            ></v-textarea>
          </template>

          <template v-slot:actions>
            <delete-button
              :disabled="loading_edit"
              :loading="loading_deletion"
              :text="$t('delete note')"
              :confirmation_text="$t('Note deletion is definitive.')"
              @confirm-action="deleteNote"
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
import { useActions, useGetters } from "vuex-composition-helpers";
import useFetcher from "@use/useFetcher";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import NoteModel from "@/ts/models/noteClass";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import DeleteButton from "@c/atoms/app/DeleteButton.vue";
import PlaceChip from "@c/atoms/place/PlaceChip.vue";
import CudLayout from "@/vue/layouts/crud/CudLayout.vue";

export default defineComponent({
  name: "NoteEdition",

  components: {
    TagsInput,
    ImageInput,
    CaldateInput,
    DeleteButton,
    PlaceChip,
    CudLayout
  },

  setup(props, { root }) {
    const { lastRoute } = useGetters({ lastRoute: "app/lastRoute" } as any);

    var form = ref(false);
    var loading_deletion = ref(false);
    var loading_edit = ref(false);

    const rules = useInputRules();

    const note_id = parseInt(root.$route.params.id);

    var { entity: note, loading } = useFetcher("note/GET_NOTE", note_id, true);

    const { SEND_NOTE_EDITION } = useActions({
      SEND_NOTE_EDITION: "note/SEND_NOTE_EDITION"
    } as any);
    const { SEND_NOTE_DELETION } = useActions({
      SEND_NOTE_DELETION: "note/SEND_NOTE_DELETION"
    } as any);

    const editNote = () => {
      loading_edit.value = true;
      SEND_NOTE_EDITION(note.value)
        .then(() => {
          loading_edit.value = false;
          root.$router.push("/place/" + note.value.place_id + "/notes");
        })
        .catch(() => {
          loading_edit.value = false;
        });
    };

    const deleteNote = () => {
      loading_deletion.value = true;
      SEND_NOTE_DELETION(note.value.id)
        .then(() => {
          loading_deletion.value = false;
          root.$router.push("/place/" + note.value.place_id);
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
      note,
      deleteNote,
      editNote,
      lastRoute
    };
  }
});
</script>

<style scoped></style>
