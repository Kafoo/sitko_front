<template>
  <primary-content-body>
    <div class="card-body">
      <v-card-text>
        <v-form ref="registerForm" v-model="valid" @submit.prevent="register">
          <v-row dense>

            <v-col cols="12">
              <v-alert v-if="errors.name" dense outlined type="error">
                {{ errors.name[0] }}
              </v-alert>
            </v-col>
            
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                outlined
                autocomplete="disabled"
                v-model="form.name"
                :rules="[rules.required[0]]"
                :label="firstName"
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
                :label="lastName"
                maxlength="20"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-alert v-if="errors.email" dense outlined type="error">
                {{ errors.email[0] }}
              </v-alert>
            </v-col>

            <v-col cols="12">
              <v-text-field
                outlined
                id="email"
                v-model="form.email"
                :rules="[rules.required[0], rules.email[0]]"
                :label="$options.filters.capitalize($t('e-mail'))"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                outlined
                autocomplete="disabled"
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
              <v-text-field
                outlined
                autocomplete="disabled"
                block
                v-model="form.password_confirmation"
                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required[0], rules.match(form.password, form.password_confirmation)[0]]"
                :type="show_password ? 'text' : 'password'"
                name="input-10-1"
                :label="$options.filters.capitalize($t('confirmation'))"
                counter
                @click:append="show_password = !show_password"
              ></v-text-field>
            </v-col>

            <v-spacer></v-spacer>

            <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
              <v-btn
                x-large
                block
                :disabled="!valid || loading"
                color="success"
                type="submit"
              >
                {{ $t("register") }}
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
    </div>
  </primary-content-body>
</template>

<script lang="ts">
import Vue from "vue";
import {ref, defineComponent, computed, onMounted} from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import { capitalize } from '@/ts/functions/vueFilters'
import useRouter from 'vue-router'


import {useInputRules} from "@/ts/functions/composition/inputRules"

export default defineComponent({
  name: "Home",

  components: {
    PrimaryContentBody
  },

  setup(props, {root, refs}){
  
    var { SEND_REGISTER_REQUEST } = useActions({SEND_REGISTER_REQUEST: 'auth/SEND_REGISTER_REQUEST'} as any)
    var { errors } = useGetters({errors: 'app/errors'} as any)

    onMounted(() => {
      root.$store.commit("app/setErrors", {});
    })

    var valid = ref(false)
    var form = ref({
      name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    })
    var show_password = ref(false)
    var loading = ref(false)

    const firstName = computed(() =>
          capitalize(root.$t("first name")) +
          " / " +
          capitalize(root.$t("alias"))
    )

    const lastName = computed(() => 
          capitalize(root.$t("last name")) +
          " (" +
          root.$t("form.optional") +
          ")"
    )

  const rules = ref({
    email: useInputRules().email,
    required: useInputRules().required,
    min: useInputRules().min,
    match: useInputRules().match
  })

  console.log(rules)

    const refForm = computed(() => refs.registerForm as Vue & { validate: () => boolean })

    const register = () => {
      if (refForm.value.validate()) {
        loading.value = true;
        SEND_REGISTER_REQUEST(form.value)
          .then(() => {
            root.$router.push({ name: "Home" }).catch(() => {});
          })
          .catch(() => {
            loading.value = false;
          });
      }
    }

    return {
      errors,
      valid,
      form,
      show_password,
      loading,
      firstName,
      lastName,
      rules,
      register
    }
  }
})
</script>