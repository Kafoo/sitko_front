<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login" v-show="!user">Login</router-link> |
      <router-link to="/register" v-show="!user">Register</router-link> |
      <a class="nav-link" href="#" @click="logout" v-show="user">Logout</a>
    </div>
    <router-view />
  </div>
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
      this.$router.push("/");
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
