<template>
  
    <div style="width:100%;position:relative">
      <v-card 
      outlined 
      class="px-3 py-1 d-flex flex-column align-center justify-center inset-shadow rounded-xl"
      :class="editable?'mb-5 pb-5':''"
      width="100%"
      max-height="105px">

        <div class="text-h6">{{label}}</div>

        <!-- TOTRANSLATE -->
        <span  v-if="!tags.length" class="font-italic">-- Pas encore de tag --</span>
        <v-chip-group 
        v-else
        show-arrows="always" 
        style="width:100%">
          <tag-chip 
          v-for="(tag, index) in tags"
          :key="index"
          :close="close"
          :tag="tag"
          @close="$emit('removeTag', index)"
          />
        </v-chip-group>


      </v-card>
      <v-btn
      v-if="editable"
      elevation="1"
      min-width="0"
      class="pa-2 edit-icon"
      @click="$emit('edit')">
        <v-icon outlined>
          edit
        </v-icon>
        Modifier
      </v-btn>
    </div>

</template>

<script lang="ts">

import TagModel from "@/ts/models/tagClass";
import { defineComponent } from "@vue/composition-api"
import TagChip from "../../atoms/tag/TagChip.vue";


export default defineComponent({

  components:{
    TagChip
  },

  props:{
    tags:{
      type:Array as () => Array<TagModel>, 
      default:()=>[]
    },
    label:{
      type: String,
      default: "Tags"
    },
    editable:{
      type: Boolean,
      default: false
    },
    close:{
      type: Boolean,
      default: false
    },
  },

  name : "",

  setup() {


    return{
 
    }

  }
});
</script>

<style scoped>

::v-deep .edit-icon{
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translate(-50%, 0%);
}


</style>
