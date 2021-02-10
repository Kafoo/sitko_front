<template>
  
  <div
    style="line-height:15px"
    class="text-caption grey--text text--darken-1"
  >
    <span
      class="breakwrap"
      v-if="caldates.length"
      :key="caldates[0].id"
      ><!--
    -->{{ caldates[0].chip }}
    </span>

    <span 
    v-if="caldates.length > 1"
    :class="more?'text-decoration-underline c-pointer':''"
    @click="more?morePopup = true:undefined"
    ><!--
    -->{{$t('and')}}
      {{caldates.length - 1 }}
      {{$tc('other caldate', caldates.length - 1 > 1 ? 2 : 1)}}
    </span>

    <v-dialog v-model="morePopup" max-width="400px">    
      <caldates-popup 
      @close="morePopup = false"
      :caldates="caldates"
      :title="title"/>
    </v-dialog>


  </div>

</template>

<script lang="ts">

import { defineComponent, ref } from "@vue/composition-api"
import CaldatesPopup from "@c/organisms/caldate/CaldatesPopup.vue"

export default defineComponent({

  name : "CurrentCaldates",

  components:{
    CaldatesPopup
  },

  props:{

    caldates:{
      type:Array,
      default:[]
    },

    more:{
      type:Boolean,
      default:false
    },

    title:String
  },

  setup() {

    var morePopup = ref(false)

    return{
      morePopup
    }

  }
});
</script>

<style scoped>



</style>
