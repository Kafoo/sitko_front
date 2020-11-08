<template>
  <div class="login d-flex justify-center">
    <v-card max-width="700px" width="80%" class="elevation-6 ma-8">
      <div class="card-body">
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="email">Name</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.name }"
              id="name"
              v-model="details.name"
              placeholder="Enter name"
              :disabled="loading"
            />
            <div class="invalid-feedback" v-if="errors.name">
              {{ errors.name[0] }}
            </div>
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
          <div class="form-group">
            <label for="password_confirmation">Confirm password</label>
            <input
              type="password"
              class="form-control"
              id="password_confirmation"
              v-model="details.password_confirmation"
              placeholder="Confirm password"
              :disabled="loading"
            />
          </div>
          <v-card-actions class="d-flex justify-center">
            <v-btn type="submit" :disabled="loading">
              Register
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
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      loading: false
    };
  },
  computed: {
    ...mapGetters(["errors"])
  },
  mounted() {
    this.$store.commit("setErrors", {});
  },
  methods: {
    ...mapActions("auth", ["sendRegisterRequest"]),
    register: function() {
      this.loading = true;
      this.sendRegisterRequest(this.details)
        .then(() => {
          this.$router.push({ name: "Home" }).catch(() => {});
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
