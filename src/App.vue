<template>
  <v-app class="app">

    <v-snackbar 
    v-model="generalError"
    color="red">
      {{ generalError }}
    </v-snackbar>

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
  computed: {
    ...mapGetters("auth", ["loading"]),
    ...mapGetters({
            nameFromStore: 'generalError'
        }),
    generalError: {
       get(){
         return this.nameFromStore
       },
       set(newName){
         return newName
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

<style>

.alert {
  position: fixed;
  margin: auto;
  top: 83px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  max-width: 90%;
  text-align: center;
  opacity: 0;
  z-index: 1000;
}

.alert.visible {
  opacity: 1;
  transition: all 0.5s;
}

</style>
