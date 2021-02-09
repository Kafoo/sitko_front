<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :id="project.id"
      class="project mb-3"
      :elevation="hover ? 4 : 2"
      :class="{ 'on-hover': hover }"
    >
      <!-- HEAD -->
      <div
        class="d-flex flex-sm-row flex-column project-main"
        @click="$emit('toogleExpand')"
      >
        <v-hover v-slot="{ hover }">
          <v-img
            v-if="project.image"
            class="image flex-grow-0 ma-2"
            :class="`elevation-${hover ? 5 : 2}`"
            :lazy-src="project.image.low_medium"
            :src="project.image.medium"
            @click.stop="$emit('toogleImage', project.image)"
          >
            <template v-slot:placeholder>
              <v-row
                class="image_placeholder fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-hover>

        <div class="d-flex flex-column ma-1 mt-2" style="width:100%">
          <v-card-title style="line-height:26px" class="d-inline pa-0">
            {{ project.title }}
          </v-card-title>

          <div class="d-flex flex-wrap text-caption">
            <span
              class="breakwrap"
              v-for="(caldate, index) in project.caldates.slice(0, 2)"
              :key="caldate.id"
              ><!--
                -->{{ caldate.chip
              }}<!--
                --><span v-if="index == 0" class="breakwrap">, </span>
            </span>

            <span v-if="project.caldates.length > 2">
              ... +{{ project.caldates.length - 2 }} date{{
                project.caldates.length - 2 > 1 ? "s" : ""
              }}
            </span>
          </div>

          <div>
            <tag-chip
              tiny
              v-for="tag in project.tags.slice(0, 3)"
              :key="tag.id"
              :tag="tag"
              noselect
            />
            <span v-if="project.tags.length > 3" class="text-caption">
              +{{ project.tags.length - 3 }} tag{{
                project.tags.length - 3 > 1 ? "s" : ""
              }}
            </span>
          </div>
        </div>

        <v-spacer></v-spacer>

        <v-card-actions>
          <v-btn icon>
            <v-icon>{{ expanded ? "expand_less" : "expand_more" }}</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <!-- EXPAND -->
      <v-expand-transition>
        <div v-show="expanded" class="expand">
          <v-divider class="my-0"></v-divider>
          <v-card-text class="pt-2" min-height="200px">
            <div class="d-flex flex-column-reverse align-start flex-sm-row">
              <div class="flex-grow-1">
                <v-clamp autoresize :max-lines="10" class="description">
                </v-clamp>
                <span width="100%" style="white-space: pre-wrap;">{{
                  project.description
                }}</span>
              </div>
            </div>
          </v-card-text>

          <v-btn icon @click.stop="$emit('openEdit', index)">
            <v-icon>create</v-icon>
          </v-btn>

          <v-btn icon @click.stop="deleting = true">
            <v-icon>delete</v-icon>
          </v-btn>
        </div>
      </v-expand-transition>

      <!-- CONFIRM DELETION -->
      <v-dialog v-model="deleting" width="500">
        <v-card class="pt-7 pb-3">
          <v-card-text class="text-h6">
            {{ $t("This project will be removed definitely") }}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="deleting = false">
              {{ $t("confirm.cancel") }}
            </v-btn>
            <v-btn color="red" text @click="$emit('deleteProject', project.id)">
              {{ $t("delete") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-hover>
</template>

<script>
import TagChip from "@c/atoms/tag/TagChip.vue";

export default {
  name: "CardProject",
  components: {
    TagChip
  },
  props: {
    project: Object,
    index: Number,
    expanded: Boolean
  },
  data() {
    return {
      deleting: false,
      color: "red"
    };
  }
};
</script>

<style scoped>
.image {
  width: 120px;
  height: 120px;
  border-radius: 4px;
  cursor: pointer;
}

.image_placeholder {
  background-color: #e3e3e3;
}

@media (max-width: 600px) {
  .image {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 300px;
    margin: 0 !important;
  }
}

.type {
  font-style: italic;
  font-size: 0.8em;
}

.project-main {
  cursor: pointer;
}
</style>
