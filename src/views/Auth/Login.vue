<template>
  <div class="login d-flex justify-center">
    <v-card max-width="700px" width="80%" class="elevation-6 ma-8">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
              id="email"
              v-model="details.email"
              placeholder="Enter email"
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
            />
            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password[0] }}
            </div>
          </div>
          <v-card-actions class="d-flex justify-center">
            <v-btn type="button" @click="login">
              Login
            </v-btn>
          </v-card-actions>
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
      }
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
      this.sendLoginRequest(this.details).then(() => {
        if (this.verification) {
          this.$emit("verify");
        } else {
          this.$router.push({ name: "Home" }).catch(() => {});
        }
      });
    }
  }
};
</script>
