<template>
  <v-app class="app">

    <div 
    class="alert-container"
    v-if="generalError">
      <div 
      class="alert">
      <v-icon color='white' class="mr-2">warning</v-icon>
      {{generalError}}
      <v-btn icon @click='removeGeneralError'>
        <v-icon color='grey'>close</v-icon>
      </v-btn>
      </div>
    </div>

    <navigation/>

    <v-main>
      <div v-if="loading" class="mt-5 d-flex justify-center">
        <v-progress-circular
          indeterminate
          color="green lighten-2"
          class="mt-16"
          size="100"
          width="10"
        ></v-progress-circular>
      </div>
      <router-view v-else></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Navigation from '@/components/app/Navigation.vue'

export default {
  components:{
    Navigation
  },
  data(){
    return{
      showGeneralError: false
    }
  },
  computed: {
    ...mapGetters("auth", ["loading"]),
    ...mapGetters(['generalError'])
  },
  watch: {
    generalError(newValue){
      if (this.generalError !== '') {
        this.showGeneralError = true
      }else{
        this.showGeneralError = false
      }
    }
  },
  methods: {
    ...mapMutations(['removeGeneralError']),
    ...mapActions("auth", ["getUserData"])
  },
  mounted() {
    if (localStorage.getItem("authToken")) {
      this.getUserData();
    }
  }
};
</script>

<style scoped>

.alert-container{
    animation: fade-in 0.2s ease;
    display: flex;
    position: fixed;
    bottom: 60px;
    width: 90%;
    margin: 0% 5%;
    z-index: 100;
}

.alert {
    margin: auto;
    text-align: center;
    background-color: #9d1818;
    color: white;
    padding: 10px;
    border-radius: 4px;
}

@keyframes fade-in {
    0% {
        opacity: 0;

    }
    100% {
        opacity: 1;

    }
}

</style>
