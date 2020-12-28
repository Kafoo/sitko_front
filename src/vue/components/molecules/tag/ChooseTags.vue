<template>
  
  <div>
  
    <v-combobox
      v-model="compTags"
      :items="tags"
      item-text="title"
      item-value="title"
      label="Add Tag"
      outlined
      multiple
      hide-details
      hide-selected
      append-icon="false"
      return-object
      @change="updateTags"
      :loading="loading_tags? 'secondary' : false"
    ></v-combobox>

    <v-chip-group column>

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
  
  </div>

</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';

interface Tag {
  title:string
}

export default defineComponent({

  name : "ChooseTags",

  props:{
    propTags:{type:Array, default:[]}
  },

  setup(props, {emit}) {

    // TAGS //

    var compTags = ref<Array<Tag>>([])

    onMounted(() => {

      compTags.value = JSON.parse(JSON.stringify(props.propTags))

      GET_TAGS()
    })

    var { GET_TAGS } = useActions({GET_TAGS: 'tag/GET_TAGS'} as any)
    var { tags } = useGetters({tags: 'tag/tags'} as any)
    var { loading_tags } = useGetters({loading_tags: 'tag/loading'} as any)

    const updateTags = () => {
      compTags.value.forEach((tag:Tag,index:number) => {
        if (typeof tag == 'string') {
          compTags.value.splice(index, 1, {title:tag})
        }else{
          return tag
        }
      });
    }

    const removeTag = (index:number) => {
      props.propTags.splice(index, 1);
    }

    return{
      tags,
      removeTag,
      loading_tags,
      updateTags,
      compTags
    }

  }
});
</script>

<style scoped>



</style>
