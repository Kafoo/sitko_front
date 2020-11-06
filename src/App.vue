<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

      <v-toolbar-title>Sitko</v-toolbar-title>

      </div>

      <v-spacer></v-spacer>

      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/login" v-show="!user">Login</v-btn>
      <v-btn text to="/register" v-show="!user">Register</v-btn>
      <v-btn text @click="logout" v-show="user">Logout</v-btn>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["user"])
  },
  mounted() {
    if (localStorage.getItem("authToken")) {
      this.getUserData();
    }
  },
  methods: {
    ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),
    logout() {
      this.sendLogoutRequest();
      this.$router.push("/").catch(()=>{});;
    }
  }
};
</script>
