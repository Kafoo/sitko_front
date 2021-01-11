<template>
  <v-progress-circular
    indeterminate
    color="green lighten-2"
    class="loading"
    :size="small?50:100"
    :width="small?6:10"
  ></v-progress-circular>
</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"

export default defineComponent({

  name : "LoadingCircle",

  props:{
    small:{
      type:Boolean,
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

.loading {
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, -50%); /* This is a shorthand of
                                         translateX(-50%) and translateY(-50%) */
}

</style>