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

import { mapGetters, mapActions } from "vuex";
import Sidebar from "@/components/app/Sidebar.vue";
import Bottombar from "@/components/app/Bottombar.vue";

export default{
  name: 'Place',
  components:{
    Sidebar,
    Bottombar
  },
  data(){
    return{

      place_id: this.$route.params.id,

      subNavItems:[
        { title: "Accueil",
          path: "/place/" + this.$route.params.id + "/overview",
          icon: "home",
        },
        {
          title: "Calendrier",
          path: "/place/" + this.$route.params.id + "/calendar",
          icon: "event",
        },
        {
          title: "Projets",
          path: "/place/" + this.$route.params.id + "/projects",
          icon: "handyman",
        },
        {
          title: "Evenements",
          path: "/place/" + this.$route.params.id + "/events",
          icon: "star",
        },
        {
          title: "Contact",
          path: "/place/" + this.$route.params.id + "/contact",
          icon: "contact_support",
        },
      ]
    }
  },

  computed:{
    ...mapGetters("place", ["place"]),
    elevation () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 0
        case 'sm': return 3
        case 'md': return 3
        case 'lg': return 3
        case 'xl': return 3
      }
      return 3
    }
  },

  created(){

    this.getPlace(this.place_id)

  },

  methods:{
    ...mapActions("place", ["getPlace"])
  }
}

</script>

<style scoped>
  


</style>