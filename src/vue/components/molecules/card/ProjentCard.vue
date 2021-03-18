<template>
  <div>
    <v-hover v-if="projent" v-slot="{ hover }">
      <v-card
        v-if="projent"
        :id="projent.id"
        :elevation="hover ? 4 : 2"
        class="projent-card c-pointer"
        width="220"
        height="252px"
        @click="$router.push(projent.path)"
      >
        <v-img :lazy-src="image.low_medium" :src="image.medium" height="130px">
          <v-tooltip v-if="withPlace" right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ml-1 mt-1"
                v-on="on"
                v-bind="attrs"
                fab
                icon
                small
                @click.stop="$router.push('/place/' + projent.place_id)"
              >
                <tiny-avatar
                  class="place-image elevation-5"
                  :image="place_image.thumb"
                />
              </v-btn>
            </template>
            <span>{{ projent.place.name }}</span>
          </v-tooltip>

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
            {{ projent.title }}
          </v-card-title>
        </v-hover>

        <caldates-in-card class="px-3 ma-0 pb-0" :caldates="projent.caldates" />

        <tags-in-card :tags="projent.tags" />

        <v-spacer></v-spacer>
      </v-card>
    </v-hover>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import ProjectModel from "@/ts/models/projentClass";
import CaldatesInCard from "@c/molecules/caldate/CaldatesInCard.vue";
import TinyAvatar from "@c/atoms/user/TinyAvatar.vue";
import ImageModel from "@/ts/models/imageClass";
import TagsInCard from "@c/molecules/card/TagsInCard.vue";

export default defineComponent({
  name: "ProjentCard",

  components: {
    TagsInCard,
    CaldatesInCard,
    TinyAvatar
  },

  props: {
    type:String,
    projent: Object as () => ProjectModel,
    withPlace: {
      type: Boolean,
      default: false
    }
  },

  setup(props, context) {

    var image: any = computed(() => {
      if (props.projent && props.projent.image) {
        return props.projent.image;
      } else {
        return new ImageModel();
      }
    });

    var place_image

    if (props.projent && props.projent.place && props.projent.place.image) {
      place_image = props.projent.place.image
    }else{
      place_image = new ImageModel()
    }

    const addFavorite = () => {
      //
    };

    return {
      addFavorite,
      image,
      place_image
    };
  }
});
</script>

<style scoped>
.place-image {
  border: 2px solid white;
}

.image {
  width: 120px;
  height: 120px;
  border-radius: 4px;
  cursor: pointer;
}

.image_placeholder {
  background-color: #e3e3e3;
}
</style>
