<template>
  <div class="login d-flex justify-center">
    <v-card max-width="700px" width="80%" xs-width="100%" class="elevation-6 ma-5">
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group text-md-center">
            <span v-if="verification" class="h2">Confirmation de l'email</span>
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
              id="email"
              v-model="details.email"
              placeholder="Enter email"
              :disabled="loading"
            />
            <div class="invalid-feedback" v-if="errors.email">
              {{ errors.email[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors.password }"
              id="password"
              v-model="details.password"
              placeholder="Password"
              :disabled="loading"
            />
            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password[0] }}
            </div>
          </div>
          <v-card-actions class="d-flex justify-center">
            <v-btn type="submit" :disabled="loading">
              Login
            </v-btn>
          </v-card-actions>
          <v-progress-linear
            v-if="loading"
            color="green darken-4 accent-4"
            indeterminate
            rounded
            height="6"
            class="progress"
          ></v-progress-linear>
        </form>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data: function() {
    return {
      details: {
        email: null,
        password: null
      },
      loading: false
    };
  },
  props: {
    verification: { type: String, default: null }
  },
  computed: {
    ...mapGetters(["errors"])
  },
  mounted() {
    this.$store.commit("setErrors", {});
  },
  methods: {
    ...mapActions("auth", ["sendLoginRequest"]),
    login: function() {
      this.loading = true;
      this.sendLoginRequest(this.details)
        .then(() => {
          if (this.verification) {
            this.$emit("verify");
          } else {
            this.$router.push({ name: "Home" }).catch(() => {});
          }
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style>
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
