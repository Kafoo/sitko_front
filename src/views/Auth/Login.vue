<template>
  <primary-content-body>
    <v-card-text>
      <v-form ref="loginForm" v-model="valid" @submit.prevent="login">
        <div v-if="verification" class="form-group text-md-center">
          <span class="h2">{{$t('e-mail confirmation') | camelize}}</span>
        </div>
        <v-row dense>

          <v-col cols="12">
            <v-text-field
              outlined
              id="email"
              v-model="form.email"
              :rules="emailRules"
              :label="$options.filters.capitalize($t('e-mail'))"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.password"
              :append-icon="show1 ? 'eye' : 'eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              :label="$options.filters.capitalize($tc('password', 1))"
              :hint="$options.filters.capitalize($t('form.min_carac', {n:'8'}))"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-alert v-if="errors.email" dense outlined type="error">
              {{ errors.email[0] }}
            </v-alert>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
            <v-btn
              x-large
              block
              :disabled="!valid || loading"
              color="success"
              type="submit"
            >
              {{$t("Login")}}
            </v-btn>
          </v-col>

        </v-row>
      </v-form>
    </v-card-text>

    <v-progress-linear
      v-if="loading"
      color="green darken-4 accent-4"
      indeterminate
      rounded
      height="6"
      class="progress"
    ></v-progress-linear>
  </primary-content-body>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PrimaryContentBody from "@/components/app/templates/PrimaryContentBody";

export default {
  name: "Home",

  components: {
    PrimaryContentBody
  },

  data: function() {

    return {

      form: {
        password: "",
        email: ""
      },

      emailRules: [
        v => !!v || 
        this.$options.filters.capitalize(this.$t('form.required')),
        v => /.+@.+\..+/.test(v) || 
        this.$options.filters.capitalize(this.$t('form.unvalid', {item:this.$t('e-mail')}))
      ],

      rules: {
        required: value => !!value || 
        this.$options.filters.capitalize(this.$t('form.required')),
        min: v => (v && v.length >= 8) || 
        this.$options.filters.capitalize(this.$t('form.min_carac', {n:'8'}))
      },

      valid: false,
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
