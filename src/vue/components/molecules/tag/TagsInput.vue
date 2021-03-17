<template>
  <div>
    <current-tags
      :tags="compTags"
      :label="label"
      editable
      @removeTag="removeTag"
      @update="changeTags"
      draggable
      closable
      @edit="pickingTags = true"
    />

    <v-dialog v-model="pickingTags" width="90%" max-width="800px">
      <choose-tags
        v-if="pickingTags"
        :tags="compTags"
        @change="changeTags"
        :label="label"
        @close="pickingTags = false"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { defineComponent, onMounted, ref, watch } from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import TagModel from "@/ts/models/tagClass";
import ChooseTags from "@c/organisms/tag/ChooseTags.vue";
import TagChip from "@c/atoms/tag/TagChip.vue";
import CurrentTags from "@c/molecules/current/CurrentTags.vue";

export default defineComponent({
  name: "TagsInput",

  components: {
    ChooseTags,
    TagChip,
    CurrentTags
  },

  props: {
    tags: {
      type: Array as () => Array<TagModel>,
      default: []
    },
    label: {
      type: String,
      default: "Tags"
    }
  },

  setup(props, { emit }) {
    var pickingTags = ref(false);

    var compTags = ref<Array<TagModel>>([]);

    onMounted(() => {
      compTags.value = JSON.parse(JSON.stringify(props.tags));
    });

    watch(
      () => props.tags,
      newValue => {
        compTags.value = newValue;
      }
    );

    const changeTags = (tags: Array<TagModel>) => {
      emit("update", tags);
    };

    const removeTag = (index: number) => {
      compTags.value.splice(index, 1);
      emit("update", compTags);
    };

    return {
      removeTag,
      compTags,
      pickingTags,
      changeTags
    };
  }
});
</script>

<style scoped></style>
