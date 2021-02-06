<template>
  
    <v-menu 
    v-if="$route.name != 'PlaceOverview'" 
    class="acccount-drawer rounded-lg" 
    transition="scroll-y-reverse-transition"
    top 
    left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
        v-bind="attrs" 
        v-on="on" 
        elevation="6" 
        fab 
        x-large 
        class="float-button hidden-md-and-up">
          <v-avatar :size="70">
            <img :src="place.image.thumb" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pt-0 hidden-md-and-up rounded-lg">
        <div 
        class="d-flex justify-center align-center grey lighten-2 c-pointer pa-4"
        @click="$router.push('/place/'+place.id)">
          <v-img width="50px" class="rounded" :src="place.image.thumb">
          </v-img>
          <v-card-title class="px-2 py-1">
            {{place.name}}
          </v-card-title>
        </div>
        <v-list-item
          v-for="item in placeNavItems"
          :key="item.title"
          :to="item.path"
        >
          <v-icon>{{item.icon}}</v-icon>
          <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

</template>

<script lang="ts">

import { defineComponent, ref } from "@vue/composition-api"
import PlaceModel from "@/ts/models/placeClass"

export default defineComponent({

  name : "",

  props:{
    place:{
      type:PlaceModel,
      default:{}
    }
  },

  setup(props, { root }) {

    const placeNavItems = ref([
        {
          title: root.$options.filters!.capitalize(root.$t("calendar")),
          path: "/place/" + root.$route.params.id + "/calendar",
          icon: "event"
        },
        {
          title: root.$options.filters!.capitalize(root.$t("projects")),
          path: "/place/" + root.$route.params.id + "/projects",
          icon: "handyman"
        },
        {
          title: root.$options.filters!.capitalize(root.$t("events")),
          path: "/place/" + root.$route.params.id + "/events",
          icon: "star"
        },
        {
          title: root.$options.filters!.capitalize(root.$t("contact")),
          path: "/place/" + root.$route.params.id + "/contact",
          icon: "contact_support"
        }
      ])

    return{
      placeNavItems
    }

  }
});
</script>

<style scoped>

.float-button{
  position: fixed;
  bottom: 30px;
  right: 30px;
}

</style>