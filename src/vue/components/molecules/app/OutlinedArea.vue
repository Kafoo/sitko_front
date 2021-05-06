<template>
  
  <v-card
    outlined
    class="items-container text-center px-3 pt-3 pb-2 rounded-xl"
  >
    <div class="text-caption labelized noselect d-flex">
      {{label}}
    </div>
    <slot></slot>
  </v-card>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"

export default defineComponent({

  name : "OutlinedArea",

  props:{
    label:{
      type:String,
      default:""
    }
  },

  setup() {


    return{
 
    }

  }
});
</script>

<style scoped>


.labelized {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  white-space: nowrap;
  top: -10px;
  padding: 0 7px;
  background-color: white;
}

.items-container {
  border-color: #959595 !important;
}

</style>
