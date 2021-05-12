<template>
  <div>
    <div class="text-h5 font-weight-bold ml-sm-12 ml-4 mb-1">
      {{ title }}
      <v-btn small text class="px-2" color="grey" v-if="all" :to="all">
        {{ $t("see all") }}
      </v-btn>
    </div>


    <!-- <v-slide-group
      class="slide-group mb-5"
      :show-arrows="$vuetify.breakpoint.name == 'xs' ? false : 'always'"
    > -->
    <swiper ref="mySwiperRef" class="swiper px-8 d-flex align-center" :options="swiperOption">
      <loading-circle v-if="loading" small />

      <div v-else-if="!items.length" class="no-item">
        {{ empty }}
      </div>

      <swiper-slide v-else v-for="item in items" :key="item.id">
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
      </swiper-slide>
    <div 
    v-if="show_previous && $vuetify.breakpoint.name !== 'xs'"
    class="mx-1 swiper-button-prev" 
    @click="previous" 
    slot="button-prev"
    >
      <v-btn elevation="2" class="pr-1" small fab color="white" >
        <v-icon x-large color="#398242">navigate_before</v-icon>
      </v-btn>
    </div>
    <div 
    v-if="show_next && $vuetify.breakpoint.name !== 'xs'"
    class="mx-1 swiper-button-next" 
    @click="next" 
    slot="button-next"
    >
      <v-btn elevation="2" class="pl-1" small fab color="white" >
        <v-icon x-large color="#398242">navigate_next</v-icon>
      </v-btn>
    </div>
    <!-- </v-slide-group> -->
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "@vue/composition-api";
import ProjectCard from "@c/molecules/project/ProjectCard.vue";
import EventCard from "@c/molecules/event/EventCard.vue";
import NoteCard from "@c/molecules/note/NoteCard.vue";
import PlaceCard from "@c/molecules/place/PlaceCard.vue";

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default defineComponent({
  name: "NetSlide",

  components: {
    ProjectCard,
    PlaceCard,
    EventCard,
    NoteCard,
    Swiper,
    SwiperSlide,
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
    all: String
  },

  setup(props, {refs}) {

    const swiperOption = {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    interface Swiper{
      $swiper: {
        isBeginning:boolean, 
        isEnd:boolean,
        slidePrev: ()=>{},
        slideNext: ()=>{}
      }
    }

    var show_previous = ref(false)
    var show_next = ref(false)

    const checkArrows = ()=>{
      setTimeout(()=>{
        show_previous.value = !(refs.mySwiperRef as Vue & Swiper).$swiper.isBeginning
        show_next.value = !(refs.mySwiperRef as Vue & Swiper).$swiper.isEnd
      },100)
    }


    watch(() => props.items, (newValue:any) => {
      checkArrows()
    }, {deep:false});



    const previous = () => {
      (refs.mySwiperRef as Vue & Swiper).$swiper.slidePrev()
      checkArrows()
    }

    const next = () => {
      (refs.mySwiperRef as Vue & Swiper).$swiper.slideNext()
      checkArrows()
    }

    return {
      swiperOption,
      previous,
      next,
      show_previous,
      show_next
    };
  }
});
</script>

<style scoped>

	.swiper-button-prev::after, .swiper-button-next::after{
	    display: none;
	}

.swiper-slide {
  width: min-content;
}

.swiper {
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
