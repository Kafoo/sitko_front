<template>
  <div class="d-flex flex-column justify-center align-center">
    <div v-if="!user" class="d-flex flex-column align-center text-center">
      <h1>{{ $t("hello") | capitalize }} !</h1>
      <h2>{{ $t("home_page.unauthenticated") }}</h2>
      <v-img
        class="my-3"
        src="https://res.cloudinary.com/dyigive9u/image/upload/v1620394226/home_mwhjqq.png"
        width="100px"
      ></v-img>

      <v-btn rounded class="ma-2" color="success" to="/register">
        {{ $t("register") }}
      </v-btn>
      <v-btn rounded class="ma-2" color="success" to="/login">
        {{ $t("connection") }}
      </v-btn>
      <v-btn
        rounded
        class="ma-2"
        color="#eff24f"
        
        to="/wtfis"
      >
        {{ $t("What is Sitko ?") }}
      </v-btn>
      <v-btn
        rounded
        class="ma-2"
        color="blue"
        dark
        href="https://discord.gg/dV5yWgZz9G"
        target="_blank"
      >
        {{ $t("home_page.discord") }}
      </v-btn>
    </div>

    <div v-else class="text-center d-flex flex-column">
      <h1>{{ $t("hello") | capitalize }} {{ user.name }} !</h1>
      <h3>
        {{ $t("home_page.authenticated") }}
      </h3>
      <v-btn 
      text 
      style="text-transform: none" 
      plain 
      class="text-decoration-underline"
      href="https://discord.gg/dV5yWgZz9G"
      target="_blank"
      height="30px">
        {{ $t("home_page.discord") }}
      </v-btn>

      <v-btn 
      text 
      style="text-transform: none" 
      plain 
      class="text-decoration-underline"
      to="/wtfis"
      height="30px">
        {{$t('What is Sitko ?')}}
      </v-btn>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";

export default defineComponent({
  name: "Welcoming",

  setup(props, { root }) {
    var success = ref("");
    var error = ref("");

    const { user } = useGetters({ user: "auth/user" } as any);
    const { SEND_VERIFY_RESEND_REQUEST } = useActions({
      SEND_VERIFY_RESEND_REQUEST: "auth/SEND_VERIFY_RESEND_REQUEST"
    } as any);

    const verifyResend = () => {
      success.value = error.value = "";
      SEND_VERIFY_RESEND_REQUEST()
        .then(() => {
          success.value = root.$t(
            "A fresh verification link has been sent to your email address."
          ) as string;
        })
        .catch((error: any) => {
          error.value = root.$t("Error sending verification link.");
        });
    };

    return {
      success,
      error,
      verifyResend,
      user
    };
  }
});
</script>

<style scoped>
.discord-link {
  display: inline-block;
  color: grey;
}
</style>
