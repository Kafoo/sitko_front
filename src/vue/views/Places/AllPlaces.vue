<template>
  <div>
    <page-title>{{ $t("all places") | capitalize }}</page-title>
    <div class="text-center">
      <create-button
        class="mb-8"
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
import Vue from "vue";
import { State, Getter, Action } from "vuex-class";
import { Component } from "vue-property-decorator";
import PlaceModel from "@/ts/models/placeClass";
import PlaceCard from "@c/molecules/place/PlaceCard.vue";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";

const namespace: string = "place";

@Component({
  name: "AllPlaces",

  components: {
    PlaceCard,
    PrimaryContentBody,
    CreateButton
  }
})
export default class Places extends Vue {
  @Getter("places", { namespace }) places?: Array<PlaceModel>;
  @Action("GET_ALL_PLACES", { namespace }) GET_ALL_PLACES: any;

  loading = false;

  created() {
    this.loading = true;
    this.GET_ALL_PLACES().then(() => {
      this.loading = false;
    });
  }
}
</script>
