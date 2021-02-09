<template>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-chip
          v-on="text?null:on"
          small
          class="tag-chip px-2 white--text"
          :class="[noselect ? 'noselect' : '', tiny ? 'tiny' : '']"
          :close="close"
          @click:close="$emit('close')"
          @click="$emit('click')"
          :color="tag.color"
        >
          <v-icon v-if="tag.category" small>
            {{ tag.category.icon }}
          </v-icon>
          <span v-if="text" class="ml-1">
            {{ tag.title }}
          </span>
        </v-chip>
      </template>
      <span>{{tag.title}}</span>
    </v-tooltip>

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
    close: {
      type: Boolean,
      default: false
    },
    noselect: {
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

.tag-chip{
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
</style>
