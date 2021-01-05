<template>
  
  <div style="width:100%">
    
    <v-row justify="center" dense>
        

      <span  v-if="!compTags.length">No tag yet</span>
      <v-chip-group

      show-arrows
      v-else>
        
        <v-chip 
        v-for="(tag, index) in compTags"
        :key="index"
        class=" pa-2 mt-0"
        close
        @click:close="removeTag(index)"
        >
          {{tag.title}}
        </v-chip>

      </v-chip-group>

    
    </v-row>


    <v-row justify="center" dense>
      <!-- TOTRANSLATE -->
      <v-col cols="6">
        <v-combobox
          maxlength="20"
          @blur="search = ''"
          :search-input.sync="search"
          v-model="compTags"
          :items="tags"
          item-text="title"
          item-value="title"
          label="Add Tag"
          outlined
          multiple
          :menu-props="{closeOnContentClick: true}"
          hint="search & select, or create new ones"
          persistent-hint
          hide-selected
          append-icon="false"
          return-object
          @change="updateTags"
          :loading="loading_tags? 'secondary' : false"
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>

        <div id='blur'>
        </div>

      </v-col>
    </v-row>
  
  </div>

</template>

<script lang="ts">

import Vue from "vue"
import { defineComponent, onMounted, ref, watch } from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';
import TagModel from "@/ts/models/tagClass"

export default defineComponent({

  name : "ChooseTags",

  props:{
    propTags:{
      type:Array as () => Array<TagModel>, 
      default:()=>[]
    }
  },

  setup(props, {emit}) {


    var search = ref(null)

    var compTags = ref<Array<TagModel>>([])

    onMounted(() => {

      compTags.value = JSON.parse(JSON.stringify(props.propTags))

      GET_TAGS()
    })

    watch(() => props.propTags, (newValue) => {
      compTags.value = newValue
    });

    var { GET_TAGS } = useActions({GET_TAGS: 'tag/GET_TAGS'} as any)
    var { tags } = useGetters({tags: 'tag/tags'} as any)
    var { loading_tags } = useGetters({loading_tags: 'tag/loading'} as any)

    const updateTags = () => {
      document.getElementById('blur')!.click()
      compTags.value.forEach((tag:TagModel|String,index:number) => {
        if (typeof tag == 'string') {
          var newTag = {
            title:tag.toLowerCase(),
            custom: true
            }
          compTags.value.splice(index, 1, newTag)
          console.log(('yop'))
        }
      })
      emit('update', compTags)
    }

    const removeTag = (index:number) => {
      compTags.value.splice(index, 1);
    }

    return{
      tags,
      removeTag,
      loading_tags,
      updateTags,
      compTags,
      search
    }

  }
});
</script>

<style scoped>

::v-deep .v-select__selection { display:none }

</style>
