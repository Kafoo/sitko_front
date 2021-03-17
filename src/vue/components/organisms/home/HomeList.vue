<template>
  <div>
    <net-slide
      :title="$t('every places') | capitalize"
      :empty="$t('no place') | capitalize"
      type="place"
      :items="places"
      :loading="loading_all_places"
      class="mt-8 mb-7"
    />
    <net-slide
      :title="$t('current projects') | capitalize"
      :empty="$t('no project') | capitalize"
      type="project"
      :items="projects"
      :loading="loading_all_projects"
      withPlace
      class="mb-7"
    />
    <net-slide
      :title="$t('incoming events') | capitalize"
      :empty="$t('no event') | capitalize"
      type="event"
      :items="events"
      :loading="loading_all_events"
      withPlace
      class="mb-7"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import NetSlide from "@c/organisms/app/NetSlide.vue";
import useFetcher from "@use/useFetcher";

export default defineComponent({
  name: "HomeList",

  components: {
    NetSlide
  },

  setup() {
  
    var { entity:projects, loading:loading_all_projects } = useFetcher("project/GET_INC_PROJECTS");
    var { entity:events, loading:loading_all_events } = useFetcher("event/GET_INC_EVENTS");
    var { entity:places, loading:loading_all_places } = useFetcher("place/GET_ALL_PLACES");

    return {
      loading_all_projects,
      loading_all_events,
      loading_all_places,
      projects,
      events,
      places
    };
  }
});
</script>

<style scoped></style>
