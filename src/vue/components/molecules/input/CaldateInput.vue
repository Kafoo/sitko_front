<template>
  <div style="position:relative">
    <current-caldates
      :caldates="caldates"
      :label="label"
      editable
      closable
      @removeCaldate="removeCaldate"
      @edit="pickingDate = true"
    />

    <v-dialog v-model="pickingDate" width="unset">
      <choose-caldate
        class="pa-5"
        @addCaldate="addCaldate"
        @close="pickingDate = false"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "@vue/composition-api";
import CaldateModel from "@/ts/models/caldateClass";
import ChooseCaldate from "@c/organisms/caldate/ChooseCaldate.vue";
import CaldateChip from "@c/atoms/caldate/CaldateChip.vue";
import CurrentCaldates from "@c/molecules/current/CurrentCaldates.vue";
import i18n from '@/ts/plugins/i18n';
import { capitalize } from '@/ts/functions/vueFilters';

export default defineComponent({
  name: "CaldateInput",

  components: {
    ChooseCaldate,
    CaldateChip,
    CurrentCaldates
  },

  props: {
    caldates: {
      type: Array as () => Array<CaldateModel>,
      default: () => []
    },

    label: {
      type: String,
      default: capitalize(i18n.t("caldates"))
    }
  },

  setup(props, { emit }) {
    var pickingDate = ref(false);

    var compCaldates = ref<Array<CaldateModel>>([]);

    onMounted(() => {
      compCaldates.value = JSON.parse(JSON.stringify(props.caldates));
    });

    watch(
      () => props.caldates,
      newValue => {
        compCaldates.value = newValue;
      }
    );

    const removeCaldate = (index: number) => {
      compCaldates.value.splice(index, 1);
      emit("update", compCaldates.value);
    };

    const addCaldate = (caldate: CaldateModel) => {
      var exists = compCaldates.value.find(
        x =>
          x.timed === caldate.timed &&
          x.start === caldate.start &&
          x.end === caldate.end
      );

      if (!exists) {
        compCaldates.value.push(caldate);
        emit("update", compCaldates.value);
      }
    };

    return {
      removeCaldate,
      addCaldate,
      compCaldates,
      pickingDate
    };
  }
});
</script>

<style scoped></style>
