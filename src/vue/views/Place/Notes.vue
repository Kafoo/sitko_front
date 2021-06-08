<template>
  <loading-circle v-if="!place" small />
  <div v-else>
    <page-title>{{ $t("place notes") | capitalize }}</page-title>
    <div v-if="place.can.createEntity" class="text-center">
      <create-button
        :text="$t('actions.create.note')"
        @action="$router.push('/note/create/' + place.id)"
      />
    </div>

    <!-- No Note -->
    <h4 v-if="!loading_notes && !notes.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("note") }) }} --
    </h4>

    <!-- No Active Note -->
    <h4 v-else-if="!loading_notes && !notes.length" class="text-center">
      -- {{ $t("data.empty_typed", { item: $t("note") }) }} --
    </h4>

    <!-- Loadings -->
    <div v-if="loading_notes" class="notes d-flex justify-center flex-wrap">
      <skeleton-index v-for="item in 6" v-bind:key="item" />
    </div>

    <!-- Index -->
    <div v-else>
      <transition-group
        class="notes d-flex justify-center flex-wrap"
        name="list-complete"
        tag="p"
      >
        <div
          v-for="note in notes"
          :key="note.id"
          class="list-complete-item ma-2"
        >
          <note-card class="mb-sm-2 mb-5" :note="note" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useGetters } from "vuex-composition-helpers";
import useFetcher from "@use/useFetcher";
import NoteCard from "@c/molecules/note/NoteCard.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import SkeletonIndex from "@c/molecules/note/SkeletonIndex.vue";
import PlaceModel from "@/ts/models/placeClass";

export default defineComponent({
  name: "Notes",

  components: {
    NoteCard,
    CreateButton,
    SkeletonIndex
  },

  props: {
    place: Object as () => PlaceModel
  },

  setup(props, { root }) {

    var hash = ref(null);
    const place_id = parseInt(root.$route.params.id);

    var { entity: notes, loading: loading_notes } = useFetcher(
      "note/GET_NOTES_BY_PLACE",
      {action_param:place_id}
    );

    return {
      notes,
      loading_notes
    };
  }
});
</script>

<style scoped>
.notes::after {
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
