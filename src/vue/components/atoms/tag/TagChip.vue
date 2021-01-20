<template>
  
    <v-chip 
    class=" pa-2 ma-1 mt-0 white--text"
    :class="noselect?'noselect':''"
    :close="close"
    @click:close="$emit('close')"
    @click="$emit('click')"
    :color="tag.color"
    >
      <v-icon
      v-if="tag.category" 
      small 
      class="mr-1">
        {{tag.category.icon}}
      </v-icon>
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
    },
    close:{
      type: Boolean,
      default: false
    },
    noselect:{
      type: Boolean,
      default: false
    }
  },

  setup() {


    return{
 
    }

  }
});
</script>

<style scoped>

.noselect.theme--light.v-chip:hover::before {
    opacity: 0;
    cursor: unset;
}

.noselect{
    cursor: unset;
}

</style>
