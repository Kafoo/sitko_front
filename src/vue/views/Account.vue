<template>
  <primary-content-body>
    <page-title :title="$t('my account')" />

    <v-btn class="d-block my-4" color="grey" dark @click="logout">
      {{ $t("logout") }}
    </v-btn>

    <v-btn class="d-block" color="red" dark @click="dialog = true">
      {{ $t("delete my account") }}
    </v-btn>

    <!-- Confirm deletion -->
    <confirm-dialog
      :show="dialog"
      :text="$t('Account deletion is definitive.')"
      :cancel="$t('confirm.cancel')"
      @cancel-action="dialog = false"
      :confirm="$t('delete')"
      @confirm-action="deleteUser()"
      confirm_color="red"
      :loading="loading"
    />
  </primary-content-body>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody";
import PageTitle from "@/vue/components/atoms/app/PageTitle.vue";
import ConfirmDialog from "@/vue/components/molecules/app/ConfirmDialog.vue";

export default {
  name: "Home",

  components: {
    PrimaryContentBody,
    PageTitle,
    ConfirmDialog
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
    ...mapActions("auth", ["SEND_DELETE_USER", "SEND_LOGOUT_REQUEST"]),

    deleteUser() {
      this.success = this.error = null;
      this.loading = true;
      this.SEND_DELETE_USER(this.user)
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
      this.SEND_LOGOUT_REQUEST();
    }
  }
};
</script>

<style scoped></style>
