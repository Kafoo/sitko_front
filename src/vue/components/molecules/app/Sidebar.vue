<template>
  <div>
    <div
      class="d-flex flex-column align-center mt-5 flex-shrink-0"
      style="width:300px;height:400px"
    >
      <v-img
        v-if="place.image"
        height="200px"
        width="80%"
        class="rounded-lg"
        :src="place.image.medium"
      ></v-img>

      <v-hover v-slot="{ hover }">
        <div>
          <v-card-title
            style="line-height:22px"
            class="px-3 pt-2 pb-1 my-2 c-pointer d-inline-block"
            :class="hover ? 'text-decoration-underline' : ''"
            @click="$router.push('/place/' + place.id).catch(() => {})"
          >
            {{ place.name }}
          </v-card-title>

          <v-btn
            v-if="place.can.update"
            icon
            fab
            small
            class="ml-1 mb-2"
            :to="`/place/${place.id}/edit`"
          >
            <v-icon>edit</v-icon>
          </v-btn>
        </div>
      </v-hover>

      <v-btn
        v-for="(item, index) in placeNavItems"
        :key="index"
        :to="item.path"
        width="80%"
        class="my-2"
      >
        <v-icon class="mx-3">{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"
import useFetcher from '@/ts/functions/composition/useFetcher';

export default defineComponent({

  name : "Sidebar",

  props: {
    place: Object,
    default: () => {}
  },

  setup(props, {root}) {

    var { entity: user, loading } = useFetcher("auth/GET_USER_DATA");

    const placeNavItems = [
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("calendar")),
          path: "/place/" + root.$route.params.id + "/calendar",
          icon: "event"
        },
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("notes")),
          path: "/place/" + root.$route.params.id + "/notes",
          icon: "description"
        },
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("projects")),
          path: "/place/" + root.$route.params.id + "/projects",
          icon: "handyman"
        },
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("events")),
          path: "/place/" + root.$route.params.id + "/events",
          icon: "star"
        }
      ];

    return{
      user,
      placeNavItems
    }

  }
});
</script>
