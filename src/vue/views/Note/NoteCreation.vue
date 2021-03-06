<template>
  <primary-content-body>
    <div class="card-body">
      <ariane>
        <back-button v-if="lastRoute" :path="lastRoute.path" />
      </ariane>

      <v-form @submit.prevent="createNote" v-model="form">
        <cud-layout>
          <template v-slot:header-title>
            {{ $t("actions.new.note") | camelize }}
          </template>

          <template v-slot:title>
            <v-text-field
              :label="$t('title') | capitalize"
              outlined
              maxlength="40"
              :rules="[rules.required[0]]"
              v-model="newNote.title"
              :disabled="loading"
            ></v-text-field>
          </template>

          <template v-slot:visibility>
            <visibility-input
              type="place_entity"
              v-model="newNote.visibility"
            />
          </template>

          <template v-slot:description>
            <v-textarea
              :label="$t('description') | capitalize"
              outlined
              rows="6"
              :rules="[rules.required[0]]"
              v-model="newNote.description"
              :disabled="loading"
            ></v-textarea>
          </template>

          <template v-slot:actions>
            <v-btn
              type="submit"
              :disabled="loading || !form"
              :loading="loading"
            >
              {{ $t("confirm.confirm") }}
            </v-btn>
          </template>
        </cud-layout>
      </v-form>
    </div>
  </primary-content-body>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  computed,
  onMounted,
  watch
} from "@vue/composition-api";
import { useActions, useGetters } from "vuex-composition-helpers";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";
import BackButton from "@c/atoms/app/BackButton.vue";
import CudLayout from "@/vue/layouts/crud/CudLayout.vue";
import VisibilityInput from "@c/molecules/input/VisibilityInput.vue";

export default defineComponent({
  name: "NoteCreation",

  components: {
    ImageInput,
    TagsInput,
    CaldateInput,
    BackButton,
    CudLayout,
    VisibilityInput
  },

  setup(props, { root }) {
    const { lastRoute } = useGetters({ lastRoute: "app/lastRoute" } as any);

    const rules = useInputRules();

    const { SEND_NOTE_CREATION } = useActions({
      SEND_NOTE_CREATION: "note/SEND_NOTE_CREATION"
    } as any);

    var place_id = ref(root.$route.params.place_id);
    var form = ref(false);
    var loading = ref(false);
    var newNote = ref({
      place_id: place_id.value,
      caldates: [],
      image: undefined,
      tags: []
    });

    const createNote = () => {
      loading.value = true;
      SEND_NOTE_CREATION(newNote.value)
        .then(() => {
          loading.value = false;
          root.$router.push("/place/" + newNote.value.place_id + "/notes");
        })
        .catch(() => {
          loading.value = false;
        });
    };
    const updateTags = (tags: any) => {
      newNote.value.tags = tags;
    };

    return {
      form,
      rules,
      loading,
      newNote,
      createNote,
      lastRoute
    };
  }
});
</script>
