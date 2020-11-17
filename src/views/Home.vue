<template>
  <div class="home mt-5 d-flex justify-center">
    <div class="alert alert-success" role="alert" v-if="success">
      {{ success }}
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>
    <v-card max-width="700px" width="80%" class="pa-8 mt-2 elevation-5">
      <h3 v-if="!user" class="text-center">
        Salut, connecte-toi ou créé un compte pour profiter de ce site
        merveilleux où rien ne se passe encore.
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
        <h2>Coucou {{ user.name }} !</h2>
        <h4>
          Bienvenue dans ce merveilleux site où rien ne se passe.
        </h4>
      </span>



    <v-file-input
       v-model="file"
       chips
       accept="image/*"
       label="Image"
       @change="onFileChange"
    />

    <v-btn @click="sendImage" >Valider</v-btn>



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
      file: null, 
      image: null,
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
    },
    onFileChange() {
        const reader = new FileReader()
        reader.readAsDataURL(this.file)
        reader.onload = e => {
            this.image = e.target.result
            console.log(this.image)
        }
    },
    sendImage(){
      var formData = new FormData()
      formData.append('image', 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

      axios
        .post('https://api.imgbb.com/1/upload?expiration=600&key=7618071644bd033d9b2f5b22619c5391', formData)
        .then(response => {
          console.log(response)
        })
        .catch(() => {});
    }
  }
};
</script>
