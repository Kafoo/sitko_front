<template>

  <div>
<!-- 

      <v-btn
      :class="{ 'placeTitle--hidden': !showPlaceTitle }"
      class="placeTitle"

      v-if="$route.path !== placeNavItems[0].path"
      color="white"
      tile
      large
      :to="placeNavItems[0].path">
        <v-avatar
        v-if="place.image"
        size="30px" 
        class="mr-2 ">
          <img
          :src="place.image.thumb"
      >
        </v-avatar>
        {{place.name}}
      </v-btn> -->


      <v-btn

      v-if="$route.path !== placeNavItems[0].path"
      color="white"
      tile
      large
      :to="placeNavItems[0].path">
        <v-avatar
        v-if="place.image"
        size="30px" 
        class="mr-2 ">
          <img
          :src="place.image.thumb"
      >
        </v-avatar>
        {{place.name}}
      </v-btn>


    <v-bottom-navigation
      class="bottom-bar"
      height="50px"
      grow
      shift
      icon
      and
      text
      color="green"
    >
      <v-btn
        class="mx-n2"
        v-for="(item, index) in navItems"
        :key="index"
        :value="item.path"
        :to="item.path"
      >
        <v-icon tag="li">{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-bottom-navigation>
  </div>

</template>

<script lang="ts">

import {defineComponent, computed, ref, onMounted, onBeforeUnmount} from "@vue/composition-api"
import { useGetters } from 'vuex-composition-helpers';

interface NavItem {
  path:String
  icon:String
  title:String
}

export default defineComponent({
  name: "Bottombar",

  props: {
    placeNavItems:{
      type: Array as () => Array<NavItem>,
      default: []
    }
  },

  setup(props:any){

    var showPlaceTitle = ref(true)
    var lastScrollPosition = ref(0)
    var scrollValue = ref(0)

    const onScroll = () => {
    
      var delta = Math.abs(window.pageYOffset - lastScrollPosition.value)

      if (window.pageYOffset < 0) {
        return
      }
      if (delta < 40) {
        return
      }
      showPlaceTitle.value = window.pageYOffset < lastScrollPosition.value
      lastScrollPosition.value = window.pageYOffset
    }

    onMounted(() => {
      lastScrollPosition.value = window.pageYOffset
      window.addEventListener('scroll', onScroll)
      const viewportMeta = document.createElement('meta')
      viewportMeta.name = 'viewport'
      viewportMeta.content = 'width=device-width, initial-scale=1'
      document.head.appendChild(viewportMeta)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
    })

    const { place } = useGetters({place: 'place/place'} as any)
  
    var navItems = computed(() => {
    //We skip the first one
      var collection:Array<NavItem> = []

      if (props.placeNavItems) {
        props.placeNavItems.forEach((item:NavItem, index:number) => {
          if (index !== 0) {
            collection.push(item)
          }
        });
      }else{
        return []
      }
      return collection
    })

  return {
    place,
    navItems,
    showPlaceTitle
  }

  }

})
</script>

<style>
.bottom-bar {
  position: fixed;
  bottom: 0;
  z-index: 2;
}

.placeTitle{
  position: fixed;
  top: 0px;
  display: flex;
  right: 0;
  width: 100%;
  justify-content: center;
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
}

.placeTitle.placeTitle--hidden {
  transform: translate3d(0, -150%, 0);
}

</style>
