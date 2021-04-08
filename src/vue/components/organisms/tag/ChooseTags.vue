<template>
  <v-card class="pa-5">
    <v-row justify="center" dense>
      <v-card class="pa-3 mb-5 mt-1 rounded-lg" elevation="0" width="100%">
        <v-row dense class="mb-2">
          <v-col cols="12" sm="4">
            <v-select
              :items="categories"
              item-text="name"
              item-value="name"
              :label="$t('category') | capitalize"
              outlined
              return-object
              hide-details
              v-model="activeCategory"
            >
              <template slot="item" slot-scope="data">
                <v-icon class="mr-2">{{ data.item.icon }}</v-icon>
                {{ data.item.name }}
              </template>
            </v-select>
          </v-col>

          <v-col cols="9" sm="6">
            <v-text-field
              :label="($t('search') + `/` + $t('create')) | capitalize"
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
              min-width="0"
              color="#4caf50"
              @click="createTag"
              height="54px"
            >
              <v-icon x-large>add</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <div class="text-center overflow-y-auto" style="height:150px">
          <loading-circle v-if="loading_allTags" small />
          <tag-chip
            v-for="(tag, index) in filteredTags"
            :key="index"
            :tag="tag"
            @click="addTag(tag)"
            :selected="tag.selected"
          />
        </div>
      </v-card>
    </v-row>

    <v-card-actions>
      <v-spacer />
      <v-btn @click="cancel">
        {{ $t("confirm.cancel") }}
      </v-btn>
      <v-btn @click="confirm">
        {{ $t("confirm.confirm") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {
  defineComponent,
  onMounted,
  ref,
  watch,
  computed,
  onBeforeUnmount
} from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import TagModel from "@/ts/models/tagClass";
import TagsCategoryModel from "@/ts/models/tagsCategoryClass";
import TagChip from "@c/atoms/tag/TagChip.vue";
import CurrentTags from "@c/molecules/current/CurrentTags.vue";

export default defineComponent({
  name: "ChooseTags",

  components: {
    TagChip,
    CurrentTags
  },

  props: {
    tags: {
      type: Array as () => Array<TagModel>,
      default: () => []
    },
    label: {
      type: String,
      default: "Tags"
    }
  },

  setup(props, { root, emit }) {
    var activeCategory = ref({ name: undefined });

    var search = ref("");

    var compTags = ref<Array<TagModel>>(JSON.parse(JSON.stringify(props.tags)));

    var { GET_TAGS } = useActions({ GET_TAGS: "tag/GET_TAGS" } as any);
    var { tags } = useGetters({ tags: "tag/tags" } as any);

    var loading_allTags = ref(false);

    var allTags = ref([]);

    onMounted(() => {
      loading_allTags.value = true;
      GET_TAGS().then(() => {
        allTags.value = JSON.parse(JSON.stringify(tags.value));
        loading_allTags.value = false;
      });
    });

    var categories: any = computed(() => {
      var collection = [
        {
          name: root.$t("none"),
          icon: "radio_button_unchecked"
        }
      ];
      allTags.value.forEach((tag: TagModel) => {
        if (tag.category) {
          var category = tag.category;
          if (!collection.find(x => x.name === category.name)) {
            collection.push(category);
          }
        }
      });
      return collection;
    });

    var unselectedTags: any = computed(() => {
      allTags.value.forEach((tag: TagModel) => {
        compTags.value.forEach((compTag: TagModel) => {
          if (tag.id === compTag.id) {
            tag.selected = true;
          }
        });
      });
      return allTags.value;
    });

    var categorizedTags: any = computed(() => {
      if (activeCategory.value.name) {
        if (activeCategory.value === categories.value[0]) {
          return unselectedTags.value;
        } else {
          return unselectedTags.value.filter((tag: TagModel) => {
            if (tag.category) {
              return tag.category.name == activeCategory.value.name;
            } else {
              return false;
            }
          });
        }
      } else {
        return unselectedTags.value;
      }
    });

    var filteredTags: any = computed(() => {
      return categorizedTags.value
        .filter((tag: TagModel) => {
          return tag.title.match(search.value.toLowerCase());
        })
        .sort((a: TagModel, b: TagModel) => a.title.localeCompare(b.title));
    });

    const addTag = (tag: TagModel) => {
      if (tag.selected) {
        tag.selected = false;
        removeTag(tag);
      } else {
        tag.selected = true;
        compTags.value.push(tag);
      }
    };

    const createTag = () => {
      var category;
      if (activeCategory.value === categories.value[0]) {
        category = undefined;
      } else {
        category = activeCategory.value;
      }
      var newTag = new TagModel({
        title: search.value.toLowerCase(),
        custom: true,
        category: category
      });

      if (newTag && newTag.title) {
        var exists = allTags.value.find(
          (x: TagModel) =>
            x.title === newTag.title &&
            x.category?.name === newTag.category?.name
        );

        if (!exists) {
          addTag(newTag);
          confirm();
        } else {
          addTag(exists);
        }

        search.value = "";
      }
    };

    const removeTag = (tag: TagModel) => {
      var exists = compTags.value.find((x: TagModel) => x.id === tag.id);
      if (exists) {
        var index = compTags.value.indexOf(exists);
        compTags.value.splice(index, 1);
      }
    };

    const confirm = () => {
      emit("change", JSON.parse(JSON.stringify(compTags.value)));
      emit("close");
    };

    const cancel = () => {
      emit("close");
    };

    return {
      allTags,
      removeTag,
      loading_allTags,
      compTags,
      categories,
      activeCategory,
      search,
      filteredTags,
      addTag,
      confirm,
      cancel,
      createTag
    };
  }
});
</script>
