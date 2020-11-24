<template>

  <v-bottom-navigation 
  class="bottom-bar" height="50px"
  grow
  shift
  icon and text
  color="green">

    <v-btn
    class="mx-n2"
    v-for="(item, index) in subNavItems"
    :key="index"
    :value="item.path"
    :to='item.path'
    >

      <v-icon tag='li'>{{item.icon}}</v-icon>
      <span>{{item.title}}</span>
    </v-btn>

  </v-bottom-navigation>


</template>

<script>
	
export default {

	data(){
		return{
      value: ''
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
    z-index: 2;
  }

</style>