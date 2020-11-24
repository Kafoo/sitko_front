<template>
	
	<div class="d-flex flex-wrap justify-center">

		<v-card class="ma-3">
			<div class="card-body">
				<img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/40451975_2674910106066657_4956392723440467968_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=MHEZIJhsSZMAX9Zv10x&_nc_ht=scontent-cdg2-1.xx&oh=887b9247a49c14922e252de423115a48&oe=5FDFA376"
				class='image'
				width="200px"
				height="150px"
				/>
				<v-card-title class="pt-0 pb-3">
					Les Vallées <v-btn icon @click="reveal=true"><v-icon>info</v-icon></v-btn>
				</v-card-title>

		    <v-expand-transition>
		      <v-card
		        v-if="reveal"
		        class="transition-fast-in-fast-out v-card--reveal"
		        style="height: 100%;"
		      >
		        <v-card-text class="pt-3">
		          <v-card-title class="pa-0 pb-2">
		          	Les Vallées
			          <v-btn
			          	class="closing_cross"
			            icon
			            small
			            @click="reveal = false">
			            <v-icon>close</v-icon>
			          </v-btn>
		          </v-card-title>
		          <v-chip-group column>
		          	<v-chip small><b>12 terriens</b></v-chip>
		          	<v-chip small>6 projets en cours</v-chip>
		          	<v-chip small color="blue lighten-2">boulange</v-chip>
		          	<v-chip small color="green lighten-2">plumes</v-chip>
		          	<v-chip small color="blue lighten-2">menuiserie</v-chip>

		          </v-chip-group>
		        </v-card-text>


		      </v-card>
		    </v-expand-transition>


			</div>
			<v-divider></v-divider>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn text color="primary" to='/place/1/overview'>Entrer</v-btn>
				<v-btn text color="error">Quitter</v-btn>
			</v-card-actions>
		</v-card>

		<v-card class="ma-3">
			<img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/57882535_679703955800992_5476340227343646720_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=2AG16oLMGmoAX_KTHo1&_nc_ht=scontent-cdg2-1.xx&oh=df66d7edcf93a696ee7e3ece26db8783&oe=5FDFD63C"
			class='image'
			width="200px"
			height="150px" />
			<v-card-title class="pt-0 pb-3">
				Etinbulle <v-btn icon><v-icon>info</v-icon></v-btn>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn text color="primary">Entrer</v-btn>
				<v-btn text color="error">Quitter</v-btn>
			</v-card-actions>
		</v-card>
	</div>

</template>

<script>
	
export default {
	data(){
		return{
			reveal:false
		}
	}
}

</script>

<style scoped>
	
.closing_cross{
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