<template>
  <div v-if="!loading_place" class="text-center">

    <h1 class="mb-3">
      {{ place.name }}

      <settings-button 
      :items="settingsItems"/>

    </h1>

    <img class="image" :src="place.image.medium" width="250px" />

    <h3 class="mt-6">{{ place.description }}</h3>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"
import { useGetters } from 'vuex-composition-helpers';
import SettingsButton from "@c/molecules/app/SettingsButton.vue"
import axios from "axios";

export default defineComponent({

  name : "Overview",

  components:{
    SettingsButton
  },

  setup() {

    const { place } = useGetters({place: 'place/place'} as any)
    const { loading_place } = useGetters({loading_place: 'place/loading_place'} as any)

    const settingsItems= ref([
      {
        title : 'Changer la photo',
        action : () => {console.log('yop')}
      },
      {
        title : 'Editer l\'introduction',
        action : () => {console.log('tak')}
      },
      {
        title : 'Editer la description',
        action : () => {console.log('flik')}
      },
    ])

    return{
      settingsItems,
      place,
      loading_place
    }

  }

});
</script>

<style scoped>
.image {
  border-radius: 4px;
  box-shadow: 0 0 5px black;
}
</style>
