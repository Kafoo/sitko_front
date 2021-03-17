<template>

  <div class="d-flex justify-center">
    <loading-circle v-if="loading" small />

    <v-card v-else-if="note"
      min-width="400px"
      max-width="600px"
      class="ma-8"
    >

      <div
        class="mx-sm-4 mb-5 mt-2 d-flex flex-column flex-sm-row align-stretch"
      >
        <div
          class="mt-2 mb-5 d-flex flex-column align-center align-sm-start"
        >
          <h1>
            {{ note.title }}
          </h1>


          <span class="ml-1 text-caption grey--text text--darken-1">
            {{ $t("created_by.note.public", { user: note.author.name }) | capitalize }}
          </span>

          <v-btn
            x-small
            text
            plain
            v-if="user.id == note.author.id"
            class="mb-2 pa-0"
            :to="`/note/${note.id}/edit`"
          >
            <v-icon small class="mr-1">edit</v-icon>
            {{$t('options.edit')}}
          </v-btn>
          <place-chip :place="note.place" />
        </div>
      </div>

      <div
        class="description yellow lighten-3 font-italic mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap"
        :class="$vuetify.breakpoint.name !== 'xs' ? 'rounded-xl' : ''"
      >
        {{ note.description }} Lorem exercitation nulla amet enim laboris duis nulla Lorem velit officia. Anim ut duis enim pariatur ea. Enim sunt deserunt enim magna Lorem enim proident id et qui deserunt fugiat velit. Lorem nostrud aliquip ea veniam officia reprehenderit ipsum tempor cillum laborum.
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

export default defineComponent({
  name: "NoteOverview",

  components: {
    CurrentTags,
    MediumImage,
    CurrentCaldates,
    PlaceChip
  },

  setup(props, { root }) {
    const { user } = useGetters({ user: "auth/user" } as any);

    const note_id = parseInt(root.$route.params.id);
    var { entity:note, loading } = useFetcher("note/GET_NOTE", note_id);

    return {
      note,
      loading,
      user
    };
  }
});
</script>

<style scoped>

</style>
