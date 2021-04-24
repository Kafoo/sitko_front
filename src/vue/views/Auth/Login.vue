<template>
  <primary-content-body>
    <v-card-text>
      <v-form ref="loginForm" v-model="valid" @submit.prevent="login">
        <div v-if="verifying" class="form-group text-md-center">
          <span class="h2">{{ $t("e-mail confirmation") | camelize }}</span>
        </div>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              outlined
              id="email"
              v-model="form.email"
              :rules="[rules.email[0]]"
              :label="$options.filters.capitalize($t('e-mail'))"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              outlined
              block
              v-model="form.password"
              :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required[0], rules.min(8)[0]]"
              :type="show_password ? 'text' : 'password'"
              name="input-10-1"
              :label="$options.filters.capitalize($tc('password', 1))"
              :hint="
                $options.filters.capitalize($t('form.min_carac', { n: '8' }))
              "
              counter
              @click:append="show_password = !show_password"
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
              {{ $t("login") }}
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

<script lang="ts">
import Vue from "vue";
import {
  ref,
  defineComponent,
  computed,
  onMounted
} from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";

import { useInputRules } from "@/ts/functions/composition/inputRules";

export default defineComponent({
  name: "Login",

  components: {
    PrimaryContentBody
  },

  setup(props, { root, refs }) {
    onMounted(() => {
      root.$store.commit("app/setErrors", {});
    });

    const rules = {
      email: useInputRules().email,
      required: useInputRules().required,
      min: useInputRules().min
    };

    var { SEND_LOGIN_REQUEST } = useActions({
      SEND_LOGIN_REQUEST: "auth/SEND_LOGIN_REQUEST"
    } as any);
    var { errors } = useGetters({ errors: "app/errors" } as any);
    var { verifying } = useGetters({ verifying: "auth/verifying" } as any);

    var valid = ref(false);
    var show_password = ref(false);
    var loading = ref(false);
    var form = ref({
      password: "",
      email: ""
    });

    const refForm = computed(
      () => refs.loginForm as Vue & { validate: () => boolean }
    );

    const login = () => {
      if (refForm.value.validate()) {
        loading.value = true;
        SEND_LOGIN_REQUEST(form.value)
          .then(() => {
            if (verifying.value) {
              window.location.href = "/verify/"+verifying.value
            } else {
              root.$router.push({ name: "Home" }).catch(() => {});
            }
          })

          .catch(() => {
            loading.value = false;
          });
      }
    };

    return {
      errors,
      valid,
      show_password,
      loading,
      form,
      rules,
      refForm,
      login,
      verifying
    };
  }
});
</script>
