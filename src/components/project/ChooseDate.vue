<template>

  <div class="d-flex align-center flex-column">
    
    <div class="d-flex justify-space-around" width="100%">
        <v-switch
          class="mx-6"
          v-model="singleDate"
          label="Date unique"
        ></v-switch>
        <v-switch
          class="mx-6"
          v-model="timed"
          label="Horaires"
        ></v-switch>
    </div>

    <v-date-picker v-show="singleDate" v-model="event.date" mode="datetime" is24hr />
    <v-date-picker v-show="!singleDate" v-model="event.range" is-range mode="datetime" is24hr />

    <v-card-actions class="mt-3">
      <v-btn @click="$emit('closeDatePicker')">
        Annuler
      </v-btn>
      <v-btn @click="confirm">
        Valider
      </v-btn>
    </v-card-actions>

  </div>

</template>

<script>
import $ from'jquery'
import VDatePicker from 'v-calendar/lib/components/date-picker.umd'
import Event from '@/models/eventClass'

export default {
  name: "ChooseDate",
  data() {

    var now = new Date()
    now.setHours(now.getHours() + Math.round(now.getMinutes()/60) + 1);
    now.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

    now = this.formatDT(now)

    return {
      timed: true,
      singleDate: true,
      event:{
        date: now,
        range: {
          start: now,
          end: now,
        },
      }
    };
  },
  components:{
    VDatePicker
  },
  props: {

  },
  watch:{
    timed(value){
      if (value==true) {        
        $('.vc-time-picker').show()
      }else{
        $('.vc-time-picker').hide()
      }
    }
  },
  methods: {
    formatDT(dateTime){
      if (typeof(dateTime) !== Object) {
        dateTime = new Date(dateTime)
      }
        var date = dateTime.getFullYear()+'-'+(dateTime.getMonth()+1)+'-'+dateTime.getDate();
        var time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
        return date+' '+time
    },
    confirm(){

      var newEvent = {}
      newEvent.place_id = this.$route.params.id
      newEvent.timed = this.timed

      if (this.singleDate) {
        newEvent.start = this.formatDT(this.event.date)
        newEvent.end = this.formatDT(this.event.date)
      }else{
        newEvent.start = this.formatDT(this.event.range.start)
        newEvent.end = this.formatDT(this.event.range.end)
      }
      this.$emit('addEvent', new Event(newEvent))
      this.$emit('closeDatePicker')
    }
  }
};
</script>

<style scoped>


</style>
