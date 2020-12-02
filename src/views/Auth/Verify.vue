<template>
  <div class="verify">
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>

    <div v-else>
      <login v-if="!user" verification="email" v-on:verify="verify" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Login from "@/views/Auth/Login.vue";

export default {
  props: ["hash"],
  components: {
    Login
  },
  data() {
    return {
      error: null
    };
  },
  mounted() {
    if (this.user) {
      this.verify();
    }
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    getUser() {
      return this.user;
    }
  },
  watch: {
    getUser(newUser) {
      if (newUser) {
        this.verify();
      }
    }
  },
  methods: {
    ...mapActions("auth", ["sendVerifyRequest"]),

    verify() {
      this.sendVerifyRequest(this.hash)
        .then(() => {
          this.$router.push("/").catch(() => {});
        })
        .catch(error => {
          console.log(error.response);
          this.error = "Error verifying email";
        });
    },
    plop() {
      alert("yop");
    }
  }
};
</script>
