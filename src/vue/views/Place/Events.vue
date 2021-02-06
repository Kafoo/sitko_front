<template>
  <div>
    <div class="text-center">
      <create-button :item="$t('event')" @action="$router.push('/event/create/'+place_id)" />
    </div>

    <!-- No Event -->
    <h4 v-if="!loading && !events.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("event") }) }} --
    </h4>

    <!-- No Active Event -->
    <h4 v-else-if="!loading && !activeEvents.length" class="text-center">
      -- {{ $t("data.empty_typed", { item: $t("event") }) }} --
    </h4>

    <!-- Loadings -->
    <div v-if="loading" class="d-flex flex-column">
      <skeleton-index />
    </div>

    <!-- Index -->
    <div 
    v-else>
      <transition-group
        class="events d-flex justify-center flex-wrap"
        name="list-complete"
        tag="p"
      >
        <div
          v-for="event in activeEvents"
          :key="event.id"
          class="list-complete-item ma-2"
        >
          <event-card :event="event" />
        </div>
      </transition-group>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import EventCard from "@c/molecules/event/EventCard.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import SkeletonIndex from "@c/molecules/event/SkeletonIndex.vue";

export default {
  name: "Events",

  components: {
    EventCard,
    CreateButton,
    SkeletonIndex
  },

  data() {
    return {
      hash: null,
      place_id: this.$route.params.id,
      editing: false,
      creating: false,
      editionEvent: undefined,
      loading: false
    };
  },

  mounted() {
    this.loading = true;
    this.GET_EVENTS_BY_PLACE(this.place_id).then(() => {
      this.loading = false;
    });
  },

  computed: {
    ...mapGetters("event", ["events"]),

    activeEvents() {
      return this.events.filter(x => x.place_id == this.place_id);
    }
  },

  methods: {
    ...mapActions("event", ["GET_EVENTS_BY_PLACE"]),

  }
};
</script>

<style scoped>

.events::after {
  content: "";
  width: 472px;
}

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
