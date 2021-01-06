<template>
  <div>
    <div class="text-center">
      <create-button
        :item="$t('event')"
        @action="creating = true"
      />
    </div>

    <!-- Select Type -->
    <v-select
      :items="types"
      label="Type"
      outlined
      v-model="activeType"
    ></v-select>

    <!-- No Event -->
    <h4 v-if="!loading_events && !events.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("event") }) }} --
    </h4>

    <!-- No Active Event -->
    <h4
      v-else-if="!loading_events && !activeEvents.length"
      class="text-center"
    >
      -- {{ $t("data.empty_typed", { item: $t("event") }) }} --
    </h4>

    <!-- Loadings -->
    <div v-if="loading_events" class="d-flex flex-column">

      <skeleton-index/>

    </div>

    <!-- Index -->
    <div v-else>
      <transition-group
        class="events d-flex flex-column"
        name="list-complete"
        tag="p"
      >
        <div
          v-for="(event, index) in activeEvents"
          :key="event.id"
          class="list-complete-item"
        >
          <card-event
            :event="event"
            :index="index"
            :expanded="event.expanded"
            @toogleExpand="toogleExpand(event.id)"
            @openEdit="openEdit"
            @deleteEvent="SEND_EVENT_DELETION"
            @toogleImage="toogleImage"
          />
        </div>
      </transition-group>

      <!-- Creation -->
      <v-dialog v-model="creating" width="500">
        <create-event @closeCreation="closeCreation" />
      </v-dialog>

      <!-- Edition -->
      <v-dialog v-model="editing" width="500">
        <edit-event :propEvent="editionEvent" @closeEdit="closeEdit" />
      </v-dialog>

      <!-- Image Pop-up -->
      <v-dialog v-model="expand_image" width="90%">
        <image-popup :image="expanded_image" @toogleImage="toogleImage" />
      </v-dialog>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import EditEvent from "@c/organisms/event/EditEvent.vue";
import CreateEvent from "@c/organisms/event/CreateEvent.vue";
import CardEvent from "@c/molecules/event/CardEvent.vue";
import ImagePopup from "@c/organisms/app/ImagePopup.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import SkeletonIndex from "@c/molecules/event/SkeletonIndex.vue"

export default {
  name: "Events",

  components: {
    EditEvent,
    CreateEvent,
    CardEvent,
    ImagePopup,
    CreateButton,
    SkeletonIndex
  },

  data() {
    return {
      hash: null,
      place_id: this.$route.params.id,
      expand_image: false,
      expanded_image: {},
      editing: false,
      creating: false,
      activeType: "",
      editionEvent: {}
    };
  },

  mounted() {
    this.activeType = this.types[0];

    if (location.hash) {
      this.hash = location.hash;
    }
    location.hash = "";

    var data = {
      place_id: this.place_id,
      hash: this.hash
    };

    this.GET_PLACE_EVENTS(data);
  },

  watch: {
    //Slide to hashed event
    loading_events: function() {
      if (this.loading_events === false) {
        this.$nextTick(() => {
          if (this.hash) {
            var id = this.hash.slice(1);
            this.TOOGLE_EVENT_EXPAND(id);
            setTimeout(() => {
              document.getElementById(id).scrollIntoView({
                behavior: "smooth"
              });
            }, 300);
          }
        });
      }
    },

    //If locale changes, types change and so must activeType
    types() {
      this.activeType = this.types[0];
    }
  },

  computed: {
    ...mapGetters("event", ["loading_events", "events"]),

    types() {
      return [this.$t("all"), "public", "privé", "autre"];
    },

    activeEvents() {
      if (this.activeType === this.$t("all")) {
        return this.events;
      } else {
        return this.events.filter(event => {
          return event.type === this.activeType;
        });
      }
    }
  },

  methods: {
    ...mapActions("event", [
      "GET_PLACE_EVENTS",
      "SEND_EVENT_DELETION",
      "TOOGLE_EVENT_EXPAND"
    ]),
    ...mapMutations("event", ["closeExpands"]),

    openEdit(index) {
      this.editionEvent = this.events[index];
      this.editing = true;
    },

    closeEdit() {
      this.editing = false;
      this.editionEvent = {};
    },

    closeCreation() {
      this.creating = false;
    },

    toogleImage(img = {}) {
      this.expanded_image = img;
      this.expand_image = !this.expand_image;
    },

    toogleExpand(id = null) {
      this.TOOGLE_EVENT_EXPAND(id);
    }
  }
};
</script>

<style scoped>
.list-complete-item {
  transition: all 0.2s;
}
.list-complete-enter {
  opacity: 0;
  transform: translateX(-500px);
}
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(500px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
