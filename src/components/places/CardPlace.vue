<template>

  <v-hover>

		<v-card 
		class="ma-3"
		width="200px"
    slot-scope="{ hover }">

			<!-- BODY -->
			<div class="card-body">

				<img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/40451975_2674910106066657_4956392723440467968_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=MHEZIJhsSZMAX9Zv10x&_nc_ht=scontent-cdg2-1.xx&oh=887b9247a49c14922e252de423115a48&oe=5FDFA376"
				class='image'
				width="200px"
				height="150px"
				/>

				<v-card-title class="pt-0 pb-3">
					<span class="text-truncate">{{place.name}}</span> 
				</v-card-title>
			</div>


			<!-- EXPAND -->
	    <v-expand-transition>
	      <v-card
	        v-if="hover"
	        class="transition-fast-in-fast-out v-card--reveal"
	        style="height: 100%;"
	      >
	        <v-card-text class="pt-3 pb-0">

	          <v-card-title class="pa-0 body-2">
							  <v-clamp autoresize :max-lines="2"
							  class="description">
			          	{{place.name}}
							  </v-clamp>
	          </v-card-title>

	          <v-chip-group column>
	          	<v-chip small class="c-default"><b>12 terriens</b></v-chip>
	          	<v-chip small class="c-default">6 projets en cours</v-chip>
	          	<v-chip small class="c-default" color="blue lighten-2">4 tags</v-chip>
	          </v-chip-group>

	        </v-card-text>
					<!-- ACTIONS -->

					<v-card-actions style="position: absolute;bottom: 0;left: 0" >
						<v-btn 
						small 
						text 
						color="primary" 
						:to="'/place/'+place.id+'/overview'">Entrer</v-btn>
						<v-btn 
						small 
						text 
						color="error">Quitter</v-btn>
						<v-btn
						small 
						icon>
							<v-icon>info</v-icon>
						</v-btn>
					</v-card-actions>
	      </v-card>
	    </v-expand-transition>

		</v-card>

	</v-hover>

</template>

<script>
	
import VClamp from "vue-clamp";

export default {
	components:{
		VClamp
	},
	data(){
		return{

		}
	},
	props:{
		place: Object
	}
}

</script>

<style scoped>
	
.more_info{
	position: absolute;
	top: 5px;
	right: 5px;
}

.image{
	border-radius: 5px 5px 0 0;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

</style>