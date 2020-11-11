<template>
  <div>
    
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

    <v-app-bar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <v-app-bar-nav-icon class="hidden-xs-only">
          <v-img
            alt="Vuetify Logo"
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
      menuItems: [
        { title: "Home",
          path: "/",
          icon: "",
          vshow: true },
        {
          title: "Calendrier",
          path: "/calendar",
          icon: "",
          vshow: this.user
        },
        {
          title: "Projects",
          path: "/projects",
          icon: "",
          vshow: this.user
        },
        {
          title: "Compte",
          path: "/account",
          icon: "",
          vshow: this.user
        },
        {
          title: "Login",
          path: "/login",
          icon: "",
          vshow: !this.user
        },
        {
          title: "Register",
          path: "/register",
          icon: "",
          vshow: !this.user
        }
      ]
    };
  },
  computed: {
    ...mapGetters("auth", ["user", "loading"]),
    ...mapGetters(["generalError"])
  },
  watch: {
    //Watching if user for showing nav items
    user: {
      handler(newVal) {
        this.menuItems.find(x => x.title === "Compte").vshow = newVal;
        this.menuItems.find(x => x.title === "Calendrier").vshow = newVal;
        this.menuItems.find(x => x.title === "Projects").vshow = newVal;
        this.menuItems.find(x => x.title === "Login").vshow = !newVal;
        this.menuItems.find(x => x.title === "Register").vshow = !newVal;
      }
    },
    $route(to) {
      document.title = to.meta.title || "Sitko";
    }
  }
};
</script>

<style>

.navItem {
  animation: slide-up 0.4s ease;
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