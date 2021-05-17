<template>
  <v-chip
    small
    class="tag-chip px-2 white--text"
    :class="[
      noselect ? 'noselect' : '',
      tiny ? 'tiny' : '',
      selected ? 'selected' : ''
    ]"
    :close="closable"
    @click:close="$emit('close')"
    @click="$emit('click')"
    :color="tag.color"
  >
    <div class="handle">
      <v-icon v-if="selected" small>
        done
      </v-icon>
      <v-icon v-else-if="tag.category" small>
        {{ tag.category.icon }}
      </v-icon>
      <v-icon v-else-if="!text" small>
        fiber_manual_record
      </v-icon>
      <span v-if="text" class="ml-1 chip-text">
        {{ tag.title }}
      </span>
    </div>
  </v-chip>
</template>

<script lang="ts">
import TagModel from "@/ts/models/tagClass";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TagChip",

  props: {
    tag: {
      type: Object as () => TagModel,
      default: undefined
    },
    closable: {
      type: Boolean,
      default: false
    },
    noselect: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    tiny: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: true
    }
  },

  setup() {
    return {};
  }
});
</script>

<style scoped>
.noselect.theme--light.v-chip:hover::before {
  opacity: 0;
}

.noselect.theme--light.v-chip--active:hover::before,
.noselect.theme--light.v-chip--active::before {
  opacity: 0;
}

.noselect {
  cursor: unset;
}

.tag-chip {
  margin: 3px;
  width: max-content;
}

.tag-chip.tiny {
  font-size: 0.7em !important;
  height: 22px !important;
  padding-left: 5px !important;
  padding-right: 5px !important;
  margin: 2px;
  margin-left: 0;
}

.tag-chip.selected {
  box-shadow: inset 0 0 20px 20px hsl(0deg 0% 100%);
  color: #353535 !important;
  border: 1px solid;
}
</style>
