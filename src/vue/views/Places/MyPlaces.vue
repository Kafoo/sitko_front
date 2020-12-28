<template>
  <div>
    <div class="text-center">
      <v-btn
        large
        to="create"
        class="center mb-8 green lighten-1"
        justify="center"
        align="center"
      >
        {{ $t("actions.create", { item: $t("place") }) }}
      </v-btn>
    </div>

    <div v-if="loading_places" class="d-flex flex-wrap justify-center">
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
      <card-place v-for="place in places" :key="place.id" :place="place" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Getter, Action } from "vuex-class";
import { Component } from "vue-property-decorator";
import PlaceModel from "@/ts/models/placeClass";
import CardPlace from "@c/molecules/place/CardPlace.vue";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";

const namespace: string = "place";

@Component({
  name: "Places",

  components: {
    CardPlace,
    PrimaryContentBody
  }
})
export default class Places extends Vue {
  @Getter("places", { namespace }) places?: Array<PlaceModel>;
  @Getter("loading_places", { namespace }) loading_places!: Boolean;
  @Action("GET_PLACES", { namespace }) GET_PLACES: any;

  created() {
    this.GET_PLACES();
  }
}
</script>
