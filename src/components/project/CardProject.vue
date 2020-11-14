<template>

	<v-hover v-slot="{ hover }">
	  <v-card
	    class="project ma-1"
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          
	  >

		  <div  class="d-flex project-main" @click="show = !show">


				<v-card-title
				  class="d-inline-block py-3 text-truncate"
				>
				  {{ project.title }}
					<span class="type">
					  {{ project.type }}
					</span>
				</v-card-title>

				<v-icon v-if="project.events.length">event</v-icon>


				<v-spacer ></v-spacer>

				<v-card-actions>
				  <v-btn icon @click.stop="$emit('openEdit', index)">
				    <v-icon>create</v-icon>
				  </v-btn>
				  <v-btn icon @click.stop="$emit('deleteProject', project.id)">
				    <v-icon>delete</v-icon>
				  </v-btn>
		      <v-btn
		        icon
		      >
		        <v-icon>{{ show ? 'expand_less' : 'expand_more' }}</v-icon>
		      </v-btn>
		    </v-card-actions>

		  </div>



		  <v-expand-transition>
		    <div v-show="show">
		      <v-divider class="my-0"></v-divider>
		      <v-card-text>
		      	<v-chip-group>
			        <v-chip v-for="event in project.events" :key="event.id">
			          {{event.chip}}
			        </v-chip>
		      	</v-chip-group>
					  <v-clamp autoresize :max-lines="3">
					    {{ project.description }}
					  </v-clamp>
		      </v-card-text>
		    </div>
		  </v-expand-transition>

	  </v-card>
	</v-hover>


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
	},
	data(){
		return{
			show:false
		}
	}
}

</script>

<style>

	.type{
		font-style: italic;
		font-size: 0.8em;
		color: grey;
	}

	.project-main{
		cursor: pointer;
	}

</style>