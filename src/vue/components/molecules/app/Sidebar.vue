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
            v-if="user.id == place.author.id"
            icon
            fab
            small
            class="ml-1 mb-2"
            :to="`/place/edit/${place.id}`"
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

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  props: {
    place: Object,
    default: () => {}
  },

  computed: {
    ...mapGetters("auth", ["user"]),
    placeNavItems() {
      return [
        {
          title: this.$options.filters.capitalize(this.$t("calendar")),
          path: "/place/" + this.$route.params.id + "/calendar",
          icon: "event"
        },
        {
          title: this.$options.filters.capitalize(this.$t("notes")),
          path: "/place/" + this.$route.params.id + "/notes",
          icon: "description"
        },
        {
          title: this.$options.filters.capitalize(this.$t("projects")),
          path: "/place/" + this.$route.params.id + "/projects",
          icon: "handyman"
        },
        {
          title: this.$options.filters.capitalize(this.$t("events")),
          path: "/place/" + this.$route.params.id + "/events",
          icon: "star"
        },
        {
          title: this.$options.filters.capitalize(this.$t("contact")),
          path: "/place/" + this.$route.params.id + "/contact",
          icon: "contact_support"
        }
      ];
    }
  }
};
</script>
