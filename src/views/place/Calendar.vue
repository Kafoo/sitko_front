<template>

  <div>
    <v-row class="fill-height">
      <v-col>

        <v-sheet class="d-flex ma-4 mt-0">

          <div 
          class="d-flex flex-wrap flex-md-nowrap flex-shrink-1" 
          style="min-width: 0">

            <v-toolbar-title 
            v-if="$refs.calendar" 
            class="mt-1 mr-3">
              {{ $refs.calendar.title }}
            </v-toolbar-title>

            <div> 
              <v-btn
                fab
                text
                small
                color="grey darken-2"
                @click="prev"
              >
                <v-icon>
                  mdi-chevron-left
                </v-icon>
              </v-btn>
              <v-btn
                fab
                text
                small
                color="grey darken-2"
                @click="next"
              >
                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
            </div>

          </div>

          <v-spacer></v-spacer>

          <div class="d-flex flex-wrap flex-md-nowrap justify-end">

            <v-menu
              bottom
              right
            >
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
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-chip
              outlined
              color="blue"
              class="ml-4 ml-xs-0"
              @click="setToday"
            >
              Aujourd'hui
            </v-chip>

          </div>

        </v-sheet>

        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"

              max-width="400px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <span class="ml-2 font-italic">({{selectedEvent.frenchType}})</span>
              </v-toolbar>


              <v-card-text class="pb-0">
                <v-clamp autoresize :max-lines="5"
                class="description">
                  {{selectedEvent.description}}
                </v-clamp>
              </v-card-text>


              <v-card-actions>
                <v-btn
                  text
                  color="primary"
                  @click="$router.push('projects#'+selectedEvent.child.id)"
                >
                  + infos
                </v-btn>
                <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
                >
                  Fermer
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
  components:{
    VClamp
  },
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour'
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    oldEvents: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  created () {
    this.getEvents()
  },
  computed: {
    ...mapGetters("event", ["loading_events", "events"]),
  },
  methods: {
    ...mapActions("event", ["getEvents"]),
    openEdit() {
      this.editionProject = this.selectedEvent.child;
      this.editing = true;
    },
    closeEdit() {
      this.editing = false;
      this.editionProject = {};
      this.getEvents()
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    }
  },
}
</script>

<style scoped>

</style>
