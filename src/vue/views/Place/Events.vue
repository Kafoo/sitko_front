<template>
  <loading-circle v-if="!place" small />
  <div v-else>
    <page-title>{{ $t("place events") | capitalize }}</page-title>

    <div v-if="place.can.createEntity" class="text-center">
      <create-button
        :text="$t('actions.create.event')"
        @action="$router.push('/event/create/' + place.id)"
      />
    </div>

    <!-- No Event -->
    <h4 v-if="!loading_events && !events.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("event") }) }} --
    </h4>

    <!-- No Active Event -->
    <h4 v-else-if="!loading_events && !events.length" class="text-center">
      -- {{ $t("data.empty_typed", { item: $t("event") }) }} --
    </h4>

    <!-- Loadings -->
    <div v-if="loading_events" class="events d-flex justify-center flex-wrap">
      <skeleton-index v-for="item in 6" v-bind:key="item" />
    </div>

    <!-- Index -->
    <div v-else>
      <transition-group
        class="events d-flex justify-center flex-wrap"
        name="list-complete"
        tag="p"
      >
        <div
          v-for="event in events"
          :key="event.id"
          class="list-complete-item ma-2"
        >
          <event-card class="mb-sm-2 mb-5" :event="event" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useGetters } from "vuex-composition-helpers";
import useFetcher from "@use/useFetcher";
import EventCard from "@c/molecules/event/EventCard.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import SkeletonIndex from "@c/molecules/event/SkeletonIndex.vue";
import PlaceModel from "@/ts/models/placeClass";

export default defineComponent({
  name: "Events",

  components: {
    EventCard,
    CreateButton,
    SkeletonIndex
  },

  props: {
    place: Object as () => PlaceModel
  },

  setup(props, { root }) {
    const { user } = useGetters({ user: "auth/user" } as any);

    var hash = ref(null);
    const place_id = parseInt(root.$route.params.id);

    var { entity: events, loading: loading_events } = useFetcher(
      "event/GET_EVENTS_BY_PLACE",
      {action_param:place_id}
    );

    return {
      events,
      loading_events,
      user
    };
  }
});
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
