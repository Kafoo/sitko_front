<template>
  <v-app class="app">
    <!-- Error message -->
    <div class="alert-container" v-if="app_alert">
      <div class="alert elevation-10" :class="app_alert.type">
        <v-icon v-if="app_alert.type == 'error'" color="white" class="mr-2"
          >warning</v-icon
        >
        {{ app_alert.msg }}
        <v-btn icon @click="removeAlert">
          <v-icon color="white">close</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Navigation -->
    <navigation />

    <!-- Content -->
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
import Navigation from "@/components/app/Navigation.vue";


export default {

  components: {
    Navigation,
  },

  data() {
    return {
      showAlert: false
    };
  },

  computed: {
    ...mapGetters("auth", ["loading"]),
    ...mapGetters(["app_alert"])
  },

  watch: {
    app_alert(newValue) {
      if (this.app_alert !== "") {
        this.showAlert = true;
      } else {
        this.showAlert = false;
      }
    }
  },

  methods: {
    ...mapMutations(["removeAlert"]),
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

.alert-container {
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
  padding: 10px;
  border-radius: 4px;
  color: white !important;
}

.alert.error {
  border: none !important;
  background-color: #9d1818 !important;
}

.alert.success {
  background-color: green;
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
