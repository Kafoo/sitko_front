<template>

  <div class="d-flex justify-center">
	  <v-card 
    :tile="tile" 
    class="account d-flex flex-column flex-grow-1 align-center ma-xs-0 ma-sm-5 elevation-4 pa-5"
    max-width="800px">

	    <h1>Explore</h1>

      <img src="https://res.cloudinary.com/dyigive9u/image/upload/v1606053248/kisspng-question-mark-clip-art-transparent-background-question-mark-5b560ebef0c515.6542983615323665269862_xpztfa.png" class="mt-8" width="60%">

	  </v-card>
	</div>
</template>

<script>
  

export default{
  components:{

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