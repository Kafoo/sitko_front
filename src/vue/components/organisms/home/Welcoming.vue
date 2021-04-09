<template>
  <div class="d-flex flex-column justify-center align-center">
    <h2 v-if="!user" class="text-center mb-3">
      {{ $t("home_page.unauthenticated") }}
    </h2>
    <span v-else class="text-center">
      <h1>{{ $t("hello") | capitalize }} {{ user.name }} !</h1>
      <h3>
        {{ $t("home_page.authenticated") }}
      </h3>
    </span>
    <a class="discord-link" href="https://discord.gg/dV5yWgZz9G">
      {{ $t("home_page.discord") }}
    </a>
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
