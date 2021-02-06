<template>
  <div>
    <v-hover v-if="place" v-slot="{ hover }">
      <v-card
        :id="place.id"
        :elevation="hover ? 4 : 2"
        class="c-pointer"
        width="220"
        height="260px"
        @click="$router.push('/place/' + place.id)"
      >
        <v-img
          v-if="place.image"
          :lazy-src="place.image.low_medium"
          :src="place.image.medium"
          height="130px"
        >
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
            style="line-height:22px"
            class="px-3 pt-2 pb-1"
            :class="hover ? 'text-decoration-underline' : ''"
          >
            {{ place.name }}
          </v-card-title>
        </v-hover>

        <v-card-text class="mx-1 px-2">
            <div class="text-caption font-weight-bold" style="line-height:14px">
              {{ $t("count.sitkers", { n: "0" }) }}
            </div>
            <div class="text-caption font-italic">
              {{ $t("count.currentProjects", { n: place.projects.length }) }}
            </div>
          <div>
            <tag-chip
              tiny
              v-for="tag in place.tags.slice(0, 3)"
              :key="tag.id"
              :tag="tag"
              noselect
            />
            <span v-if="place.tags.length > 3" class="text-caption">
              +{{ place.tags.length - 3 }} tag{{
                place.tags.length - 3 > 1 ? "s" : ""
              }}
            </span>
          </div>
        </v-card-text>

        <v-spacer></v-spacer>
      </v-card>
    </v-hover>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
import {
  isMobile,
  windowWidth
} from "@/ts/functions/composition/displayHelpers";
import VClamp from "vue-clamp";
import TagChip from "@c/atoms/tag/TagChip.vue";
import PlaceModel from "@/ts/models/placeClass";

export default defineComponent({

  name: "PlaceCard",

  components: {
    VClamp,
    TagChip
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

    return { winWidth, mobile };
  }
});
</script>

<style scoped>
.image {
  border-radius: 5px 5px 0 0;
  object-fit: cover;
}
</style>
