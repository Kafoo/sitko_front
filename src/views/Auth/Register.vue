<template>
  <primary-content-body>
    <div class="card-body">
      <v-card-text>
        <v-form ref="registerForm" v-model="valid" @submit.prevent="register">
          <v-row dense>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                outlined
                autocomplete="disabled"
                v-model="form.name"
                :rules="[rules.required]"
                :label="labels.firstName"
                maxlength="20"
                required
              ></v-text-field>
            </v-col>

            <v-spacer></v-spacer>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                outlined
                autocomplete="disabled"
                v-model="form.last_name"
                :label="labels.lastName"
                maxlength="20"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                outlined
                id="email"
                v-model="form.email"
                :rules="emailRules"
                :label="$options.filters.capitalize($t('e-mail'))"
                required
              ></v-text-field>
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
                :label="$options.filters.capitalize($t('password'))"
                :hint="$options.filters.capitalize($t('form.min_carac', {n:'8'}))"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                outlined
                autocomplete="disabled"
                block
                v-model="form.password_confirmation"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, passwordMatch]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                :label="$options.filters.capitalize($t('confirmation'))"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

            <v-spacer></v-spacer>

            <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
              <v-btn
                x-large
                block
                :disabled="!valid || loading"
                color="success"
                type="submit">
                  {{$t('Register')}}
                </v-btn
              >
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
    </div>
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

  data() {
    return {
      valid: false,
      form: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      show1: false,
      loading: false
    };
  },

  computed: {
    ...mapGetters(["errors"]),

    passwordMatch() {
      return () =>
        this.form.password === this.form.password_confirmation ||
        this.$options.filters.capitalize(this.$t('form.differents', {items: this.$tc('password', 2)}));
    },

    emailRules() {
      return [
        v => !!v || 
        this.$options.filters.capitalize(this.$t('form.required')),
        v => /.+@.+\..+/.test(v) || 
         this.$options.filters.capitalize(this.$t('form.unvalid', {item:this.$t('e-mail')}))
      ]
    },

    rules() {
      return {
        required: value => !!value || 
        this.$options.filters.capitalize(this.$t('form.required')),
        min: v => (v && v.length >= 8) || 
        this.$options.filters.capitalize(this.$t('form.min_carac', {n:'8'}))
      }
    },

    labels(){
      return {
        firstName: this.$options.filters.capitalize(this.$t('first name'))
                  +' / '
                  +this.$options.filters.capitalize(this.$t('alias')),
        lastName: this.$options.filters.capitalize(this.$t('last name')) 
                  +' ('
                  +this.$t('form.optional')
                  +')'
      }
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
