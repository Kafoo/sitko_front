<template>
  <div>
    <v-hover v-if="note" v-slot="{ hover }">
      <v-card
        v-if="note"
        :id="note.id"
        :elevation="hover ? 4 : 2"
        class="note-card c-pointer px-3 my-2 d-flex justify-center align-center"
        width="180"
        height="60px"
        color="#fff5b8"
        @click="$router.push(note.path)"
      >
        <v-clamp autoresize :max-lines="2" class="text-center font-weight-bold">
          {{ note.title }}
        </v-clamp>
      </v-card>
    </v-hover>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import NoteModel from "@/ts/models/noteClass";
import NotePopup from "@c/molecules/note/NotePopup.vue";
export default defineComponent({
  name: "NoteCard",

  components: {
    NotePopup
  },

  props: {
    note: Object as () => NoteModel,
    withPlace: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    var show = ref(false);

    return {
      show
    };
  }
});
</script>

<style scoped></style>
