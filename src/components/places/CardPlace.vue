<template>
	
	<div class="d-flex flex-wrap justify-center">

		<v-card class="ma-3">
			<img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/40451975_2674910106066657_4956392723440467968_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=MHEZIJhsSZMAX9Zv10x&_nc_ht=scontent-cdg2-1.xx&oh=887b9247a49c14922e252de423115a48&oe=5FDFA376"
			width="250px"
			height="200px"
			/>
			<v-card-title>
				Les Vallées
			</v-card-title>
			<v-divider></v-divider>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn text color="primary" to='/place/1/overview'>Entrer</v-btn>
				<v-btn text color="error">Quitter</v-btn>
			</v-card-actions>
		</v-card>

		<v-card class="ma-3">
			<img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/57882535_679703955800992_5476340227343646720_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=2AG16oLMGmoAX_KTHo1&_nc_ht=scontent-cdg2-1.xx&oh=df66d7edcf93a696ee7e3ece26db8783&oe=5FDFD63C"
			width="250px"
			height="200px" />
			<v-card-title>
				Etinbulle
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

		}
	}
}

</script>