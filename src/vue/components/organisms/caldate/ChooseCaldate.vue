<template>
  <v-card>
    <div class="d-flex align-center flex-column">
      <div class="d-flex justify-space-around">
        <v-switch
          class="mx-6"
          v-model="uniqueDate"
          :label="$t('time.unique_date') | capitalize"
        >
        </v-switch>
        <v-switch
          class="mx-6"
          v-model="timed"
          :label="$t('time.timed') | capitalize"
        >
        </v-switch>
      </div>

      <v-date-picker
        v-show="uniqueDate"
        v-model="caldate.date"
        mode="datetime"
        is24hr
      />
      <v-date-picker
        v-show="!uniqueDate"
        v-model="caldate.range"
        is-range
        mode="datetime"
        is24hr
      />

      <v-card-actions class="mt-3">
        <v-btn @click="$emit('close')">
          {{ $t("confirm.cancel") }}
        </v-btn>
        <v-btn @click="confirm">
          {{ $t("confirm.confirm") }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import $ from "jquery";
import VDatePicker from "v-calendar/lib/components/date-picker.umd";
import Caldate from "@/ts/models/caldateClass";
import moment from "moment";

export default {
  name: "ChooseCaldate",

  data() {
    var now = new Date();
    now.setHours(now.getHours() + Math.round(now.getMinutes() / 60) + 1);
    now.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

    now = this.formatDT(now);

    return {
      timed: true,
      uniqueDate: true,
      caldate: {
        date: now,
        range: {
          start: now,
          end: now
        }
      }
    };
  },

  components: {
    VDatePicker
  },

  watch: {
    timed(value) {
      if (value == true) {
        $(".vc-time-picker").show();
      } else {
        $(".vc-time-picker").hide();
      }
    }
  },

  methods: {
    formatDT(dateTime) {
      if (typeof dateTime !== Object) {
        dateTime = new Date(dateTime)
      }
      return moment(dateTime).utc().format('YYYY-MM-DD HH:mm:ss')
    },

    confirm() {
      var newCaldate = {};
      newCaldate.timed = this.timed;

      if (this.uniqueDate) {
        newCaldate.start = this.formatDT(this.caldate.date);
        newCaldate.end = this.formatDT(this.caldate.date);
      } else {
        newCaldate.start = this.formatDT(this.caldate.range.start);
        newCaldate.end = this.formatDT(this.caldate.range.end);
      }
      this.$emit("addCaldate", new Caldate(newCaldate));
      this.$emit("close");
    }
  }
};
</script>

<style scoped></style>
