<template>
  <div 
  v-if="place"
  style="max-width:1000px; margin:auto">

    <div class="d-flex flex-column flex-sm-row justify-center align-center mb-5">

        <medium-image 
        class="image mr-sm-5 flex-grow-0"
        :image="place.image"/>


      <div class="d-flex flex-column flex-wrap align-center align-sm-start">
        <h1 class="mt-2 mx-2 text-center">
          <v-btn icon fab small class="ml-1" :to="`/place/edit/${place.id}`">
            <v-icon>edit</v-icon>
          </v-btn>
          {{ place.name }}

        </h1>

      <div class="d-flex flex-column align-center">
        <v-btn
          v-for="(item, index) in placeNavItems"
          :key="index"
          :to="item.path"
          min-width="200px"
          class="my-2 mx-1"
        >
          <v-icon class="mr-3">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </div>



      </div>

    </div>

    <div class="mx-2">
      <current-tags :tags="place.tags" label="Tags du lieu" />
    </div>

    <div 
    class="description grey lighten-3 font-italic mx-0 my-3 ma-sm-5 pa-5 breakwrap"
    :class="$vuetify.breakpoint.name !== 'xs'?'rounded-xl':''">
      {{ place.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import { useGetters } from "vuex-composition-helpers";
import axios from "axios";
import CurrentTags from "@c/molecules/tag/CurrentTags.vue";
import PlaceModel from "@/ts/models/placeClass";
import MediumImage from "@c/molecules/media/MediumImage.vue"

export default defineComponent({
  name: "Overview",

  components: {
    CurrentTags,
    MediumImage
  },

  setup(props, { root }) {
    const { places } = useGetters({ places: "place/places" } as any);
    const place_id = parseInt(root.$route.params.id);
    var place = computed(() => {
      return places.value.find((x: PlaceModel) => x.id === place_id);
    });


    const placeNavItems = ref([
        {
          title: root.$options.filters!.capitalize(root.$t("calendar")),
          path: "/place/" + root.$route.params.id + "/calendar",
          icon: "event"
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
      ])


    return {
      place,
      placeNavItems
    };
  }
});
</script>

<style scoped>
.image {
  border-radius: 4px;
  box-shadow: 0 0 5px black;
  width: 250px;
}

@media (max-width: 600px) {
  .image {
    width: 100%;
    height: auto;
    max-height: 300px;
    border-radius: 0px;
    box-shadow: none;
  }
}
</style>
