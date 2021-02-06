<template>
  
  <div>
  
    <h3 v-if="!user" class="text-center">
      {{ $t("home_page.unauthenticated") }}
    </h3>
    <span v-else-if="!user.email_verified_at" class="text-center">
      <h1>{{ $t("hello") | capitalize }} {{ user.name }} !</h1>
      <h4>
        {{ $t("home_page.unverified") }}
        <a href="#" @click="verifyResend">
          {{ $t("resend e-mail") | capitalize }}
        </a>
      </h4>
    </span>
    <span v-else class="text-center">
      <h1>{{ $t("hello") | capitalize }} {{ user.name }} !</h1>
      <h3>
        {{ $t("home_page.verified") }}
      </h3>
    </span>
  
  </div>

</template>

<script lang="ts">

import { defineComponent, ref } from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';

export default defineComponent({

  name : "Welcoming",

  setup(props, { root }) {

    var success = ref('')
    var error = ref('')

    const { user } = useGetters({user: 'auth/user'} as any)
    const { SEND_VERIFY_RESEND_REQUEST } = useActions({
      SEND_VERIFY_RESEND_REQUEST: 'auth/SEND_VERIFY_RESEND_REQUEST'
    } as any)

    const verifyResend = () => {
      success.value = error.value = '';
      SEND_VERIFY_RESEND_REQUEST()
        .then(() => {
          success.value = root.$t(
            "A fresh verification link has been sent to your email address."
          ) as string;
        })
        .catch((error:any) => {
          error.value = root.$t("Error sending verification link.");
          console.log(error.response);
        });
    }

    return{
      success,
      error,
      verifyResend,
      user
    }

  }
});
</script>

<style scoped>



</style>
