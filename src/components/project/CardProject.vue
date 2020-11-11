<template>

  <v-card
    class="project d-flex flex-column ma-1 elevation-3"
    width="200"
    height="180"
  >
		<v-card-title
		  class="d-inline-block py-3 text-truncate"
		  style="max-width: 200px;"
		>
		  {{ project.title }}
		</v-card-title>
		<v-card-subtitle class="pb-2">
		  ({{ project.type }})
		</v-card-subtitle>
		<v-card-text class="description pb-0 black--text">
		  <v-clamp autoresize :max-lines="3">
		    {{ project.description }}
		  </v-clamp>
		</v-card-text>
		<v-spacer></v-spacer>
		<v-card-actions>
		  <v-btn small @click="$emit('openEdit', index)">
		    modifier
		  </v-btn>
		  <v-btn small @click="$emit('deleteProject', project.id)">
		    supprimer
		  </v-btn>
		</v-card-actions>
  </v-card>

</template>

<script>
	
import VClamp from "vue-clamp";

export default {

	name:'CardProject',
	components: {
		VClamp
	},
	props:{
		project: Object,
		index: Number
	}

}

</script>