<template>
  <div style="position:relative">
    <v-card
      outlined
      class="tags-container px-3 pt-2 pb-1 d-flex flex-column align-center justify-center rounded-xl"
      :class="editable ? 'mb-4 pb-3' : ''"
      width="100%"
    >
      <div class="text-caption labelized noselect">{{ label }}</div>

      <span v-if="!tags.length" class="font-italic noselect"
        >-- {{$t('no tag yet') | capitalize}} --</span
      >
      <v-chip-group
        v-else
        :show-arrows="$vuetify.breakpoint.name !== 'xs'"
        style="width:100%"
      >
        <tag-chip
          v-for="(tag, index) in tags"
          :key="index"
          :close="close"
          noselect
          :tag="tag"
          @close="$emit('removeTag', index)"
        />
      </v-chip-group>
    </v-card>
    <v-btn
      small
      v-if="editable"
      elevation="1"
      min-width="0"
      class="pa-2 edit-icon"
      @click="$emit('edit')"
    >
      <v-icon small outlined class="mr-1">
        edit
      </v-icon>
      {{$t('options.edit')}}
    </v-btn>
  </div>
</template>

<script lang="ts">
import TagModel from "@/ts/models/tagClass";
import { defineComponent } from "@vue/composition-api";
import TagChip from "../../atoms/tag/TagChip.vue";

export default defineComponent({
  components: {
    TagChip
  },

  props: {
    tags: {
      type: Array as () => Array<TagModel>,
      default: () => []
    },
    label: {
      type: String,
      default: "Tags"
    },
    editable: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    }
  },

  name: "",

  setup() {
    return {};
  }
});
</script>

<style scoped>
::v-deep .edit-icon {
  position: absolute;
  bottom: -17px;
  left: 50%;
  transform: translate(-50%, 0%);
}

::v-deep .v-slide-group__content {
  justify-content: center;
}

.tags-container {
  border-color: #959595;
}

.labelized {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  top: -10px;
  padding: 0 7px;
  background-color: white;
}
</style>
