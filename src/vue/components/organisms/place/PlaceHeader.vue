<template>
  <div>
    <div class="d-flex justify-center" style="position:relative">
      <header-image class="mb-2 flex-grow-0" :image="place.image" />
      <div 
      v-if="place.location"
      style="position:absolute;right:10px;bottom:15px">
        <v-btn small color='#00000075' dark class="rounded-lg" :to="'/map/place/'+place.id">
          <v-icon left>map</v-icon>
          {{$t('on the map')}}
        </v-btn>
      </div>
    </div>

    <div
      class="mx-sm-4 d-flex flex-column flex-sm-row align-center justify-sm-space-between"
    >
      <div class="mb-5 mx-sm-0 mx-4 text-sm-start text-center">
        <h1>
          {{ place.name }}
        </h1>

        <v-card
        v-if="place.location"
        class="location text-caption grey--text text-lighten-2"
        elevation="0">
          <v-icon small>place</v-icon>
          {{place.location.address.city}}, {{place.location.address.countryName}}
        </v-card>

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
          <v-icon left>
            edit
          </v-icon>
          {{ $t("edit") }}
        </v-btn>

      <v-menu 
      class="contact-infos"
      v-if="Object.keys(place.contact_infos).length"
      rounded="xl" 
      bottom
      left
      close-on-click=""
      offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="placeAction rounded-lg mb-4 ml-sm-4"
          >
            <v-icon class="mr-2">mail</v-icon>
            {{ $t("contact") | capitalize }}
          </v-btn>
        </template>
        <v-list>
          <div class="d-flex flex-wrap justify-center">
            <v-btn
              v-if="place.contact_infos.facebook"
              rounded
              :href="place.contact_infos.facebook"
              target="_blank"
              color="#4267B2"
              dark
              class="ma-2"
            >
              <v-icon left>facebook</v-icon>
              Facebook
            </v-btn>
            <v-btn
              v-if="place.contact_infos.instagram"
              rounded
              :href="place.contact_infos.instagram"
              target="_blank"
              color="purple"
              dark
              class="ma-2"
            >
              <v-icon left>camera</v-icon>
              Instagram
            </v-btn>
            <v-btn
              v-if="place.contact_infos.youtube"
              rounded
              :href="place.contact_infos.youtube"
              target="_blank"
              color="#ea0000"
              dark
              class="ma-2"
            >
              <v-icon left>play_arrow</v-icon>
              Youtube
            </v-btn>
            <v-btn
              v-if="place.contact_infos.email"
              rounded
              @click="show_email = true"
              color="grey darken-2"
              dark
              class="ma-2 pr-3"
            >
              <v-icon left>email</v-icon>
              Email
            </v-btn>
          </div>
          </v-list>
        </v-menu>

        <v-dialog v-model="show_email" width="unset">
          <v-card class="pa-8 selectable-text">
            <v-icon>email</v-icon>
            <span class="ml-2 selectable-text">
              {{ place.contact_infos.email }}
            </span>
          </v-card>
        </v-dialog>

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

          <v-list v-click-outside="flap">
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

    var show_email = ref(false)

  const flap = () =>{
    console.log('yop')
  }

    return {
      morePlaceActions,
      show_email,
      flap
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
    z-index: 2;
  }
}

</style>
