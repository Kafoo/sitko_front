<template>
  <span>
    <v-btn
      v-if="user && user.id"
      :to="'/user/' + user.id"
      height="25px"
      text
      color="grey darken-2"
      small
      class="pl-0 pr-2 text-none"
    >
      <tiny-avatar class="d-inline mr-1" size="20" :image="user.image" />
      {{ user.name }}
    </v-btn>
    <span v-else-if="user">
      {{user.name}}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import TinyAvatar from "./TinyAvatar.vue";
import UserModel from "@/ts/models/userClass";

export default defineComponent({
  name: "UserChip",

  props: {
    user: Object as () => UserModel
  },

  components: {
    TinyAvatar
  },

  setup() {
    return {};
  }
});
</script>

<style scoped></style>
