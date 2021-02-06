<template>
  <div>
    <v-hover v-if="event" v-slot="{ hover }">
      <v-card
        :id="event.id"
        :elevation="hover ? 4 : 2"
        class="c-pointer"
        width="220"
        height="260px"
        @click="$router.push('/event/' + event.id)"
      >
        <v-img
          v-if="event.image"
          :lazy-src="event.image.low_medium"
          :src="event.image.medium"
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
            {{ event.title }}
          </v-card-title>
        </v-hover>

        <current-caldates
        class="px-3 ma-0 pb-0"
        :caldates="event.caldates"
        />

        <v-card-text class="px-2 py-1 pb-0">
          <div>
            <tag-chip
              tiny
              v-for="tag in event.tags.slice(0, 3)"
              :key="tag.id"
              :tag="tag"
              noselect
            />
            <span v-if="event.tags.length > 3" class="text-caption">
              +{{ event.tags.length - 3 }} tag{{
                event.tags.length - 3 > 1 ? "s" : ""
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

import { defineComponent, ref } from "@vue/composition-api"
import TagChip from "@c/atoms/tag/TagChip.vue";
import useEventGetter from "@use/useEventGetter";
import EventModel from "@/ts/models/eventClass"
import CurrentCaldates from "@c/molecules/caldate/CurrentCaldates.vue"

export default defineComponent({

  name : "EventCard",

  components: {
    TagChip,
    CurrentCaldates
  },

  props: {
    event: Object as () => EventModel
  },

  setup(props, context) {

    var deleting = ref(false)
    var color = ref("red")

    const addFavorite = () => {
      //
    }

    return{
      deleting,
      color,
      addFavorite
    }

  }
});
</script>


<style scoped>

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
