<template>
  <primary-content-body>
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
  </primary-content-body>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody";

export default {
  name: "Home",

  components: {
    PrimaryContentBody
  },

  data() {
    return {
      success: null,
      error: null
    };
  },

  computed: {
    ...mapGetters("auth", ["user"])
  },

  methods: {
    ...mapActions("auth", ["SEND_VERIFY_RESEND_REQUEST"]),
    verifyResend() {
      this.success = this.error = null;
      this.SEND_VERIFY_RESEND_REQUEST()
        .then(() => {
          this.success = this.$t(
            "A fresh verification link has been sent to your email address."
          );
        })
        .catch(error => {
          this.error = this.$t("Error sending verification link.");
          console.log(error.response);
        });
    }
  }
};
</script>
