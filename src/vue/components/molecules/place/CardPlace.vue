<template>
  <v-hover>
    <v-card class="ma-3" width="170px" slot-scope="{ hover }">
      <!-- BODY -->
      <div class="card-body">
        <img
          :src="place.image.medium"
          class="image"
          width="170px"
          height="150px"
        />

        <v-card-title class="pt-0 pb-3">
          <span class="text-truncate">{{ place.name }}</span>
        </v-card-title>
      </div>

      <!-- EXPAND -->
      <v-expand-transition>
        <v-card
          v-if="hover"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <v-card-text class="pt-3 pb-0">
            <v-card-title class="pa-0 body-2">
              <v-clamp autoresize :max-lines="2" class="description">
                {{ place.name }}
              </v-clamp>
            </v-card-title>

            <v-chip-group column>
              <v-chip small class="c-default">
                <b>{{ $t("count.hearthlings", { n: "12" }) }}</b>
              </v-chip>
              <v-chip small class="c-default">
                {{ $t("count.currentProjects", { n: "6" }) }}
              </v-chip>
              <v-chip small class="c-default" color="blue lighten-2">
                {{ $t("count.tags", { n: "4" }) }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <!-- ACTIONS -->
          <v-card-actions style="position: absolute;bottom: 0;left: 0">
            <v-btn
              small
              text
              color="primary"
              :to="'/place/' + place.id + '/overview'"
            >
              {{ $t("enter") }}
            </v-btn>
            <v-btn small icon class="mr-2">
              <v-icon color="red">exit_to_app</v-icon>
            </v-btn>
            <v-btn small icon>
              <v-icon>info</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp
  },
  data() {
    return {};
  },
  props: {
    place: Object
  }
};
</script>

<style scoped>
.more_info {
  position: absolute;
  top: 5px;
  right: 5px;
}

.image {
  border-radius: 5px 5px 0 0;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
