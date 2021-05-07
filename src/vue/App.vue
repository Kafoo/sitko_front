<template>
    <v-app 
    class="app">
      <access-code v-if="!confirmed_guest" />
        <!-- Error message -->
        <alert :class="confirmed_guest?'':'blur'" />
        <!-- Navigation -->
        <navigation :class="confirmed_guest?'':'blur'" />

        <!-- Content -->
        <v-main :class="confirmed_guest?'':'blur'">
          <div v-if="loading" class="mt-5 d-flex justify-center">
            <loading-circle app />
          </div>

          <router-view v-else :key="$route.path"></router-view>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navigation from "@c/organisms/app/Navigation.vue";
import Alert from "@c/molecules/app/Alert.vue";
import AccessCode from './components/molecules/app/AccessCode.vue';

export default {
  components: {
    Navigation,
    Alert,
    AccessCode
  },

  computed: {
    ...mapGetters("auth", ["loading"]),
    ...mapGetters("app", ["confirmed_guest"])
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

<style scoped>


.blur{
  filter: blur(5px);
}

</style>
