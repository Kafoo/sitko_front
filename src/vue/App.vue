<template>
  <v-app class="app">
    <!-- Error message -->
    <alert />
    <!-- Navigation -->
    <navigation />

    <!-- Content -->
    <v-main>
      <div v-if="loading" class="mt-5 d-flex justify-center">
        <loading-circle />
      </div>

      <router-view v-else></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navigation from "@/vue/components/organisms/app/Navigation.vue";
import Alert from "@/vue/components/molecules/app/Alert.vue";
import LoadingCircle from "@/vue/components/atoms/app/LoadingCircle.vue";

export default {
  components: {
    Navigation,
    Alert,
    LoadingCircle
  },

  computed: {
    ...mapGetters("auth", ["loading"])
  },

  methods: {
    ...mapActions("auth", ["GET_USER_DATA"])
  },

  mounted() {
    if (localStorage.getItem("authToken")) {
      this.GET_USER_DATA();
    }
  }
};
</script>

<style scoped></style>
