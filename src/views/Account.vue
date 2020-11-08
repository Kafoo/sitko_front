<template>
  <div class="home mt-5 d-flex justify-center">
    <v-card max-width="700px" width="80%" class="pa-8 mt-2 elevation-5">
      <h1>Mon Compte</h1>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red" dark v-bind="attrs" v-on="on">
            Supprimer mon compte
          </v-btn>
        </template>

        <v-card class="pt-7 pb-3">
          <v-card-text class="text-h6">
            Sûr de chez sûr ? Aucun moyen de revenir en arrière
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
              :disabled="loading"
            >
              En fait non
            </v-btn>
            <v-btn color="red" text @click="deleteUser()" :disabled="loading">
              Supprimer
            </v-btn>
          </v-card-actions>
          <v-progress-linear
            v-if="loading"
            color="green darken-4 accent-4"
            indeterminate
            rounded
            height="6"
            class="progress"
          ></v-progress-linear>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      success: null,
      error: null,
      loading: false
    };
  },
  computed: {
    ...mapGetters("auth", ["user"])
  },
  methods: {
    ...mapActions("auth", ["sendDeleteUser"]),
    deleteUser() {
      this.success = this.error = null;
      this.loading = true;
      this.sendDeleteUser(this.user)
        .then(() => {
          this.loading = false;
          this.$router.push("/").catch(() => {});
        })
        .catch(error => {
          this.error = "Error deleting user.";
          console.log(error.response);
        });
    }
  }
};
</script>

<style>
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
