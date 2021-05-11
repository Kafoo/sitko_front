<template>
  <loading-circle v-if="loading" small />

  <div v-else-if="event" style="max-width:1000px; margin:auto">
    <div class="d-flex justify-center">
      <medium-image class="image mr-sm-5 flex-grow-0" :image="event.image" />
    </div>

    <div
      class="mx-sm-4 mb-5 mt-2 d-flex flex-column flex-sm-row align-stretch justify-space-around"
    >
      <div class="mt-2 mb-5 d-flex flex-column align-center align-sm-start">
        <h1>
          {{ event.title }}
        </h1>

        <created-by :item="event" />

        <v-btn
          x-small
          text
          plain
          v-if="event.can.update"
          class="mb-2 pa-0"
          :to="`/event/${event.id}/edit`"
        >
          <v-icon small class="mr-1">edit</v-icon>
          {{ $t("options.edit") }}
        </v-btn>
        <place-chip :place="event.place" />
      </div>

      <div class="mt-4 mx-5">
        <current-caldates
          class="ml-1 mb-5"
          clickable
          :caldates="event.caldates"
          :label="$t('event dates') | capitalize"
          more
        />
      </div>
    </div>

    <div class="mx-5">
      <current-tags :tags="event.tags" :label="$t('event tags') | capitalize" />
    </div>

    <div
      class="description grey lighten-3 text-subtitle mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap"
      :class="$vuetify.breakpoint.name !== 'xs' ? 'rounded-xl' : ''"
    >
      {{ event.description }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed
} from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import EventModel from "@/ts/models/eventClass";
import CurrentTags from "@c/molecules/current/CurrentTags.vue";
import useFetcher from "@use/useFetcher";
import MediumImage from "@c/molecules/media/MediumImage.vue";
import CurrentCaldates from "@c/molecules/current/CurrentCaldates.vue";
import PlaceChip from "@c/atoms/place/PlaceChip.vue";
import CreatedBy from "@c/atoms/app/CreatedBy.vue";

export default defineComponent({
  name: "EventOverview",

  components: {
    CurrentTags,
    MediumImage,
    CurrentCaldates,
    PlaceChip,
    CreatedBy
  },

  setup(props, { root }) {
    const { user } = useGetters({ user: "auth/user" } as any);

    const event_id = parseInt(root.$route.params.id);
    var { entity: event, loading } = useFetcher("event/GET_EVENT", event_id);

    return {
      event,
      loading,
      user
    };
  }
});
</script>

<style scoped></style>
