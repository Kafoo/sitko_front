<template>
  <div style="position:relative">

    <current-outlined
      :label="label"
      :items="caldates"
      :editable="editable"
      :empty="$t('no date yet') | capitalize"
      @edit="$emit('edit')"
    >
      <div class="d-flex flex-column justify-center align-center">
        <caldate-chip
          v-for="(caldate, index) in caldates"
          :key="caldate.id"
          :clickable="clickable"
          :closable="closable"
          :caldate="caldate"
          @close="$emit('removeCaldate', index)"
        />
      </div>

    </current-outlined>

  </div>
</template>

<script lang="ts">
import CaldateModel from "@/ts/models/caldateClass";
import { defineComponent } from "@vue/composition-api";
import CaldateChip from "../../atoms/caldate/CaldateChip.vue";
import CurrentOutlined from "@c/molecules/current/CurrentOutlined.vue"

export default defineComponent({
  components: {
    CaldateChip,
    CurrentOutlined
  },

  props: {
    caldates: {
      type: Array as () => Array<CaldateModel>,
      default: () => []
    },
    label: {
      type: String,
      default: "Caldates"
    },
    editable: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },

  name: "",

  setup() {
    return {};
  }
});
</script>

<style scoped>

</style>
