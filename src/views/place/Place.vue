<template>
  <div class="place d-flex pb-12">
    <div class="hidden-sm-and-down">
      <sidebar :subNavItems="subNavItems" />
    </div>

    <v-card
      class="ma-xs-0 ma-sm-5 pa-5 flex-grow-1 flex-shrink-10"
      :elevation="elevation"
      min-width="0"
    >
      <router-view></router-view>
    </v-card>

    <div class="hidden-md-and-up">
      <bottombar :subNavItems="subNavItems" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Sidebar from "@/components/app/Sidebar.vue";
import Bottombar from "@/components/app/Bottombar.vue";

export default {
  name: "Place",
  components: {
    Sidebar,
    Bottombar
  },
  data() {
    return {
      place_id: this.$route.params.id
    };
  },

  computed: {
    ...mapGetters("place", ["place"]),

    subNavItems(){
      return [
        {
          title: this.$t('home'),
          path: "/place/" + this.$route.params.id + "/overview",
          icon: "home"
        },
        {
          title: this.$t('calendar'),
          path: "/place/" + this.$route.params.id + "/calendar",
          icon: "event"
        },
        {
          title: this.$t('projects'),
          path: "/place/" + this.$route.params.id + "/projects",
          icon: "handyman"
        },
        {
          title: this.$t('events'),
          path: "/place/" + this.$route.params.id + "/events",
          icon: "star"
        },
        {
          title: this.$t('contact'),
          path: "/place/" + this.$route.params.id + "/contact",
          icon: "contact_support"
        }
      ]
    },

    elevation() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 0;
      }
      return 3;
    }
  },

  created() {
    this.getPlace(this.place_id);
  },

  methods: {
    ...mapActions("place", ["getPlace"])
  }
};
</script>

<style scoped></style>
