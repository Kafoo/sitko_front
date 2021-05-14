<template>
  <div class="mt-8" style="max-width:800px; margin:auto">
    <welcoming class="mb-8 mx-3" />

    <div v-if="user">
      <div class="d-flex flex-column align-center">
        <v-btn
          color="#fff490"
          x-large
          class="mb-5 rounded-lg"
          elevation="4"
          to="/map"
        >
          <v-icon left>map</v-icon>
          {{ $t("places map") }}
        </v-btn>
        <v-btn
          color="#97f29a"
          x-large
          class="mb-5 rounded-lg"
          elevation="4"
          to="/network"
        >
          <v-icon left>share</v-icon>
          {{ $t("my network") }}
        </v-btn>
        <v-btn
          v-if="!user.places || (user.places && !user.places.length)"
          color="#90ceff"
          x-large
          class="mb-5 rounded-lg"
          elevation="4"
          to="/place/create"
        >
          <v-icon left>home</v-icon>
          {{ $t("actions.create.place") }}
        </v-btn>
        <v-btn
          v-else
          color="#90ceff"
          x-large
          class="mb-5 rounded-lg"
          elevation="4"
          to="/places/myplaces"
        >
          <v-icon left>home</v-icon>
          {{ $t("my places") }}
        </v-btn>
      </div>

      <home-list />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import Welcoming from "@c/organisms/home/Welcoming.vue";
import HomeList from "@c/organisms/home/HomeList.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";

export default defineComponent({
  name: "Home",

  components: {
    PrimaryContentBody,
    Welcoming,
    HomeList,
    CreateButton
  },

  setup() {
    const { user } = useGetters({ user: "auth/user" } as any);

    return {
      user
    };
  }
});
</script>

<style scoped></style>
