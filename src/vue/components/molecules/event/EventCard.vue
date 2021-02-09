<template>
  <div>
    <v-hover v-if="event" v-slot="{ hover }">
      <v-card
        v-if="event"
        :id="event.id"
        :elevation="hover ? 4 : 2"
        class="event-card c-pointer"
        width="220"
        height="252px"
        @click="$router.push('/event/' + event.id)"
      >
        <v-img
          :lazy-src="image.low_medium"
          :src="image.medium"
          height="130px"
        >

          <v-tooltip v-if="withPlace" right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
              class="ml-1 mt-1"
              v-on="on" 
              v-bind="attrs" 
              fab 
              icon 
              small 
              @click.stop="$router.push('/place/' + event.place_id )">
                <tiny-avatar class="place-image elevation-5" :image="event.place.image.thumb" />
              </v-btn>
            </template>
            <span>{{event.place.name}}</span>
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
            {{ event.title }}
          </v-card-title>
        </v-hover>

        <current-caldates
        class="px-3 ma-0 pb-0"
        :caldates="event.caldates"
        />

        <tags-in-card :tags="event.tags"/>

        <v-spacer></v-spacer>
      </v-card>
    </v-hover>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, computed } from "@vue/composition-api"
import EventModel from "@/ts/models/eventClass"
import CurrentCaldates from "@c/molecules/caldate/CurrentCaldates.vue"
import TinyAvatar from "@c/atoms/user/TinyAvatar.vue"
import ImageModel from "@/ts/models/imageClass"
import TagsInCard from "@c/molecules/card/TagsInCard.vue"

export default defineComponent({

  name : "EventCard",

  components: {
    TagsInCard,
    CurrentCaldates,
    TinyAvatar
  },

  props: {
    event: Object as () => EventModel,
    withPlace:{
      type:Boolean,
      default:false
    }
  },

  setup(props, context) {

    var deleting = ref(false)
    var color = ref("red")

    var image:any = computed(() => {
      if (props.event && props.event.image) {
        return props.event.image
      } else {
        return new ImageModel()
      }
    })

    const addFavorite = () => {
      //
    }

    return{
      deleting,
      color,
      addFavorite,
      image
    }

  }
});
</script>


<style scoped>

.place-image{
  border : 2px solid white
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
