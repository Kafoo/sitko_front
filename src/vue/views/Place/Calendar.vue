<template>
  <div>
    <div
      v-if="loading_caldates"
      class="loading d-flex align-center justify-center"
    >
      <v-progress-circular
        indeterminate
        :size="100"
        color="grey lighten-5"
      ></v-progress-circular>
    </div>

    <v-row class="fill-height">
      <v-col>
        <v-sheet class="d-flex ma-4 mt-0">
          <div
            class="d-flex flex-wrap flex-md-nowrap flex-shrink-1"
            style="min-width: 0"
          >
            <div>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon>
                  mdi-chevron-left
                </v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
            </div>
            <v-toolbar-title v-if="$refs.calendar" class="mt-1 mr-3">
              {{ $refs.calendar.title }}
            </v-toolbar-title>

          </div>

          <v-spacer></v-spacer>

          <div class="d-flex flex-wrap flex-md-nowrap justify-end">
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mb-2"
                  outlined
                  color="grey darken-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>{{
                    $t("day") | capitalize
                  }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>{{
                    $t("week") | capitalize
                  }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>{{
                    $t("month") | capitalize
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-chip
              outlined
              color="blue"
              class="ml-4 ml-xs-0"
              @click="setToday"
            >
              {{ $t("today") | capitalize }}
            </v-chip>
          </div>
        </v-sheet>

        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :locale="$i18n.locale"
            :events="caldates"
            :event-color="getCaldateColor"
            :type="type"
            @click:event="showCaldate"
            @click:more="viewDay"
            @click:date="viewDay"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
            min-width="0"
          >
            <v-card color="grey lighten-4" max-width="400px" flat>
              <v-toolbar :color="selectedCaldate.color" dark>
                <v-toolbar-title v-html="selectedCaldate.name"></v-toolbar-title>
                <span class="ml-2 font-italic"
                  >({{ $t(selectedCaldate.type) }})</span
                >
              </v-toolbar>

              <v-card-text class="pb-0">
                <v-clamp autoresize :max-lines="5" class="description">
                  {{ selectedCaldate.description }}
                </v-clamp>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  color="primary"
                  @click="$router.push('projects#' + selectedCaldate.child_id)"
                >
                  + {{ $t("infos") }}
                </v-btn>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  {{ $t("confirm.close") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp
  },

  data() {
    return {
      place_id: this.$route.params.id,
      focus: "",
      type: "month",
      selectedCaldate: {},
      selectedElement: null,
      selectedOpen: false
    };
  },

  mounted() {
    //Force calendar to show month/year
    this.$refs.calendar.move(0);
  },

  created() {
    this.GET_EVENTS(this.place_id);
  },

  computed: {
    ...mapGetters("caldate", ["loading_caldates", "caldates"]),

    typeToLabel() {
      return {
        month: this.$options.filters.capitalize(this.$t("month")),
        week: this.$options.filters.capitalize(this.$t("week")),
        day: this.$options.filters.capitalize(this.$t("day"))
      };
    }
  },

  methods: {
    ...mapActions("caldate", ["GET_EVENTS"]),
    getCaldateColor(caldate) {
      return caldate.color;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showCaldate({ nativeCaldate, caldate }) {
      const open = () => {
        this.selectedCaldate = caldate;
        this.selectedElement = nativeCaldate.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeCaldate.stopPropagation();
    }
  }
};
</script>

<style scoped>

.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0000001f;
  z-index: 2;
}

</style>
