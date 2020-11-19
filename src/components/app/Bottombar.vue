<template>


  <v-bottom-navigation 
  class="bottom-bar"
  grow>

    <v-btn 
    v-for="(item, index) in subNavItems"
    :key="index"
    :to="item.path">
      <span>{{item.title}}</span>

      <v-icon>{{item.icon}}</v-icon>
    </v-btn>

  </v-bottom-navigation>


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

<style>
  
  .bottom-bar{
    position: fixed;
    bottom: 0;
    z-index: 100;
  }

</style>