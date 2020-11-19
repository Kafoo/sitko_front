<template>
  <div class="home ma-5 d-flex justify-center">
    <div class="alert alert-success" role="alert" v-if="success">
      {{ success }}
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>
    <v-card class="pa-8 elevation-5"
    width="80%"
    max-width="800px">
      <h3 v-if="!user" class="text-center">
        Salut, connecte-toi ou créé un compte pour profiter de ce site
        merveilleux où il ne se passe pas grand chose.
      </h3>
      <span v-else-if="!user.email_verified_at" class="text-center">
        <h2>Coucou {{ user.name }} !</h2>
        <h4>
          Ton compte a bien été enregistré, maintenant, tu peux confirmer ton
          mail via le lien que tu as reçu dans ta boîte de réception. Tu peux
          aussi demander un nouveau mail de confirmation en cliquant
          <a href="#" @click="verifyResend">ici</a>.
        </h4>
      </span>
      <span v-else class="text-center">
        <h2>Salut {{ user.name }} !</h2>
        <h4>
          Bienvenue dans ce merveilleux site où des choses commencent à se passer.
        </h4>
      </span>

    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Home",
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
