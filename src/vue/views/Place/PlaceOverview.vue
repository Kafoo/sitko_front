<template>
  <loading-circle v-if="loading_place" small />

  <div v-else-if="place" style="max-width:1000px; margin:auto">
    <place-header :place="place" />

    <current-tags
      class="mx-5 mb-5"
      :tags="place.tags"
      :label="$t('place tags') | capitalize"
    />

    <div
      class="description grey lighten-3 font-italic mx-0 my-5 mx-sm-5 pa-5 breakwrap"
      :class="$vuetify.breakpoint.name !== 'xs' ? 'rounded-xl' : ''"
    >
      {{ place.description }}
    </div>

    <current-notes
      class="mx-5 mb-5"
      :notes="notes"
      :loading="loading_notes"
      :label="$t('notes') | capitalize"
    />

    <div class="centering">
      <create-button
        :text="$t('actions.create.note')"
        @action="$router.push('/note/create/' + place.id)"
      />
    </div>

    <net-slide
      :title="$t('current projects') | capitalize"
      :all="`/place/` + place.id + `/projects`"
      :empty="$t('no current project') | capitalize"
      type="project"
      :items="projects | incoming"
      :loading="loading_projects"
      class="mb-7"
    />

    <net-slide
      :title="$t('incoming events') | capitalize"
      :all="`/place/` + place.id + `/events`"
      :empty="$t('no incoming event') | capitalize"
      type="event"
      :items="events | incoming"
      :loading="loading_events"
      class="mb-7"
    />

    <net-slide
      :title="$t('past projects') | capitalize"
      :all="`/place/` + place.id + `/projects`"
      :empty="$t('no project') | capitalize"
      type="project"
      :items="projects | past"
      :loading="loading_projects"
      class="mb-7"
    />

    <net-slide
      :title="$t('past events') | capitalize"
      :all="`/place/` + place.id + `/events`"
      :empty="$t('no event') | capitalize"
      type="event"
      :items="events | past"
      :loading="loading_events"
      class="mb-7"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  computed,
  onMounted
} from "@vue/composition-api";
import { useGetters } from "vuex-composition-helpers";
import axios from "axios";
import useFetcher from "@use/useFetcher";
import CurrentTags from "@c/molecules/current/CurrentTags.vue";
import CurrentNotes from "@c/molecules/current/CurrentNotes.vue";
import PlaceModel from "@/ts/models/placeClass";
import ProjectModel from "@/ts/models/projectClass";
import EventModel from "@/ts/models/eventClass";
import NetSlide from "@c/organisms/app/NetSlide.vue";
import PlaceHeader from "@c/organisms/place/PlaceHeader.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";

export default defineComponent({
  name: "PlaceOverview",

  props: {
    place: Object as () => PlaceModel,
    loading_place: Boolean
  },

  components: {
    CurrentTags,
    CurrentNotes,
    NetSlide,
    PlaceHeader,
    CreateButton
  },

  setup(props, { root }) {
    const { user } = useGetters({ user: "auth/user" } as any);
    const place_id = parseInt(root.$route.params.id);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    var { entity: projects, loading: loading_projects } = useFetcher(
      "project/GET_PROJECTS_BY_PLACE",
      place_id
    );
    var { entity: events, loading: loading_events } = useFetcher(
      "event/GET_EVENTS_BY_PLACE",
      place_id
    );
    var { entity: notes, loading: loading_notes } = useFetcher(
      "note/GET_NOTES_BY_PLACE",
      place_id
    );

    return {
      user,
      loading_projects,
      loading_events,
      loading_notes,
      projects,
      events,
      notes
    };
  }
});
</script>

<style scoped></style>
