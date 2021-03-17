<template>
  <v-app class="app">
    <!-- Error message -->
    <alert />
    <!-- Navigation -->
    <navigation />

    <!-- Content -->
    <v-main>
      <div v-if="loading" class="mt-5 d-flex justify-center">
        <loading-circle app />
      </div>

      <router-view v-else></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navigation from "@c/organisms/app/Navigation.vue";
import Alert from "@c/molecules/app/Alert.vue";

export default {
  components: {
    Navigation,
    Alert
  },

  computed: {
    ...mapGetters("auth", ["loading"])
  },

  methods: {
    ...mapActions("auth", ["GET_USER_DATA"])
  },

  beforeDestroy() {
    document.removeEventListener("backbutton", this.yourCallBackFunction);
  },

  mounted() {
    if (localStorage.getItem("authToken")) {
      this.GET_USER_DATA();
    }
    document.addEventListener(
      "backbutton",
      function() {
        console.log("plop");
      },
      false
    );
  }
};
</script>

<style scoped></style>
