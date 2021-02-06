<template>
  <v-hover>
    <v-card
      class="ma-3"
      :width="winWidth < 500 ? '100%' : '170px'"
      slot-scope="{ hover }"
    >
      <!-- BODY -->
      <div class="card-body">
        <img
          :src="place.image.medium"
          class="image"
          width="100%"
          height="150px"
        />

        <v-card-title class="pt-0 pb-3">
          <span class="text-truncate">{{ place.name }}</span>
        </v-card-title>
      </div>

      <!-- EXPAND -->
      <v-expand-transition>
        <v-card
          v-if="hover"
          class="transition-fast-in-fast-out v-card--reveal c-pointer"
          style="height: 100%;"
          :to="winWidth > 500 ? '/place/' + place.id : ''"
        >
          <v-card-title
            class="pa-2 ma-0 body-2 grey lighten-2 font-weight-bold"
          >
            <v-clamp autoresize :max-lines="2" class="description">
              {{ place.name }}
            </v-clamp>
          </v-card-title>
          <v-card-text class="pt-3 pb-0">
            <div>
              <b>{{ $t("count.sitkers", { n: "0" }) }}</b>
            </div>
            <div>
              <i>
                {{ $t("count.currentProjects", { n: place.projects.length }) }}
              </i>
            </div>
            <div>
              <tiny-tag-chip
                v-for="(tag, index) in place.tags.slice(0, 3)"
                :key="index"
                :tag="tag"
              />

              <span v-if="place.tags.length > 3" style="font-size:0.8em">
                +{{ place.tags.length - 3 }} tag{{
                  place.tags.length - 3 > 1 ? "s" : ""
                }}
              </span>
            </div>
          </v-card-text>

          <!-- ACTIONS -->
          <div
            class="d-flex justify-end pa-2"
            style="position: absolute;bottom: 0;left: 0; width: 100%;"
          >
            <v-btn
              small
              text
              color="primary"
              :to="'/place/' + place.id "
            >
              {{ $t("enter") }}
            </v-btn>
            <v-btn small @click.prevent="true" icon class="mr-2">
              <v-icon color="red">exit_to_app</v-icon>
            </v-btn>
            <v-btn small @click.prevent="true" icon>
              <v-icon>star_outline</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
import {
  isMobile,
  windowWidth
} from "@/ts/functions/composition/displayHelpers";
import VClamp from "vue-clamp";
import TinyTagChip from "@c/atoms/tag/TinyTagChip.vue";
import PlaceModel from "@/ts/models/placeClass";

export default defineComponent({

  name: "PlaceCard",

  components: {
    VClamp,
    TinyTagChip
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
