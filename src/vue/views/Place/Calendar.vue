<template>
  <div>
    <div v-if="loading" class="loading d-flex align-center justify-center">
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

            <project-card :project="selectedCaldate.child" />

          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import VClamp from "vue-clamp";
import CaldateModel from "@/ts/models/caldateClass";
import ProjectCard from "@c/molecules/project/ProjectCard.vue";

export default defineComponent({
  name: "Calendar",

  components: {
    VClamp,
    ProjectCard
  },

  setup(props, { root, refs }) {
    var calendar = ref({
      move: (arg: any) => {},
      prev: () => {},
      next: () => {}
    });

    var focus = ref("");
    var type = ref("month");
    var selectedCaldate = ref({});
    var selectedElement = ref(null);
    var selectedOpen = ref(false);

    const { GET_CALDATES_BY_PLACE } = useActions({
      GET_CALDATES_BY_PLACE: "caldate/GET_CALDATES_BY_PLACE"
    } as any);
    const { caldates } = useGetters({ caldates: "caldate/caldates" } as any);
    const place_id = parseInt(root.$route.params.id);

    var loading = ref(false);

    onMounted(() => {
      //Force calendar to show month/year
      calendar.value.move(0);
      //Get caldates
      loading.value = true;
      GET_CALDATES_BY_PLACE(place_id).then(() => {
        loading.value = false;
      });
    });

    const typeToLabel = {
      month: root.$options.filters!.capitalize(root.$t("month")),
      week: root.$options.filters!.capitalize(root.$t("week")),
      day: root.$options.filters!.capitalize(root.$t("day"))
    };

    const getCaldateColor = (caldate: CaldateModel) => {
      return caldate.color;
    };

    const viewDay = ({ date }: any) => {
      focus.value = date;
      type.value = "day";
    };

    const setToday = () => {
      focus.value = "";
    };

    const prev = () => {
      calendar.value.prev();
    };

    const next = () => {
      calendar.value.next();
    };

    const showCaldate = ({ nativeEvent, event }: any) => {
      const open = () => {
        selectedCaldate.value = event;
        selectedElement.value = nativeEvent.target;
        setTimeout(() => {
          selectedOpen.value = true;
        }, 10);
      };

      if (selectedOpen.value) {
        selectedOpen.value = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    };

    return {
      focus,
      typeToLabel,
      type,
      selectedCaldate,
      selectedElement,
      selectedOpen,
      caldates,
      loading,
      viewDay,
      setToday,
      getCaldateColor,
      prev,
      next,
      showCaldate,
      calendar
    };
  }
});
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
