<template>

	<v-hover v-slot="{ hover }">
	  <v-card
	  	:id="project.id"
	    class="project ma-1"
      :elevation="hover ? 4 : 2"
      :class="{ 'on-hover': hover }">

	  	<!-- HEAD -->
		  <div  class="d-flex project-main" @click="$emit('toogleExpand')">

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

				  <v-btn icon @click.stop="deleting=true">
				    <v-icon>delete</v-icon>
				  </v-btn>
 		      <v-btn
		        icon
		      >
		        <v-icon>{{ expanded ? 'expand_less' : 'expand_more' }}</v-icon>
		      </v-btn>
		    </v-card-actions>

		  </div>

		  <!-- EXPAND -->
		  <v-expand-transition>
		    <div v-show="expanded" class="expand">
		      <v-divider class="my-0"></v-divider>
		      <v-card-text class="pt-2">

			      <div class="d-flex flex-column align-start flex-sm-row flex-sm-align-start">

							<v-img
							v-if="project.image"
							class="image mr-3 mb-3"
							:lazy-src="project.image.thumb"
						  :src="project.image.medium"
							></v-img>

							<div>
								
					      <div class="d-flex flex-wrap">
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

							  <v-clamp autoresize :max-lines="10"
							  class="description">
							  </v-clamp>
							    {{ project.description }}

							</div>


			      </div>


		      </v-card-text>
		    </div>
		  </v-expand-transition>

		  <!-- CONFIRM DELETION -->
			<v-dialog v-model="deleting" width="500">
        <v-card class="pt-7 pb-3">
          <v-card-text class="text-h6">
            Ce projet sera définitivement supprimé
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="deleting = false"
            >
              Annuler
            </v-btn>
            <v-btn color="red" text @click="$emit('deleteProject', project.id)">
              Supprimer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


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
		index: Number,
		expanded: Boolean
	},
	data(){
		return{
			deleting:false,
			color:'red'
		}
	}
}

</script>

<style>

	.image{
		width: 40%;
		max-width: 40%; 
	}

	@media(max-width: 600px){
		.image{
			width: 100%;
			max-width: 100%; 
		}

	}

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