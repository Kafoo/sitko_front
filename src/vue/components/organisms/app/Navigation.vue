<template>
  <div>
    <!-- Top bar -->
    <v-app-bar height="60px" app absolute>
      <v-toolbar-title>
        <v-app-bar-nav-icon @click="$router.push('/').catch(() => {})">
          <v-img
            class="shrink"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="45"
          />
        </v-app-bar-nav-icon>
        <span
          @click="$router.push('/').catch(() => {})"
          class="font-weight-bold c-pointer"
        >
          {{ appTitle }}
        </span>
      </v-toolbar-title>

      <!-- Locale Change -->
      <select
        class="locale-select"
        v-model="selected_locale"
        @change="changeLocale"
      >
        <option
          v-for="(locale, i) in locales"
          :key="`Lang${i}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>

      <v-spacer></v-spacer>

      <!-- Search -->
      <!-- <autocomplete
        v-if="!loading"
        :search="search"
        class="mr-3 hidden-xs-only"
      >
      </autocomplete>

      <v-btn v-if="!loading" icon fab class="hidden-sm-and-up mr-3">
        <v-icon large>
          search
        </v-icon>
      </v-btn> -->

      <v-btn v-if="!loading && user" icon to="/map">
        <v-icon>map</v-icon>
      </v-btn>

      <notifications v-if="!loading && user" class="mr-2" />

      <v-menu class="acccount-drawer" v-if="!loading" rounded="xl" bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn rounded class="mr-sm-3 pl-2 pr-0" v-bind="attrs" v-on="on">
            <v-icon class="mr-1">menu</v-icon>

            <tiny-avatar v-if="user && user.image" :image="user.image" />

            <v-icon v-else large>face</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="item in activeItems"
            :key="item.title"
            :to="item.path"
          >
            <v-list-item-title style="max-width:247px">
              <v-icon v-if="item.icon" left>
                {{ item.icon }}
              </v-icon>
              <span class="text-truncate">
                {{ item.title }}
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script lang="ts">

import { defineComponent, computed, watch, ref, Ref } from "@vue/composition-api"
import i18n from "@/ts/plugins/i18n.js";
import store from '@/ts/store';
import Notifications from "@c/molecules/notification/Notifications.vue";
import useFetcher from '@/ts/functions/composition/useFetcher';
import { useMutations, useActions } from 'vuex-composition-helpers';

export default defineComponent({

  name : "Navigation",

  components: {
    Notifications
  },

  setup(props, {root}) {

    var { entity: user, loading } = useFetcher("auth/GET_USER_DATA");

    const { setLocale } = useMutations({setLocale: "app/setLocale"} as any);
    const { SEND_USER_EDITION } = useActions({SEND_USER_EDITION: "auth/SEND_USER_EDITION"} as any);

    const appTitle = "Ositko"
    const locales = ["fr", "en"]
    var selected_locale = ref(i18n.locale)

    const topNavItems = [
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("connection")),
          path: "/login",
          icon: ""
        },
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("register")),
          path: "/register",
          icon: ""
        }
    ]

    var activeItems:Ref<Array<Object>> = computed(() => {
      if (user.value == undefined) {
        return topNavItems;
      } else {
        return accountItems.value;
      }
    })

    var accountItems:Ref<Array<Object>> = computed(() => {
      return [
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("my profil")),
          path: "/user/" + user.value.id,
          icon: "account_circle"
        },
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("my places")),
          path: "/places/myplaces",
          icon: "home"
        },
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("my network")),
          path: "/network",
          icon: "share"
        },
        {
          title: root.$options.filters!.capitalize(root.$i18n.t("settings")),
          path: "/settings",
          icon: "settings"
        }
      ];
    })

    const changeLocale = () => {

      var newUser = {...user.value}
      newUser.locale = selected_locale.value
      SEND_USER_EDITION(newUser).then(()=>{
        store.commit("app/setAlert", null);
        setLocale(selected_locale.value);
        root.$router.go(0);
      });
    }

    const search = () => {
      return [];
    }

    watch(() => computed, (newValue:any) => {
      //
    }, {deep:false});

    return{
      appTitle,
      locales,
      selected_locale,
      user,
      changeLocale,
      loading,
      activeItems
      
    }

  }
});
</script>

<style scoped>
.navItem {
  animation: slide-up 0.4s ease;
}
* .locale-select {
  border-radius: 5px;
  margin-left: 9px;
  cursor: pointer;
  font-size: 0.8em;
  text-align: center;
  -moz-text-align-last: center;
  text-align-last: center;
  color: #717171;
  font-style: italic;
  padding: 0 2px 0 0;
}

.locale-select option {
  cursor: pointer;
}


@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-menu__content {
  top: 55px !important;
  left: auto !important;
  right: 15px !important;
}
</style>
