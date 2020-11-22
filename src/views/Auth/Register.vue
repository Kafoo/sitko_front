<template>
  <div class="login d-flex justify-center">
    <v-card max-width="700px" width="80%" class="elevation-6 ma-5 pa-5">
      <div class="card-body">

        <v-card-text>
          <v-form
          ref="registerForm" 
          v-model="valid"
          @submit.prevent="register">
              <v-row dense>
                  <v-col cols="12" sm="6" md="6">
                      <v-text-field
                      outlined 
                      autocomplete="disabled"
                      v-model="form.name" 
                      :rules="[rules.required]" 
                      label="Prénom/Pseudo" 
                      maxlength="20" 
                      required></v-text-field>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="12" sm="6" md="6">
                      <v-text-field
                      outlined
                      autocomplete="disabled" 
                      v-model="form.last_name" 
                      label="Nom de famille (optionnel)" 
                      maxlength="20" 
                      required></v-text-field>
                  </v-col>
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
                      autocomplete="disabled" 
                      v-model="form.password" 
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                      :rules="[rules.required, rules.min]" 
                      :type="show1 ? 'text' : 'password'" 
                      name="input-10-1" 
                      label="Mot de passe" 
                      hint="At least 8 characters" 
                      counter 
                      @click:append="show1 = !show1"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                      <v-text-field
                      outlined
                      autocomplete="disabled" 
                      block v-model="form.password_confirmation" 
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                      :rules="[rules.required, passwordMatch]" 
                      :type="show1 ? 'text' : 'password'" 
                      name="input-10-1" 
                      label="Confirmation" 
                      counter 
                      @click:append="show1 = !show1"></v-text-field>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                      <v-btn x-large block 
                      :disabled="!valid || loading" 
                      color="success" 
                      type="submit">S'inscrire</v-btn>
                  </v-col>
              </v-row>
          </v-form>
      </v-card-text>
<!-- 
        <v-form @submit.prevent="register" ref="form" v-model="form">

            <v-text-field
              label="Nom"
              outlined
              :rules="[v => !!v || 'Nom requis']"
              v-model="form.name"
              :disabled="loading"
            ></v-text-field>
            <v-text-field
              label="Email"
              outlined
              :rules="[v => !!v || 'Email requis']"
              v-model="form.email"
              :disabled="loading"
            ></v-text-field>


            <v-text-field
              label="Mot de passe"
              type='password'
              outlined
              :rules="[v => !!v || 'Mot de passe requis']"
              hint="Au moins 8 caractères" 
              v-model="form.password"
              :disabled="loading" 
            ></v-text-field>

            <v-text-field
              label="Confirmation"
              type='password'
              outlined
              :rules="[v => !!v || 'Confirmation requise']"
              hint="Au moins 8 caractères" 
              v-model="form.password_confirmation"
              :disabled="loading" 
            ></v-text-field>


            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password[0] }}
            </div>

          <v-card-actions class="d-flex justify-center">
            <v-btn type="submit" :disabled="loading">
              S'inscrire
            </v-btn>
          </v-card-actions>
        </v-form> -->

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
  data() {
    return {
      valid: false,
      form:{
        name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail non valide"
      ],

      show1: false,
      rules: {
        required: value => !!value || "Requis",
        min: v => (v && v.length >= 8) || "Min 8 caractères"
      },

      loading: false
    };
  },
  computed: {
    ...mapGetters(["errors"]),
    passwordMatch() {
      return () => this.form.password === this.form.password_confirmation || "Les mots de passe sont différents";
    }
  },
  mounted() {
    this.$store.commit("setErrors", {});
  },
  methods: {
    ...mapActions("auth", ["sendRegisterRequest"]),
    register: function() {
      if (this.$refs.registerForm.validate()) {
        this.loading = true;
        this.sendRegisterRequest(this.form)
          .then(() => {
            this.$router.push({ name: "Home" }).catch(() => {});
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
