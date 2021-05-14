<template>
  
  <div
    class="description grey lighten-3 text-subtitle-2 mx-0 mb-5 mx-sm-5 pa-5 breakwrap"
    :class="$vuetify.breakpoint.name !== 'xs' ? 'rounded-xl' : ''"
  >
    <span v-if="!readMoreActivated">
      {{ description.slice(0, 500) }}
      <span v-if="description.length > 500">
      ...
        <v-btn
        plain
        text 
        small 
        class="pl-1" 
        @click="readMoreActivated = true"
        >
          {{$t('see more')}}
        </v-btn>
      </span>
    </span>
    <span v-else>
      {{ description }}<br>
      <v-btn 
      v-if="description.length > 500"
      plain
      text 
      small 
      class="pl-1" 
      @click="readMoreActivated = false"
      >
        {{$t('see less')}}
      </v-btn>
    </span>
  </div>

</template>

<script lang="ts">

import { defineComponent, watch, ref } from "@vue/composition-api"

export default defineComponent({

  name : "Description",

  props:{
    description:{
      type:String,
      default:""
    }
  },

  setup(props) {

    var readMoreActivated = ref(false)

    watch(() => props.description, (newValue:any) => {
      if (props.description && props.description.length > 500 ) {
        readMoreActivated.value = false
      }else{
        readMoreActivated.value = true
      }
    });

    return{
      readMoreActivated
    }

  }
});
</script>

<style scoped>



</style>
