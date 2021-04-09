<template>
  <div class="d-flex justify-center">
    <loading-circle v-if="loading" small />

    <v-card v-else-if="user" width="400px" class="ma-8 pa-3">
      <v-row justify="center">
        <v-col cols="auto">
          <big-avatar circle :image="user.image" default="avatar" />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <page-title :title="user.name" />
        </v-col>
      </v-row>

      <v-row 
      v-if="user.can.link"
      justify="center">
        <v-col cols="auto">
          <join-button :entity="user" type="user" class="mb-4" />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <current-tags :tags="user.tags" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed
} from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import UserModel from "@/ts/models/userClass";
import useFetcher from "@use/useFetcher";
import CurrentTags from "@/vue/components/molecules/current/CurrentTags.vue";
import PageTitle from "@/vue/components/atoms/app/PageTitle.vue";
import BigAvatar from "@c/atoms/media/BigAvatar.vue";
import JoinButton from "@/vue/components/atoms/place/JoinButton.vue";

export default defineComponent({
  name: "UserOverview",

  components: {
    CurrentTags,
    PageTitle,
    BigAvatar,
    JoinButton
  },

  setup(props, { root }) {
    const user_id = parseInt(root.$route.params.id);
    var { entity: user, loading } = useFetcher("user/GET_USER", user_id);

    return {
      user,
      loading
    };
  }
});
</script>

<style scoped></style>
