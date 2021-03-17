<template>
  <div>
    <div class="text-h5 font-weight-bold ml-sm-15 ml-2 mb-1">
      {{ title }}
      <v-btn 
      small 
      text
      class="px-2"
      color="grey" 
      v-if="all" 
      :to="all">
        {{$t('see all')}}
      </v-btn>
    </div>

    <v-slide-group
      class="slide-group mb-5"
      :show-arrows="$vuetify.breakpoint.name == 'xs' ? false : 'always'"
    >
      <loading-circle v-if="loading" small />

      <div v-else-if="!items.length" class="no-item">
        {{ empty }}
      </div>

      <v-slide-item v-else v-for="item in items" :key="item.id">
        <project-card
          v-if="type == 'project'"
          class="ma-2"
          :project="item"
          :withPlace="withPlace"
        />

        <place-card v-else-if="type == 'place'" class="ma-2" :place="item" />

        <event-card
          v-else-if="type == 'event'"
          class="ma-2"
          :event="item"
          :withPlace="withPlace"
        />

        <note-card
          v-else-if="type == 'note'"
          class="ma-2"
          :note="item"
          :withPlace="withPlace"
        />
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ProjectCard from "@c/molecules/project/ProjectCard.vue";
import EventCard from "@c/molecules/event/EventCard.vue";
import NoteCard from "@c/molecules/note/NoteCard.vue";
import PlaceCard from "@c/molecules/place/PlaceCard.vue";

export default defineComponent({
  name: "NetSlide",

  components: {
    ProjectCard,
    PlaceCard,
    EventCard,
    NoteCard
  },

  props: {
    items: {
      type: Array,
      default: () => []
    },
    type: {
      type: String
    },
    title: {
      type: String
    },
    empty: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    withPlace: {
      type: Boolean,
      default: false
    },
    all:String
  },

  setup() {
    return {};
  }
});
</script>

<style scoped>
.v-slide-group {
  min-height: 268px;
}

.no-item {
  height: 20px;
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>
