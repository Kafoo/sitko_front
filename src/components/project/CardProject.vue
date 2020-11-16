<template>

	<v-hover v-slot="{ hover }">
	  <v-card
	    class="project ma-1"
      :elevation="hover ? 4 : 2"
      :class="{ 'on-hover': hover }">

	  	<!-- HEAD -->
		  <div  class="d-flex project-main" @click="show = !show">

				<v-card-title
				  class="d-inline-block py-3 text-truncate"
				>
					<v-chip 
					class="type hidden-xs-only white--text rounded-lg"
					:class="project.color">
					  {{ project.type }}
					</v-chip>
				  {{ project.title }}
				</v-card-title>

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

		  <!-- EXPAND -->
		  <v-expand-transition>
		    <div v-show="show">
		      <v-divider class="my-0"></v-divider>
		      <v-card-text class="pt-2">
			      <div class="d-flex">
			      	
							<v-chip 
							class="type hidden-sm-and-up white--text rounded-lg my-1 mr-2" 
							:class="project.color">
							  {{ project.type }}
							</v-chip>
			      	<v-chip-group column>
						    <v-tooltip v-for="event in project.events" :key="event.id" bottom>
						      <template v-slot:activator="{ on }">
						        <v-chip class="event-chip pa-2 mt-0" v-on="on">
						          <v-icon v-if="event.singleDate">today</v-icon>
						          <v-icon v-else>date_range</v-icon>
						        </v-chip>
						      </template>
						      <span>{{event.chip}}</span>
						    </v-tooltip>
			      	</v-chip-group>
			      </div>
					  <v-clamp autoresize :max-lines="10">
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
			show:false,
			color:'red'
		}
	}
}

</script>

<style>

	.type{
		font-style: italic;
		font-size: 0.8em;
	}

	.project-main{
		cursor: pointer;
	}

	.event-chip{
		cursor: default;
	}

</style>