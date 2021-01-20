<template>
  <div>

    <!-- Top bar -->
    <v-app-bar height="60px">
      <v-toolbar-title>
        <v-app-bar-nav-icon
          @click="$router.push('/').catch(() => {})"
        >
          <v-img
            class="shrink mr-2"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="55"
          />
        </v-app-bar-nav-icon>
        <router-link 
        to="/" 
        tag="span" 
        style="cursor: pointer"
        class="font-weight-bold">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>

      <!-- Locale Change -->
      <select 
      class="locale-select" 
      v-model="$i18n.locale" 
      @change="changeLocale">
        <option 
        v-for="(locale, i) in locales" 
        :key="`Lang${i}`" 
        :value="locale">
        {{ locale }}
        </option>
      </select> 

      <v-spacer></v-spacer>

      <!-- Search -->
      <autocomplete 
      v-if="!loading"
      :search="search"
      class="mr-3 hidden-xs-only">
      </autocomplete>

      <v-btn 
      v-if="!loading"
      icon 
      fab
      class="hidden-sm-and-up mr-3">
        <v-icon 
        large>
          search
        </v-icon>
      </v-btn>

      <v-menu
      class="acccount-drawer"
      v-if="!loading"
      bottom
      left
      >
        <template v-slot:activator="{ on, attrs }">

          <v-btn
          height="40px"
          rounded
          class="mr-sm-3 px-2"
          v-bind="attrs"
          v-on="on">
        

            <v-icon class="mr-1">menu</v-icon> 

            <tiny-avatar 
            v-if="user && user.image"
            :image="user.image.thumb"/>

            <v-icon v-else large>face</v-icon>
          
          </v-btn>
            

        </template>

        <v-list>
          <v-list-item
          v-for="item in activeItems"
          :key="item.title"
          :to="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> 

    </v-app-bar>
  </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from "vuex";
import TinyAvatar from "@c/atoms/user/TinyAvatar.vue"

export default {
  data : () => {
    return {
      appTitle: "Sitko",
      locales: ["fr", "en"]
    };
  },

  components: {
    TinyAvatar
  },

  computed: {
    ...mapGetters("auth", ["user", "loading"]),

    activeItems(){
      if (this.user == undefined) {
        return this.topNavItems
      }else{
        return this.accountItems
      }
    },

    topNavItems() {
      return [
        {
          title: this.$options.filters.capitalize(this.$t("connection")),
          path: "/login",
          icon: "",
        },
        {
          title: this.$options.filters.capitalize(this.$t("register")),
          path: "/register",
          icon: "",
        }
      ];
    },

    accountItems() {
      return [
        {
          title: this.$options.filters.capitalize(this.$t("my places")),
          path: "/places/myplaces",
          icon: "",
        },
        {
          title: this.$options.filters.capitalize(this.$t("account")),
          path: "/account",
          icon: "",
        }
      ];
    }
  },

  watch: {
    $route(to) {
      document.title = to.meta.title || "Sitko";
    }
  },
  methods: {
    ...mapMutations("app", ["setLocale"]),
    changeLocale(){
      this.setLocale(this.$i18n.locale)
    },

    search(){
      return []
    }
  }
};
</script>

<style scoped>
.navItem {
  animation: slide-up 0.4s ease;
}
* .locale-select {
  border-radius: 5px;
  padding: 0 4px 0 2px;
  margin-left: 9px;
  cursor: pointer;
  font-size: 0.8em;
  text-align: center;
  -moz-text-align-last: center;
  text-align-last: center;
  color: #717171;
  font-style: italic;
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

.v-menu__content{
    top: 55px !important;
}

</style>
