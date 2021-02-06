<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :id="event.id"
      class="event ma-1"
      :elevation="hover ? 4 : 2"
      :class="{ 'on-hover': hover }"
    >
      <!-- HEAD -->
      <div class="d-flex event-main" @click="$emit('toogleExpand')">
        <v-card-title class="d-inline-block py-3 text-truncate">
          {{ event.title }}
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-actions>
          <v-btn icon @click.stop="$emit('openEdit', index)">
            <v-icon>create</v-icon>
          </v-btn>

          <v-btn icon @click.stop="deleting = true">
            <v-icon>delete</v-icon>
          </v-btn>
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
            <v-chip-group>
              <tag-chip
                v-for="tag in event.tags"
                :key="tag.id"
                :tag="tag"
                noselect
              />
            </v-chip-group>

            <div class="d-flex flex-column-reverse align-start flex-sm-row">
              <v-img
                v-if="event.image"
                class="image mr-sm-3 mb-sm-3 mt-sm-0 mt-3 flex-grow-0"
                :lazy-src="event.image.low_medium"
                :src="event.image.medium"
                @click="$emit('toogleImage', event.image)"
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

              <v-divider
                v-if="event.image"
                class="hidden-xs-only mr-2"
                vertical
              ></v-divider>

              <div class="flex-grow-1">
                <div class="d-flex flex-wrap">
                  <v-chip-group column>
                    <v-tooltip
                      v-for="caldate in event.caldates"
                      :key="caldate.id"
                      bottom
                    >
                      <template v-slot:activator="{ on }">
                        <v-chip class="c-default pa-2 mt-0" v-on="on">
                          <v-icon v-if="caldate.singleDate">today</v-icon>
                          <v-icon v-else>date_range</v-icon>
                        </v-chip>
                      </template>
                      <span>{{ caldate.chip }}</span>
                    </v-tooltip>
                  </v-chip-group>
                </div>

                <v-clamp autoresize :max-lines="10" class="description">
                </v-clamp>
                <span width="100%" style="white-space: pre-wrap;">{{
                  event.description
                }}</span>
              </div>
            </div>
          </v-card-text>
        </div>
      </v-expand-transition>

      <!-- CONFIRM DELETION -->
      <v-dialog v-model="deleting" width="500">
        <v-card class="pt-7 pb-3">
          <v-card-text class="text-h6">
            {{ $t("This event will be removed definitely") }}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="deleting = false">
              {{ $t("confirm.cancel") }}
            </v-btn>
            <v-btn color="red" text @click="$emit('deleteEvent', event.id)">
              {{ $t("delete") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-hover>
</template>

<script>
import VClamp from "vue-clamp";
import TagChip from "@c/atoms/tag/TagChip.vue";

export default {
  name: "CardEvent",
  components: {
    VClamp,
    TagChip
  },
  props: {
    event: Object,
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
  max-width: 60%;
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
  }
}

.type {
  font-style: italic;
  font-size: 0.8em;
}

.event-main {
  cursor: pointer;
}
</style>
