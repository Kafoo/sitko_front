<template>
<!-- TOTRANSLATE -->
  <v-card class="pa-5">

    <current-tags
      :tags="compTags"
      @removeTag="removeTag"
      :label="label"
      close
    />

    <v-row class="mt-5" dense>

      <v-col cols="12" sm="4">
        <v-select
          :items="categories"
          item-text="name"
          item-value="name"
          label="Category"
          outlined
          return-object
          hide-details
          v-model="activeCategory"
        ></v-select>
      </v-col>

      <v-col cols="9" sm="6">
        <v-text-field
          label="Search/create"
          outlined
          hide-details
          v-model="search"
          @keydown.enter="createTag"
          maxlength="20"
        ></v-text-field>
      </v-col>

      <v-col cols="3" sm="2">
        <v-btn
        width="100%"
        color="#4caf50"
        @click="createTag"
        height="54px"
        >
          <v-icon x-large>add</v-icon>
        </v-btn>
      </v-col>

    </v-row>

    <v-row justify="center" dense>
        
      <v-card
        class="pa-3 mb-3 mt-1 overflow-y-auto pill-scroll rounded-xl"
        width="100%"
        height="200"

      >

        <loading-circle v-if="loading_allTags" small/>
        <v-chip-group
        class="overflow-y-auto"
        column
        v-else>
          <tag-chip 
          v-for="(tag, index) in filteredTags"
          :key="index"
          :tag="tag"
          @click="addTag(tag)"
          />
        </v-chip-group>

      </v-card>

    </v-row>

    <v-card-actions>
      <v-spacer/>
      <v-btn @click="$emit('close')">
        Cancel
      </v-btn>
      <v-btn @click="confirm">
        Confirm
      </v-btn>
    </v-card-actions>

  </v-card>

</template>

<script lang="ts">

import Vue from "vue"
import { defineComponent, onMounted, ref, watch, computed } from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';
import TagModel from "@/ts/models/tagClass"
import TagsCategoryModel from "@/ts/models/tagsCategoryClass";
import TagChip from "@c/atoms/tag/TagChip.vue"
import CurrentTags from "@c/molecules/tag/CurrentTags.vue";
import LoadingCircle from "@c/atoms/app/LoadingCircle.vue";

export default defineComponent({

  name : "ChooseTags",

  components:{
    TagChip,
    CurrentTags,
    LoadingCircle
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
  },

  setup(props, { emit}) {

    var activeCategory = ref({name:"none"})

    var search = ref("")

    var compTags = ref<Array<TagModel>>([])

    onMounted(() => {

      compTags.value = JSON.parse(JSON.stringify(props.tags))
      GET_TAGS()
      GET_TAGS_CATEGORIES()
    })

    var { GET_TAGS } = useActions({GET_TAGS: 'tag/GET_TAGS'} as any)
    var { GET_TAGS_CATEGORIES } = useActions({GET_TAGS_CATEGORIES: 'tag/GET_TAGS_CATEGORIES'} as any)
    var { allTags } = useGetters({allTags: 'tag/tags'} as any)
    var { stored_categories } = useGetters({stored_categories: 'tag/categories'} as any)
    var { loading_allTags } = useGetters({loading_allTags: 'tag/loading'} as any)
    var { loading_categories } = useGetters({loading_categories: 'tag/loading_categories'} as any)

    var categories:any = computed(() => {
      var collection = [{name:"none"}]
      if (stored_categories) {  
        stored_categories.value.forEach((cat:TagsCategoryModel) => {
          collection.push(cat)
        });
      }
      return collection
    })

    var unselectedTags:any = computed(()=>{
        return allTags.value.filter((tag:TagModel) => {
          var isUnused = true
          compTags.value.forEach(compTag => {
            if (tag.id === compTag.id) {
              isUnused = false
            }
          });
          return isUnused

        });
    })

    var categorizedTags:any = computed(() => {
      if (activeCategory.value.name === "none") {
        return unselectedTags.value;
      } else {
        return unselectedTags.value.filter((tag:TagModel) => {
          if (tag.category) {
            return tag.category.name == activeCategory.value.name;
          }else{
            return false
          }
        });
      }
    })

    var filteredTags:any = computed(() => {
      return categorizedTags.value.filter((tag:TagModel) => {
          return tag.title.match(search.value);
      }).sort((a:TagModel, b:TagModel) => a.title.localeCompare(b.title))
    })

    const addTag = (tag:TagModel) => {
      compTags.value.push(tag)
    }

    const createTag = () => {
      var category
      if (activeCategory.value.name === "none") {
        category = undefined
      }else{
        category = activeCategory.value
      }
      var newTag = new TagModel({
            title: search.value.toLowerCase(),
            custom: true,
            category: category})
      compTags.value.push(newTag)
      search.value = ""
    }

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
      emit('update', compTags.value)
    }

    const removeTag = (index:number) => {
      compTags.value.splice(index, 1);
    }

    const confirm = () => {
      emit('change', compTags.value)
      emit('close')
    }

    return{
      allTags,
      removeTag,
      loading_allTags,
      compTags,
      categories,
      loading_categories,
      activeCategory,
      search,
      filteredTags,
      addTag,
      confirm,
      createTag,
    }

  }
});
</script>

