<template>
  <v-menu
    v-if="$route.name != 'PlaceOverview'"
    class="acccount-drawer"
    rounded="xl"
    transition="scroll-y-reverse-transition"
    top
    left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        elevation="6"
        fab
        x-large
        class="float-button hidden-md-and-up"
      >
        <v-avatar :size="70">
          <img v-if="place.image" :src="place.image.thumb" />
          <v-icon v-else>menu</v-icon>
        </v-avatar>
      </v-btn>
    </template>

    <v-list class="py-0 hidden-md-and-up">
      <div
        class="d-flex justify-center align-center grey lighten-2 c-pointer px-4 py-3"
        @click="$router.push('/place/' + place.id)"
      >
        <v-img
          v-if="place.image"
          width="40px"
          class="rounded-lg"
          :src="place.image.thumb"
        >
        </v-img>
        <v-card-title class="px-2 py-1">
          {{ place.name }}
        </v-card-title>
      </div>
      <v-list-item
        v-for="item in placeNavItems"
        :key="item.title"
        :to="item.path"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import PlaceModel from "@/ts/models/placeClass";
import ImageModel from "@/ts/models/imageClass";

export default defineComponent({
  name: "",

  props: {
    place: {
      type: PlaceModel,
      default: {}
    }
  },

  setup(props, { root }) {
    const placeNavItems = ref([
      {
        title: root.$options.filters!.capitalize(root.$t("calendar")),
        path: "/place/" + root.$route.params.id + "/calendar",
        icon: "event"
      },
      {
        title: root.$options.filters!.capitalize(root.$t("notes")),
        path: "/place/" + root.$route.params.id + "/notes",
        icon: "description"
      },
      {
        title: root.$options.filters!.capitalize(root.$t("projects")),
        path: "/place/" + root.$route.params.id + "/projects",
        icon: "handyman"
      },
      {
        title: root.$options.filters!.capitalize(root.$t("events")),
        path: "/place/" + root.$route.params.id + "/events",
        icon: "star"
      },
      {
        title: root.$options.filters!.capitalize(root.$t("contact")),
        path: "/place/" + root.$route.params.id + "/contact",
        icon: "contact_support"
      }
    ]);

    return {
      placeNavItems
    };
  }
});
</script>

<style scoped>
.float-button {
  position: fixed;
  bottom: 15px;
  right: 20px;
}
</style>
