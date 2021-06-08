<template>
  <v-app class="app">
    <access-code v-if="!confirmed_guest" />
    <!-- Error message -->
    <alert :class="confirmed_guest ? '' : 'blur'" />
    <!-- Navigation -->
    <navigation :class="confirmed_guest ? '' : 'blur'" />

    <!-- Content -->
    <v-main :class="confirmed_guest ? '' : 'blur'">
      <div v-if="loading" class="mt-5 d-flex justify-center">
        <loading-circle app />
      </div>

      <router-view v-else :key="$route.path"></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">

import { defineComponent, watch } from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';
import Navigation from "@c/organisms/app/Navigation.vue";
import Alert from "@c/molecules/app/Alert.vue";
import AccessCode from "./components/molecules/app/AccessCode.vue";
import useFetcher from '@/ts/functions/composition/useFetcher';
import IdleVue from 'idle-vue'
import { mapActions } from 'vuex';
import store from '@/ts/store';

export default defineComponent({

  name : "App",

  components: {
    Navigation,
    Alert,
    AccessCode
  },

  setup(props, {root}) {


    watch(() => store.state.idleVue.isIdle, (isIdle:any) => {
      if (isIdle) {
        SET_IDLE_USER(true)
      } else if(idle_user.value) {
        location.reload();
      }
    });

    watch(() => root.$route, (to:any) => {
      document.title = to.meta.title || "Sitko";
    });


    const { SET_IDLE_USER } = useActions({SET_IDLE_USER: 'app/SET_IDLE_USER'} as any)

    if (localStorage.getItem("authToken")) {
      var { entity: user, loading } = useFetcher("auth/GET_USER_DATA");
    }

    var lastUserRefresh = Date.now()

    const { confirmed_guest } = useGetters({confirmed_guest: 'app/confirmed_guest'} as any)
    const { idle_user } = useGetters({idle_user: 'app/idle_user'} as any)

    return{
      loading,
      confirmed_guest,
      idle_user
    }

  }
});
</script>

<style scoped>
.blur {
  filter: blur(5px);
}
</style>
