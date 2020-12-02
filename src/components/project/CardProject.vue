<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :id="project.id"
      class="project ma-1"
      :elevation="hover ? 4 : 2"
      :class="{ 'on-hover': hover }"
    >
      <!-- HEAD -->
      <div class="d-flex project-main" @click="$emit('toogleExpand')">
        <v-card-title class="d-inline-block py-3 text-truncate">
          <v-chip
            class="type hidden-xs-only white--text rounded-lg"
            :class="project.color"
          >
            {{ project.type }}
          </v-chip>
          {{ project.title }}
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
            <div class="d-flex flex-column-reverse align-start flex-sm-row">
              <v-img
                v-if="project.image"
                class="image mr-sm-3 mb-sm-3 mt-sm-0 mt-3 flex-grow-0"
                :lazy-src="project.image.low_medium"
                :src="project.image.medium"
                @click="$emit('toogleImage', project.image)"
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
                v-if="project.image"
                class="hidden-xs-only mr-2"
                vertical
              ></v-divider>

              <div class="flex-grow-1">
                <div class="d-flex flex-wrap">
                  <v-chip
                    class="type hidden-sm-and-up white--text rounded-lg my-1 mr-2"
                    :class="project.color"
                  >
                    {{ project.type }}
                  </v-chip>

                  <v-chip-group column>
                    <v-tooltip
                      v-for="event in project.events"
                      :key="event.id"
                      bottom
                    >
                      <template v-slot:activator="{ on }">
                        <v-chip class="c-default pa-2 mt-0" v-on="on">
                          <v-icon v-if="event.singleDate">today</v-icon>
                          <v-icon v-else>date_range</v-icon>
                        </v-chip>
                      </template>
                      <span>{{ event.chip }}</span>
                    </v-tooltip>
                  </v-chip-group>
                </div>

                <v-clamp autoresize :max-lines="10" class="description">
                </v-clamp>
                <span width="100%" style="white-space: pre-wrap;">{{
                  project.description
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
            Ce projet sera définitivement supprimé
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="deleting = false">
              Annuler
            </v-btn>
            <v-btn color="red" text @click="$emit('deleteProject', project.id)">
              Supprimer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-hover>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  name: "CardProject",
  components: {
    VClamp
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

.project-main {
  cursor: pointer;
}
</style>
