<template>
  <div class="verify">
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>

    <div v-else>
      <login v-if="!user" verification="email" v-on:verify="verify" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Getter, Action } from "vuex-class";
import { Component, Prop, Watch } from "vue-property-decorator";
import Login from "@/vue/views/Auth/Login.vue";
import UserModel from "@/ts/models/userClass";

const namespace: string = "auth";

@Component({
  name: "Verify",

  components: {
    Login
  }
})
export default class Verify extends Vue {
  @Prop(String) readonly hash?: string;
  @Getter("user", { namespace }) user?: UserModel;
  @Action("SEND_VERIFY_REQUEST", { namespace }) SEND_VERIFY_REQUEST: any;

  error?: string = undefined;

  @Watch("getUser")
  onGetUserChanged(newUser: UserModel) {
    if (newUser) {
      this.verify();
    }
  }

  verify() {
    this.SEND_VERIFY_REQUEST(this.hash)
      .then(() => {
        this.$router.push("/").catch(() => {});
      })
      .catch((error: any) => {
        console.log(error.response);
        this.error = "Error verifying email";
      });
  }

  mounted() {
    if (this.user) {
      this.verify();
    }
  }

  get getUser() {
    return this.user;
  }
}
</script>
