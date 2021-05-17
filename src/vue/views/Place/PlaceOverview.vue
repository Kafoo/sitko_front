<template>
  <loading-circle v-if="loading_place" small />

  <div v-else-if="place" style="max-width:1000px; margin:auto">
    <place-header :place="place" />

    <description v-if="place.description" :description="place.description"/>

    <div v-if="place.can.createEntity" class="centering mb-4 d-flex flex-wrap">
      <create-button
        class="mx-2"
        :text="$t('actions.create.note')"
        @action="$router.push('/note/create/' + place.id)"
      />
      <create-button
        class="mx-2"
        :text="$t('actions.create.project')"
        @action="$router.push('/project/create/' + place.id)"
      />
      <create-button
        class="mx-2"
        :text="$t('actions.create.event')"
        @action="$router.push('/event/create/' + place.id)"
      />
    </div>

    <current-tags
      class="mx-5 mb-8"
      :tags="place.tags"
      :label="$t('place tags') | capitalize"
    />

    <current-notes
      class="mx-5 mb-8"
      :notes="notes"
      :loading="loading_notes"
      :label="$t('notes') | capitalize"
    />

    <net-slide
      :title="$t('current projects') | capitalize"
      :all="`/place/` + place.id + `/projects`"
      :empty="$t('no current project') | capitalize"
      type="project"
      :items="projects | incoming"
      :loading="loading_projects"
      class="mb-9"
    />

    <net-slide
      :title="$t('incoming events') | capitalize"
      :all="`/place/` + place.id + `/events`"
      :empty="$t('no incoming event') | capitalize"
      type="event"
      :items="events | incoming"
      :loading="loading_events"
      class="mb-9"
    />

    <net-slide
      v-if="pastProjects && pastProjects.length"
      :title="$t('past projects') | capitalize"
      :all="`/place/` + place.id + `/projects`"
      :empty="$t('no project') | capitalize"
      type="project"
      :items="projects | past"
      :loading="loading_projects"
      class="mb-9"
    />

    <net-slide
      v-if="pastEvents && pastEvents.length"
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
  onMounted,
  watch
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
import description from '@/vue/components/molecules/text/description.vue';

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
    CreateButton,
    description
  },

  setup(props, { root }) {

    const { user } = useGetters({ user: "auth/user" } as any);
    const place_id = parseInt(root.$route.params.id);


    onMounted(() => {
      window.scrollTo(0, 0);
    });

    var { entity: projects, loading: loading_projects } = useFetcher(
      "project/GET_PROJECTS_BY_PLACE",
      {action_param:place_id}
    );
    var { entity: events, loading: loading_events } = useFetcher(
      "event/GET_EVENTS_BY_PLACE",
      {action_param:place_id}
    );
    var { entity: notes, loading: loading_notes } = useFetcher(
      "note/GET_NOTES_BY_PLACE",
      {action_param:place_id}
    );

    var pastProjects:any = computed(() => {     
      return root.$options.filters!.past(projects.value)
    })

    var pastEvents:any = computed(() => {     
      return root.$options.filters!.past(events.value)
    })

    return {
      user,
      loading_projects,
      loading_events,
      loading_notes,
      projects,
      events,
      notes,
      pastProjects,
      pastEvents
    };
  }
});
</script>

<style scoped></style>
