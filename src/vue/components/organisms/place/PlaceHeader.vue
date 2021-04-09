<template>
  <div>
    <div class="d-flex justify-center">
      <header-image class="mb-2 flex-grow-0" :image="place.image" />
    </div>

    <div
      class="mx-sm-4 d-flex flex-column flex-sm-row align-center justify-sm-space-between"
    >
      <div class="mb-5 mx-sm-0 mx-4 text-sm-start text-center">
        <h1>
          {{ place.name }}
        </h1>

        <created-by :item="place" />
      </div>

      <div
        class="placeAction-container mb-5 d-flex flex-column flex-sm-row justify-end"
      >
        <join-button
          v-if="place.can.link"
          :entity="place"
          type="place"
          class="mb-4"
        />

        <v-btn
          v-else-if="place.can.update"
          class="mb-4"
          :to="'/place/' + $route.params.id + '/edit'"
        >
          <v-icon
            left
          >
            edit
          </v-icon>
          {{$t('edit')}}
        </v-btn>

        <v-btn
          :to="'/place/' + $route.params.id + '/contact'"
          class="placeAction rounded-lg mb-4 ml-sm-4"
        >
          <v-icon class="mr-2">mail</v-icon>
          {{ $t("contact") | capitalize }}
        </v-btn>

        <v-menu rounded="xl" bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="more-button ml-sm-4"
              :large="$vuetify.breakpoint.name == 'xs'"
              :icon="$vuetify.breakpoint.name !== 'xs'"
              :fab="$vuetify.breakpoint.name == 'xs'"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="black">more_vert</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="item in morePlaceActions"
              :key="item.title"
              @click="item.action"
            >
              <v-list-item-title>
                <v-icon class="mr-2">{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "@vue/composition-api";
import Vue from "Vue";
import PlaceModel from "@/ts/models/placeClass";
import HeaderImage from "@c/molecules/media/HeaderImage.vue";
import { useActions, useGetters } from "vuex-composition-helpers";
import JoinButton from "@c/atoms/place/JoinButton.vue";
import CreatedBy from "@c/atoms/app/CreatedBy.vue";

export default defineComponent({
  name: "PlaceHeader",

  components: {
    HeaderImage,
    JoinButton,
    CreatedBy
  },

  props: {
    place: {
      type: Object as () => PlaceModel
    }
  },

  setup(props, { root }) {
    var morePlaceActions = ref([
      {
        title: root.$options.filters!.capitalize(root.$t("calendar")),
        action: () => {
          root.$router.push("/place/" + root.$route.params.id + "/calendar");
        },
        icon: "event"
      },
      {
        title: root.$options.filters!.capitalize(root.$t("notes")),
        action: () => {
          root.$router.push("/place/" + root.$route.params.id + "/notes");
        },
        icon: "description"
      },
      {
        title: root.$options.filters!.capitalize(root.$t("projects")),
        action: () => {
          root.$router.push("/place/" + root.$route.params.id + "/projects");
        },
        icon: "handyman"
      },
      {
        title: root.$options.filters!.capitalize(root.$t("events")),
        action: () => {
          root.$router.push("/place/" + root.$route.params.id + "/events");
        },
        icon: "star"
      }
    ]);

    return {
      morePlaceActions
    };
  }
});
</script>

<style scoped>
@media (max-width: 600px) {
  .placeAction {
    width: 80vw !important;
  }

  .more-button {
    position: fixed;
    bottom: 15px;
    right: 20px;
    z-index: 1;
  }
}
</style>
