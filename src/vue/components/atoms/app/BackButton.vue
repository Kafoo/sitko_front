<template>
  
  <v-btn 
  plain 
  color="grey" 
  :to='path' 
  small
  class="pl-0"
  > 
    <v-icon>arrow_left</v-icon>
    <span class="text-truncate" style="max-width: 150px;">
      {{$t(text)}}
    </span>
  </v-btn>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"

export default defineComponent({

  name : "BackButton",

  props:{
    text:{
      type:String,
      default: "back"
    },
    path:String
  },

  setup() {


    return{
 
    }

  }
});
</script>

<style scoped>



</style>
