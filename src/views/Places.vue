<template>

  <div class="d-flex justify-center">
    <v-card :tile="tile" class="account d-flex flex-column flex-grow-1 align-center ma-xs-0 ma-sm-5 elevation-4 pa-5"
    max-width="800px">

      <h1 class="mb-8">Mes lieux</h1>

      <card-place/>

    </v-card>
  </div>

</template>

<script>
import CardPlace from "@/components/places/CardPlace"

export default{
  components:{
    CardPlace
  },
  data(){
    return{

    }
  },
  computed: {
    tile () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
      }
      return false
    },
  }
}

</script>