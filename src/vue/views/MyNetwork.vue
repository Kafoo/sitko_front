<template>
  <primary-content-body>
    <div class="d-flex flex-column align-center">
      <page-title>{{ $t("my network") | capitalize }}</page-title>

      <v-select
      v-model="selectedSubject"
      solo
      return-object
      item-text="name"
      :items="networkSubjects" />

      <v-tabs class="mb-5" no-animation v-model="tab" centered>
        <v-tab>{{ $t("users") }}</v-tab>
        <v-tab>{{ $t("places") }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :transition="false" :reverse-transition="false">
          <div
            style="min-height:100px; min-width:100px"
            class="d-flex flex-wrap justify-center"
          >
            <loading-circle v-if="loading_users" small />

            <user-card
              v-else-if="!!users.length"
              v-for="user in users"
              :key="user.id"
              :user="user"
              class="ma-3"
            />

            <div v-else class="ma-5">
              -- {{ $t("You are linked to no user") }} --
            </div>
          </div>
        </v-tab-item>
        <v-tab-item :transition="false" :reverse-transition="false">
          <div class="d-flex flex-wrap justify-center"
            style="min-height:100px; min-width:100px">
            <loading-circle v-if="loading_places" small />

            <place-card
              v-else-if="!!places.length"
              v-for="place in places"
              :key="place.id"
              :place="place"
              class="ma-3"
            />

            <div v-else class="ma-5">
              -- {{ $t("You are linked to no place") }} --
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </primary-content-body>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "@vue/composition-api";
import useFetcher from "@/ts/functions/composition/useFetcher";
import PlaceCard from "../components/molecules/place/PlaceCard.vue";
import UserCard from "../components/molecules/card/UserCard.vue";
import { useGetters } from "vuex-composition-helpers";
import PlaceCreationVue from './Places/PlaceCreation.vue';
import PlaceModel from '@/ts/models/placeClass';

export default defineComponent({
  name: "MyNetwork",

  components: {
    PlaceCard,
    UserCard
  },

  setup() {
    var tab = ref(null);

    const { user } = useGetters({ user: "auth/user" } as any);

    var selectedSubject = ref(user.value)

    watch(() => selectedSubject.value, (newValue:any) => {
      console.log('yop')
    }, {deep:false});

    var { entity: userPlaces, loading: loading_userPlaces } = useFetcher(
      "place/GET_USER_PLACES"
    );

    var { entity: places, loading: loading_places } = useFetcher(
      "place/GET_LINKED_PLACES"
    );
    var { entity: users, loading: loading_users } = useFetcher(
      "user/GET_LINKED_USERS"
    );

    var networkSubjects:any = computed(() => {
      var array = [user.value]
      userPlaces.value?.forEach((place:PlaceModel) => {
        array.push(place)
      });
      return array
    })

    return {
      tab,
      places,
      loading_places,
      users,
      user,
      loading_users,
      networkSubjects,
      selectedSubject
    };
  }
});
</script>

<style scoped></style>
