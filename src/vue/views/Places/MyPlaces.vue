<template>
  <div>
    <div class="text-center">
      <page-title>{{ $t("my places") | capitalize }}</page-title>
      <create-button
        class="my-8"
        :text="$t('actions.create.place')"
        @action="$router.push('/place/create/')"
      />
    </div>

    <div v-if="loading" class="d-flex flex-wrap justify-center">
      <v-skeleton-loader
        type="card"
        class="ma-2"
        width="200px"
        height="200px"
        v-for="item in [1, 2, 3, 4, 5]"
        v-bind:key="item"
      ></v-skeleton-loader>
    </div>

    <div
      v-else-if="!places || !places.length"
      class="d-flex justify-center text-h6"
    >
      Vous n'avez pas encore créé de lieu
    </div>

    <div v-else class="d-flex flex-wrap justify-center">
      <place-card
        class="ma-2"
        v-for="place in places"
        :key="place.id"
        :place="place"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import PlaceCard from "@c/molecules/place/PlaceCard.vue";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import useFetcher from "@/ts/functions/composition/useFetcher";

export default defineComponent({
  name: "MyPlaces",

  components: {
    PlaceCard,
    PrimaryContentBody,
    CreateButton
  },

  setup() {
    var { entity: places, loading: loading } = useFetcher(
      "place/GET_USER_PLACES"
    );

    return {
      places,
      loading
    };
  }
});
</script>
