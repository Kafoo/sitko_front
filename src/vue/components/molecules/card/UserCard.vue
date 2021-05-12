<template>
  <div>
    <v-hover v-if="user" v-slot="{ hover }">
      <v-card
        v-if="user"
        :id="user.id"
        :elevation="hover ? 2 : 1"
        class="user-card c-pointer pa-0 d-flex align-center rounded-xl"
        height="40px"
        @click="$router.push(user.path)"
      >
        <v-img
          class="rounded-circle flex-grow-0 mr-2"
          width="40"
          height="40"
          :src="image.thumb"
        />
        <span class="text-subtitle-2 mr-4">
          {{ user.name }}
        </span>
      </v-card>
    </v-hover>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import UserModel from "@/ts/models/userClass";
import ImageModel from "@/ts/models/imageClass";

export default defineComponent({
  name: "UserCard",

  props: {
    user: UserModel
  },

  setup(props) {
    var image: any = computed(() => {
      if (props.user) {
        if (props.user.image) {
          return props.user.image;
        } else {
          return new ImageModel("avatar");
        }
      }
    });

    return {
      image
    };
  }
});
</script>

<style scoped></style>
