<template>
  <primary-content-body>
    <h1>{{$t('My Account')}}</h1>
    <v-btn class="d-block my-4" color="grey" dark @click="logout">
      {{$t('Logout')}}
    </v-btn>

    <v-btn class="d-block" color="red" dark @click="dialog = true">
      {{$t('Delete my account')}}
    </v-btn>

    <v-dialog v-model="dialog" width="500">
      <v-card class="pt-7 pb-3">
        <v-card-text class="text-h6">
          {{$t('Are you sure ?')}}<br>
          {{$t('Account deletion is definitive.')}}
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
            {{$t('confirm.cancel')}}
          </v-btn>
          <v-btn color="red" text @click="deleteUser()" :disabled="loading">
            {{$t('Delete')}}
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
  </primary-content-body>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PrimaryContentBody from "@/components/app/templates/PrimaryContentBody";

export default {
  name: "Home",

  components: {
    PrimaryContentBody
  },

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
    ...mapActions("auth", ["sendDeleteUser", "sendLogoutRequest"]),

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
    },

    logout() {
      this.sendLogoutRequest();
    }
  }
};
</script>

<style scoped>
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
