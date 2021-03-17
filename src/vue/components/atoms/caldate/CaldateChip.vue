<template>
  <v-chip
    
    color="#f3f3f3"
    :small="small"
    @click="click"
    :close="closable"
    @click:close="$emit('close')"
    class="chip c-pointer chip my-1 mx-2 flex-grow-0 font-weight-bold"
  >
    <v-icon small class="mr-1">{{ caldate.icon }}</v-icon>
    <span class="chip-text">
      {{ caldate.chip }}
    </span>
  </v-chip>

</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CaldateModel from "@/ts/models/caldateClass";

export default defineComponent({
  name: "CaldateChip",

  props: {
    caldate: {
      type: Object
    },
    small: {
      type: Boolean,
      default: false
    },
     clickable: {
      type:Boolean,
      default: false
     },
     closable: {
      type:Boolean,
      default: false
     }
  },

  setup(props, {root}) {

    const click = () => {
      if (props.clickable && props.caldate) {
        root.$router.push('/place/'+props.caldate.place_id+'/calendar#'+props.caldate.start.split(' ')[0])
      }
    }

    return {
      click
    };
  }
});
</script>

<style scoped>

.chip{
  line-height: 15px;
  width: max-content;
}

</style>
