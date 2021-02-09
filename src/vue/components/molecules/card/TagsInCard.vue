<template>
  
  <div class="end mx-1 px-2 py-0 mb-2">
    <tag-chip
      class="flex-grow-0"
      tiny
      :text="false"
      v-for="tag in tags.slice(0, 5)"
      :key="tag.id"
      :tag="tag"
      noselect
    />
    <span v-if="tags.length > 5" class="text-caption">
      +{{ tags.length - 5 }} tag{{
        tags.length - 5 > 1 ? "s" : ""
      }}
    </span>
  </div>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"
import TagChip from "@c/atoms/tag/TagChip.vue";

export default defineComponent({

  name : "TagsInCard",

  components:{
    TagChip
  },

  props:{
    tags:Array
  },

  setup() {


    return{
 
    }

  }
});
</script>

<style scoped>



</style>
