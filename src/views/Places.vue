<template>

  <div class="d-flex justify-center">
    <v-card class="account d-flex flex-column align-center ma-5 elevation-4 pa-5"
    width="80%"
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
  }
}

</script>