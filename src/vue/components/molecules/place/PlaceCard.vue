<template>
  <div>
    <v-hover v-if="place" v-slot="{ hover }">
      <v-card
        :id="place.id"
        :elevation="hover ? 4 : 2"
        class="c-pointer pb-0 rounded-lg"
        width="180"
        height="212px"
        @click="$router.push('/place/' + place.id)"
      >
        <v-img :lazy-src="image.low_medium" :src="image.medium" height="100px">


          <v-card
          v-if="place.location"
          class="location text-truncate grey--text text--lighten-2 text-caption px-1"
          color="#00000063"
          max-width="165px">
            <v-icon color="white" small>place</v-icon>
            {{place.location.address.city}}, {{place.location.address.countryName}}
          </v-card>

          <template v-slot:placeholder>
            <v-row
              class="image_placeholder fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>

          <!-- <v-btn class="favorite-btn" icon>
            <v-icon color="white" @click.stop="addFavorite">star</v-icon>
          </v-btn> -->
        </v-img>

        <v-hover v-slot="{ hover }">
          <v-card-title
            style="line-height:17px"
            class="px-3 pt-2 pb-0 mb-1 text-subtitle-1 font-weight-bold"
            :class="hover ? 'text-decoration-underline' : ''"
          >
            <v-clamp autoresize :max-lines="2">
              {{ place.name }}
            </v-clamp>
          </v-card-title>
        </v-hover>

        <v-card-text class="mx-1 px-2 py-0">
          <div class="text-caption" style="line-height:15px">
            {{ $tc("count.currentProjects", place.projects_count, { n: place.projects_count }) | capitalize}}
          </div>
          <div class="text-caption" style="line-height:15px">
            {{ $tc("count.incomingEvents", place.events_count, { n: place.events_count }) | capitalize}}
          </div>
        </v-card-text>

        <tags-in-card :tags="place.tags" />
      </v-card>
    </v-hover>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "@vue/composition-api";
import {
  isMobile,
  windowWidth
} from "@/ts/functions/composition/displayHelpers";
import PlaceModel from "@/ts/models/placeClass";
import ImageModel from "@/ts/models/imageClass";
import TagsInCard from "@c/molecules/card/TagsInCard.vue";

export default defineComponent({
  name: "PlaceCard",

  components: {
    TagsInCard
  },

  props: {
    place: {
      type: PlaceModel,
      default: {}
    }
  },

  setup(props: any, { root }: any) {
    const winWidth = windowWidth(root);

    const mobile = isMobile(root);

    var image: any = computed(() => {
      if (props.place && props.place.image) {
        return props.place.image;
      } else {
        return new ImageModel();
      }
    });

    return {
      winWidth,
      mobile,
      image
    };
  }
});
</script>

<style scoped>
.image {
  border-radius: 5px 5px 0 0;
  object-fit: cover;
}

.location{
  position: absolute;
  bottom: 4px;
  left: 3px;
}
</style>
