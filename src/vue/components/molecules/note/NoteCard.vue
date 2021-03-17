<template>

  <div>
    <v-hover v-if="note" v-slot="{ hover }">
      <v-card
        v-if="note"
        :id="note.id"
        :elevation="hover ? 4 : 2"
        class="note-card c-pointer my-2 d-flex justify-center align-center"
        width="200"
        height="50px"
        color="#fff5b8"
        @click="$router.push(note.path)"
      >

        <span class="text-truncate font-weight-bold" style="max-width: 150px;">
          {{ note.title }}
        </span>

      </v-card>
    </v-hover>


  </div>

</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import NoteModel from "@/ts/models/noteClass";
import NotePopup from "@c/molecules/note/NotePopup.vue"
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

    var show = ref(false)

    return {
      show
    };
  }
});
</script>

<style scoped>

</style>
