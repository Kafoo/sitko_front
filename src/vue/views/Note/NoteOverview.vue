<template>
  <div class="d-flex justify-center">
    <loading-circle v-if="loading" small />

    <v-card v-else-if="note" min-width="400px" max-width="600px" class="ma-8">
      <div
        class="mx-sm-4 mb-5 mt-2 d-flex flex-column flex-sm-row align-stretch"
      >
        <div class="mt-2 mb-5 d-flex flex-column align-center align-sm-start">
          <h1>
            {{ note.title }}
          </h1>

          <created-by :item="note" />

          <v-btn
            x-small
            text
            plain
            v-if="note.can.update"
            class="mb-2 pa-0"
            :to="`/note/${note.id}/edit`"
          >
            <v-icon small class="mr-1">edit</v-icon>
            {{ $t("options.edit") }}
          </v-btn>
          <place-chip :place="note.place" />
        </div>
      </div>

      <div
        class="description yellow lighten-3 text-subtitle-2 mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap"
        :class="$vuetify.breakpoint.name !== 'xs' ? 'rounded-xl' : ''"
      >
        {{ note.description }}
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed
} from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import NoteModel from "@/ts/models/noteClass";
import CurrentTags from "@c/molecules/current/CurrentTags.vue";
import useFetcher from "@use/useFetcher";
import MediumImage from "@c/molecules/media/MediumImage.vue";
import CurrentCaldates from "@c/molecules/current/CurrentCaldates.vue";
import PlaceChip from "@c/atoms/place/PlaceChip.vue";
import CreatedBy from "@c/atoms/app/CreatedBy.vue";

export default defineComponent({
  name: "NoteOverview",

  components: {
    CurrentTags,
    MediumImage,
    CurrentCaldates,
    PlaceChip,
    CreatedBy
  },

  setup(props, { root }) {
    const { user } = useGetters({ user: "auth/user" } as any);

    const note_id = parseInt(root.$route.params.id);
    var { entity: note, loading } = useFetcher("note/GET_NOTE", note_id);

    return {
      note,
      loading,
      user
    };
  }
});
</script>

<style scoped></style>
