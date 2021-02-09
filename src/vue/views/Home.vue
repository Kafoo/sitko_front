<template>
  <div 
  class="mt-8"
  style="max-width:800px; margin:auto">

    <welcoming class="mb-8 mx-3"/>

    <div v-if="user">
      <v-divider></v-divider>

      <net-slide 
      title="Tous les lieux"
      empty="Aucun lieu"
      type="place" 
      :items="places" 
      :loading="loading_all_places" 
      class="mt-8"/>
      <net-slide 
      title="Tous les projets"
      empty="Aucun projet"
      type="project" 
      :items="projects" 
      :loading="loading_all_projects"/>
      <net-slide 
      title="Tous les événements"
      empty="Aucun événement"
      type="event" 
      :items="[]" 
      :loading="loading_all_projects"/>
    </div>

  </div>
</template>


<script lang="ts">

import { defineComponent, ref, onMounted } from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import NetSlide from "@c/organisms/app/NetSlide.vue"
import Welcoming from "@c/organisms/home/Welcoming.vue"

export default defineComponent({

  name: "Home",

  components: {
    PrimaryContentBody,
    NetSlide,
    Welcoming
  },

  setup() {

    var loading_all_projects = ref(false)
    var loading_all_places = ref(false)

    const { GET_ALL_PROJECTS } = useActions({GET_ALL_PROJECTS: 'project/GET_ALL_PROJECTS'} as any)
    const { GET_ALL_PLACES } = useActions({GET_ALL_PLACES: 'place/GET_ALL_PLACES'} as any)
    const { projects } = useGetters({projects: 'project/projects'} as any)
    const { user } = useGetters({user: 'auth/user'} as any)
    const { places } = useGetters({places: 'place/places'} as any)

    onMounted(() => {
    loading_all_projects.value = true;
    loading_all_places.value = true;
    GET_ALL_PROJECTS().then(() => {
      loading_all_projects.value = false;
    });
    GET_ALL_PLACES().then(() => {
      loading_all_places.value = false;
    });
    })

    return{
      loading_all_projects,
      loading_all_places,
      projects,
      places,
      user
    }

  }
});
</script>
