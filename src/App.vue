<template>
  <v-app class="app">

    <div 
    class="alert"
    v-if="generalError">
    {{generalError}}
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
import { mapGetters, mapActions } from "vuex";
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

.alert {
  position: fixed;
  margin: auto;
  bottom: 53px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  max-width: 90%;
  text-align: center;
  z-index: 1000;
  animation: fade-in 0.2s ease;
  background-color: #ff0000a3;
  animation: fade-in 0.2s ease;
  color: white;
  padding: 5px;
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
