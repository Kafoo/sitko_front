<template>
  <div>
    <v-card color="#fff5b8" class="ma-0" min-width="300px" min-height="100px">
      <close-dialog @action="$emit('close')" />
      <v-btn class="edit-btn" icon small :to="'/note/' + note.id + '/edit'">
        <v-icon small>edit</v-icon>
      </v-btn>
      <div class="px-10 pt-7 text-h4 font-weight-bold">
        {{ note.title }}
      </div>
      <div class="px-10 pt-4 pb-7 breakwrap">
        {{ note.description }}
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import NoteModel from "@/ts/models/noteClass";
import CloseDialog from "@c/atoms/app/CloseDialog.vue";

export default defineComponent({
  name: "NotePopup",

  props: {
    note: {
      type: Object as () => NoteModel
    }
  },

  components: {
    CloseDialog
  },

  setup() {
    return {};
  }
});
</script>

<style scoped>
.edit-btn {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
</style>
