<template>
  <div>
    <page-title class="my-5" :title="$t('place notes') | capitalize" />
    <div v-if="user.place && user.place.id === place_id" class="text-center">
      <create-button
        :item="$t('note')"
        @action="$router.push('/note/create/' + place_id)"
      />
    </div>

    <!-- No Note -->
    <h4 v-if="!loading && !notes.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("note") }) }} --
    </h4>

    <!-- No Active Note -->
    <h4 v-else-if="!loading && !activeNotes.length" class="text-center">
      -- {{ $t("data.empty_typed", { item: $t("note") }) }} --
    </h4>

    <!-- Loadings -->
    <div v-if="loading" class="notes d-flex justify-center flex-wrap">
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
          v-for="note in activeNotes"
          :key="note.id"
          class="list-complete-item ma-2"
        >
          <note-card class="mb-sm-2 mb-5" :note="note" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import NoteCard from "@c/molecules/note/NoteCard.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import SkeletonIndex from "@c/molecules/note/SkeletonIndex.vue";
import PageTitle from "@c/atoms/app/PageTitle.vue";

export default {
  name: "Notes",

  components: {
    NoteCard,
    CreateButton,
    SkeletonIndex,
    PageTitle
  },

  data() {
    return {
      hash: null,
      place_id: parseInt(this.$route.params.id),
      editing: false,
      creating: false,
      editionNote: undefined,
      loading: false
    };
  },

  mounted() {
    this.loading = true;
    this.GET_NOTES_BY_PLACE(this.place_id).then(() => {
      this.loading = false;
    });
  },

  computed: {
    ...mapGetters("note", ["notes"]),
    ...mapGetters("auth", ["user"]),

    activeNotes() {
      return this.notes.filter(x => x.place_id == this.place_id);
    }
  },

  methods: {
    ...mapActions("note", ["GET_NOTES_BY_PLACE"])
  }
};
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
