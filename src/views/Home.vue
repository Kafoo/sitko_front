<template>
  <primary-content-body>
    <div class="alert alert-success" role="alert" v-if="success">
      {{ success }}
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>

    <h3 v-if="!user" class="text-center">
      {{ $t('home.unauthenticated') }}
    </h3>
    <span v-else-if="!user.email_verified_at" class="text-center">
      <h1>{{ $t('Hello') }} {{ user.name }} !</h1>
      <h4>
        {{ $t('home.unverified') }}
        <a href="#" @click="verifyResend">
          {{ $t('Resend e-mail') }}
        </a>
      </h4>
    </span>
    <span v-else class="text-center">
      <h1>{{ $t('Hello') }} {{ user.name }} !</h1>
      <h3>
        {{ $t('home.verified') }}
      </h3>

    </span>
  </primary-content-body>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import PrimaryContentBody from "@/components/app/templates/PrimaryContentBody";

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
    ...mapActions("auth", ["sendVerifyResendRequest"]),
    verifyResend() {
      this.success = this.error = null;
      this.sendVerifyResendRequest()
        .then(() => {
          this.success =
            "A fresh verification link has been sent to your email address.";
        })
        .catch(error => {
          this.error = "Error sending verification link.";
          console.log(error.response);
        });
    }
  }
};
</script>
