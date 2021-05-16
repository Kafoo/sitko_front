<template>
  
  <primary-content-body class="pa-5">


    <div class="text-h3 font-weight-black centering mb-5">
      Sitko
    </div>

    <v-img
      class="my-3"
      style="margin:auto"
      src="https://res.cloudinary.com/dyigive9u/image/upload/v1620394226/home_mwhjqq.png"
      width="100px"
    ></v-img>

    <div class="text-center font-weight-bold">
      Un réseau social responsable pour les écolieux et leurs résidents.<br>
    </div>
      <v-divider class="my-3"></v-divider>
    <div class="text-subtitle-1 font-italic text-center mb-5 d-flex flex-wrap justify-center">

      <v-card color="yellow rounded-lg ma-2 py-2 px-3 pr-4 d-flex">
        <v-icon left>groups</v-icon>Renforcer les liens
      </v-card>
      <v-card color="yellow rounded-lg ma-2 py-2 px-3 pr-4 d-flex">
        <v-icon left>architecture</v-icon>Optimiser accueils et projets
      </v-card>
      <v-card color="yellow rounded-lg ma-2 py-2 px-3 pr-4 d-flex">
        <v-icon left>swap_calls</v-icon>Partager ressources et connaissances.
      </v-card>

    </div>

    <v-card class="rounded-xl pa-5 white--text mb-8" color="#1e8922">
      <div class="text-h6 font-weight-black mb-2 grey--text text--lighten-4">
        LE CONCEPT
      </div>

      <div class="mb-5" style="line-height:1.8em;">
        🙋‍♂️ Page perso - Présentation, favoris, compétences et centres d'intérêts.<br>
        🏡 Page d'écolieu - Un espace dédié au lieu avec ses projets et événements, son calendrier, ses fiches informatives, les conditions d'accueil, les ressources proposées/recherchées...<br>
        🗺️ Carte interactive - Recherche de lieux et de projets par localisation ou centres d'intérêts.<br>
        🔗 Réseau personnalisé - Système de "connection" entre les utilisateurs et entre les écolieux.
      </div>
      
      <div class="text-h6 font-weight-bold mb-2 grey--text text--lighten-4">
        LA DÉMARCHE
      </div>

      <div class="mb-5" style="line-height:1.8em;">
        🌻 Responsable - Une empreinte limitée, Des données protégées.<br>
        ⚖️ Égalitaire - Pas de course aux "likes" ou aux "5 étoiles".<br>
        👥 Communautaire - Une participation commune au développement de la plateforme.<br>
        🐱 Indépendante - Un système de don. Pas de pub. Pas de vente de donnée.
      </div>
      
      <div class="text-h6 font-weight-black mb-2 grey--text text--lighten-4">
        L'OBJECTIF
      </div>

      <div class="mb-5" style="line-height:1.8em;">
        ✊ Profiter de ces temps de grands changements pour fédérer nos efforts.<br>
        📱 Utiliser les outils d'aujourd'hui à notre manière pour optimiser ces changements.<br>
        🌿 Rencontrer, apprendre, vivre.
      </div>
    </v-card>

      <div class="d-flex flex-column align-center">
        <v-btn
          v-if="user"
          color="#fff490"
          x-large
          class="mb-5 rounded-lg"
          elevation="4"
          to="/map"
        >
          <v-icon left>map</v-icon>
          {{ $t("discover the map") }}
        </v-btn>

        <v-btn
          color="#90ceff"
          x-large
          class="mb-5 rounded-lg"
          elevation="4"
          to="/"
        >
          <v-icon left>home</v-icon>
          {{ $t("back to homepage") }}
        </v-btn>

      </div>
  
  </primary-content-body>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"
import { useGetters } from 'vuex-composition-helpers';

export default defineComponent({

  name : "Wtfis",

  setup() {

    const { user } = useGetters({ user: "auth/user" } as any);

    return{
      user
    }

  }
});
</script>

<style scoped>



</style>
