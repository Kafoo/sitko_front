<template>


  <div class="place d-flex pb-12">

    <div class="hidden-sm-and-down">
      <sidebar :subNavItems="subNavItems"/>
    </div>

    <v-card class="ma-xs-0 ma-sm-5 pa-5 flex-grow-1 flex-shrink-10"
    :elevation="elevation"
    min-width="0">

      <router-view></router-view>

    </v-card>

    <div class="hidden-md-and-up">
      <bottombar :subNavItems="subNavItems"/>
    </div>
  </div>


</template>

<script>
  
import Sidebar from "@/components/app/Sidebar.vue";
import Bottombar from "@/components/app/Bottombar.vue";

export default{
  components:{
    Sidebar,
    Bottombar
  },
  data(){
    return{
      subNavItems:[
        { title: "Accueil",
          path: "/place/1/overview",
          icon: "home",
        },
        {
          title: "Calendrier",
          path: "/place/1/calendar",
          icon: "event",
        },
        {
          title: "Projets",
          path: "/place/1/projects",
          icon: "handyman",
        },
        {
          title: "Contact",
          path: "/place/1/contact",
          icon: "contact_support",
        },
      ]
    }
  },
  computed:{
    elevation () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 0
        case 'sm': return 3
        case 'md': return 3
        case 'lg': return 3
        case 'xl': return 3
      }
      return 3
    },
  }
}

</script>

<style>
  


</style>