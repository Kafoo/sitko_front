<template>
  
  <div>
    <div class="text-h5 font-weight-bold ml-sm-15 ml-2">{{title}}</div>

    <v-slide-group 
    class="slide-group mb-5" 
    :show-arrows="$vuetify.breakpoint.name == 'xs'?false:'always'"
    >

      <loading-circle v-if="loading" small />


      <div v-else-if="!items.length" class="no-item">
        {{empty}}
      </div>

      <v-slide-item
      v-else
      v-for="item in items"
      :key="item.id"
      >

        <project-card v-if="type == 'project'" class="ma-2" :project="item"/>

        <place-card v-else-if="type == 'place'" class="ma-2" :place="item"/>

        <event-card v-else-if="type == 'event'" class="ma-2" :place="item"/>

      </v-slide-item>
    </v-slide-group>
  </div>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"
import ProjectCard from "@c/molecules/project/ProjectCard.vue"
import PlaceCard from "@c/molecules/place/PlaceCard.vue"
import LoadingCircle from "@c/atoms/app/LoadingCircle.vue"

export default defineComponent({

  name : "NetSlide",

  components:{
    ProjectCard,
    PlaceCard,
    LoadingCircle
  },

  props:{
    items:{
      type:Array,
      default:[]
    },
    type:{
      type:String
    },
    title:{
      type:String
    },
    empty:{
      type:String
    },
    loading:{
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

.v-slide-group{
  min-height: 250px;
}

.no-item {
  height: 20px;
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(
    -50%,
    -50%
  );
}

</style>