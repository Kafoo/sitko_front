<template>
  <div>
    <div class="d-flex flex-wrap align-center justify-center">
      <v-chip
        v-if="!compCaldates || (compCaldates && !compCaldates.length)"
        class="py-5"
        @click="pickingDate = true"
      >
        {{ $t("actions.add_f", { item: $t("caldate") }) | capitalize }}
      </v-chip>

      <caldate-chip
        v-for="caldate in compCaldates"
        :key="caldate.id"
        :caldate="caldate"
        @remove="removeCaldate"
      />

      <v-tooltip v-if="compCaldates && compCaldates.length" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            height="45"
            width="45"
            v-on="on"
            color="green"
            @click="pickingDate = true"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </template>
        <span>
          {{ $t("actions.add_f", { item: $t("caldate") }) | capitalize }}
        </span>
      </v-tooltip>
    </div>

    <v-dialog v-model="pickingDate" width="90%" max-width="800px">
      <choose-caldate
      @addCaldate="addCaldate" 
      @close="pickingDate = false" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "@vue/composition-api";
import CaldateModel from "@/ts/models/caldateClass";
import ChooseCaldate from "@c/organisms/caldate/ChooseCaldate.vue";
import CaldateChip from "@c/atoms/caldate/CaldateChip.vue";

export default defineComponent({
  name: "CaldateInput",

  components: {
    ChooseCaldate,
    CaldateChip
  },

  props: {
    caldates:{
      type:Array as () => Array<CaldateModel>,
      default: () => []
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

    const removeCaldate = (caldate: CaldateModel) => {
      const index = compCaldates.value.indexOf(caldate)
      compCaldates.value.splice(index, 1);
      emit("update", compCaldates.value);
    };

    const addCaldate = (caldate: CaldateModel) => {
      var exists = compCaldates.value.find(x => 
        x.timed === caldate.timed &&
        x.start === caldate.start &&
        x.end === caldate.end
      )

      if (!exists){      
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
