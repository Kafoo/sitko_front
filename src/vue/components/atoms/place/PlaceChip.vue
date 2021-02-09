<template>
  
  <v-btn
    :to="'/place/' + place.id"
    height="40px"
    rounded
    text
    color="grey darken-2"
    small
    class="pl-0 pr-3"
  >
    <tiny-avatar 
    class="d-inline mr-2" 
    :image="place.image.thumb" 
    /> 
    <span>{{place.name}}</span>
    
  </v-btn>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"
import PlaceModel from "@/ts/models/placeClass"
import TinyAvatar from "@c/atoms/user/TinyAvatar.vue"

export default defineComponent({

  name : "PlaceChip",

  components:{
    TinyAvatar
  },

  props:{
    place:{
      type:Object as () => PlaceModel
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
