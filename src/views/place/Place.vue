<template>



  <div class="place d-flex pb-12">
    <div class="hidden-sm-and-down">
      <sidebar :subNavItems="subNavItems"/>
    </div>

    <v-card class="calendar ma-xs-0 ma-sm-5 elevation-4 pa-5 flex-grow-1 flex-shrink-10"
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
        { title: "Présentation",
          path: "/place/1/overview",
          icon: "info",
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
  }
}

</script>

<style>
  


</style>