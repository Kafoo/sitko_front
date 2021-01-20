<template>

  <v-chip 
  class="tag-chip mr-1 white--text" 
  small 
  :color="tag.color">
    {{tag.title}}
  </v-chip>

</template>

<script lang="ts">

import TagModel from "@/ts/models/tagClass";
import { defineComponent } from "@vue/composition-api"

export default defineComponent({

  name : "TagChip",

  props:{
    tag:{
      type: Object as () => TagModel,
      default:undefined
    }
  },

  setup() {


    return{
 
    }

  }
});
</script>

<style scoped>

.tag-chip{
    font-size: 0.7em !important;
    height: 17px !important;
    padding: 7px;
}
.tag-chip.theme--light.v-chip:hover::before {
    opacity: 0;
}

.noselect{
    cursor: unset;
}

</style>