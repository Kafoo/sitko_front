<template>
  <div class="login d-flex justify-center">
    <v-card max-width="700px" width="80%" xs-width="100%" class="elevation-6 ma-5 pa-5">
      <div class="card-body">

        <v-card-text>
          <v-form 
          ref="loginForm" 
          v-model="valid"
          @submit.prevent="login">
          <div class="form-group text-md-center">
            <span v-if="verification" class="h2">Confirmation de l'email</span>
          </div>
            <v-row dense>
              <v-col cols="12">
                  <v-text-field
                  outlined 
                  id="email"
                  v-model="form.email" 
                  :rules="emailRules" 
                  label="E-mail" 
                  required></v-text-field>
              </v-col>
              <v-col cols="12">
                  <v-text-field
                  outlined 
                  v-model="form.password" 
                  :append-icon="show1?'eye':'eye-off'" 
                  :rules="[rules.required, rules.min]" 
                  :type="show1 ? 'text' : 'password'" 
                  name="input-10-1" 
                  label="Password" 
                  hint="At least 8 characters" 
                  counter 
                  @click:append="show1 = !show1"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-alert
                  v-if="errors.email"
                  dense
                  outlined
                  type="error"
                >
                  {{ errors.email[0] }}
                </v-alert>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" xsm="12">
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                  <v-btn x-large block :disabled="!valid || loading" color="success" type="submit"> Login </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

<!-- 
        <form @submit.prevent="login">

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
        </form> -->


          <v-progress-linear
            v-if="loading"
            color="green darken-4 accent-4"
            indeterminate
            rounded
            height="6"
            class="progress"
          ></v-progress-linear>
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
      valid: false,
      form:{
        password: "",
        email: "",
      },
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Requis",
        min: v => (v && v.length >= 8) || "Min 8 caractères"
      },
      show1: false,
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
      if (this.$refs.loginForm.validate()) {
        this.loading = true;
        this.sendLoginRequest(this.form)
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
  }
};
</script>

<style scoped>
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
