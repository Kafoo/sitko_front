<template>
  <primary-content-body>
    <page-title :title="$t('my account')" />

    <image-input
    icon
    :image="user.image" 
    @changeImage="editUser"/>

    <span v-if="loading_image">
      Updating
    </span>

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
import PageTitle from "@c/atoms/app/PageTitle.vue";
import ConfirmDialog from "@c/molecules/app/ConfirmDialog.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue"

export default {

  name: "Account",

  components: {
    PrimaryContentBody,
    PageTitle,
    ConfirmDialog,
    ImageInput
  },

  data() {
    return {
      dialog: false,
      success: null,
      error: null,
      loading: false,
      loading_image: false
    };
  },

  computed: {
    ...mapGetters("auth", ["user"])
  },

  methods: {
    ...mapActions("auth", ["SEND_USER_EDITION", "SEND_DELETE_USER", "SEND_LOGOUT_REQUEST"]),

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

    editUser(newImage) {
      this.user.image = newImage
      this.loading_image = true;
      this.SEND_USER_EDITION(this.user)
        .then(() => {
          this.loading_image = false;
          //display some confirmation ?
        })
        .catch(error => {
          this.loading_image = false;
        });
    },

    logout() {
      this.SEND_LOGOUT_REQUEST();
    }
  }
};


</script>

<style scoped></style>
