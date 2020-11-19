<template>


  <v-card class="d-flex flex-column align-center ma-xs-0 ma-sm-5 elevation-3 flex-shrink-0"
  width="350px"
  height="600px">

  	<v-card-title>Les Vallées</v-card-title>

    <v-btn
    v-for="(item, index) in subNavItems"
    :key="index"
    :to="item.path"
    width="90%"
    class="my-2">
    	
    	{{item.title}}

    </v-btn>

  </v-card>


</template>

<script>
	
export default {

	data(){
		return{
		}
	},
  props:{
    subNavItems: Array
  }

}


</script>