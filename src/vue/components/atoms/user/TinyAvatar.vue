<template>
  
    <v-avatar
    :size="35">
      <img
        :src="image"
      >
    </v-avatar>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"

export default defineComponent({

  name : "",

  props : {
    image:{
      type:String
    }
  },

  setup() {


    return{
 
    }

  }
});
</script>

<style scoped>



</style>
