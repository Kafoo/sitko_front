<template>
  <div>
    <v-btn fab icon small @click="dialog = true">
      <v-icon>help</v-icon>
    </v-btn>

    <v-dialog content-class="rounded-xl" v-model="dialog" width="unset">
      <v-card min-height="100px" class="rounded-xl pa-10 pt-10" color="#d1e2d0">
        <close-dialog @action="dialog = false" />
        <span v-html="text"></span>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import CloseDialog from "@c/atoms/app/CloseDialog.vue";

export default defineComponent({
  name: "Help",

  props: {
    text: String
  },

  components: {
    CloseDialog
  },

  setup() {
    var dialog = ref(false);

    return {
      dialog
    };
  }
});
</script>

<style scoped></style>
