<template>
  <div 
  class="mt-8"
  style="max-width:800px; margin:auto">

    <welcoming class="mb-8 mx-3"/>

    <div v-if="user">
      <v-divider></v-divider>

      <home-list />

    </div>

  </div>
</template>


<script lang="ts">

import { defineComponent, ref, onMounted } from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import Welcoming from "@c/organisms/home/Welcoming.vue"
import HomeList from "@c/organisms/home/HomeList.vue"

export default defineComponent({

  name: "Home",

  components: {
    PrimaryContentBody,
    Welcoming,
    HomeList
  },

  setup() {

    const { user } = useGetters({user: 'auth/user'} as any)

    return{
      user
    }

  }
});
</script>
