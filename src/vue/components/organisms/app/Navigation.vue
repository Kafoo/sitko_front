<template>
  <div>
    <!-- Mobile drawer -->
    <v-navigation-drawer disable-resize-watcher v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          v-show="item.vshow"
        >
          <v-list-item-action> </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Top bar -->
    <v-app-bar>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <v-app-bar-nav-icon
          @click="$router.push('/').catch(() => {})"
          class="hidden-xs-only"
        >
          <v-img
            class="shrink mr-2"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="55"
          />
        </v-app-bar-nav-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-if="!loading">
        <v-btn
          class="navItem"
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          v-show="item.vshow"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <select class="flag-select" v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
          lang
        }}</option>
      </select>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      appTitle: "Sitko",
      drawer: false,
      langs: ["fr", "en"]
    };
  },

  computed: {
    ...mapGetters("auth", ["user", "loading"]),

    menuItems() {
      return [
        {
          title: this.$options.filters.capitalize(this.$t("my places")),
          path: "/places",
          icon: "",
          vshow: this.user
        },
        {
          title: this.$options.filters.capitalize(this.$t("explore")),
          path: "/explore",
          icon: "",
          vshow: true
        },
        {
          title: this.$options.filters.capitalize(this.$t("account")),
          path: "/account",
          icon: "",
          vshow: this.user
        },
        {
          title: this.$options.filters.capitalize(this.$t("connection")),
          path: "/login",
          icon: "",
          vshow: !this.user
        },
        {
          title: this.$options.filters.capitalize(this.$t("register")),
          path: "/register",
          icon: "",
          vshow: !this.user
        }
      ];
    }
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Sitko";
    }
  }
};
</script>

<style scoped>
.navItem {
  animation: slide-up 0.4s ease;
}
* .flag-select {
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
  border: 1px solid grey;
}

.flag-select option {
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
</style>
