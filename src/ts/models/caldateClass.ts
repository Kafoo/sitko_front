import PlaceModel from "@/ts/models/placeClass";
import ProjectModel from "@/ts/models/projectClass";
import EventModel from "@/ts/models/eventClass";
import moment from "moment-timezone";
import store from "../store";

export default class CaldateModel {
  id: number;
  timed: boolean;
  place_id: number;
  start: string;
  tzStart: moment.Moment;
  end: string;
  tzEnd: moment.Moment;
  child_id?: number;
  child_type: string;
  icon: string;
  name: string;
  chip: string;
  singleDate: boolean;
  isPast: boolean;
  child?: any;

  constructor(rawData: any = {}) {

    moment.locale(store.state.app.locale as string);

    this.timed = rawData.timed;
    this.id = rawData.id;
    this.place_id = rawData.place_id;
    this.tzStart = moment.utc(rawData.start).tz(moment.tz.guess());
    this.start = moment(rawData.start).format("YYYY-MM-DD HH:mm:ss");
    this.tzEnd = moment.utc(rawData.end).tz(moment.tz.guess());
    this.end = moment(rawData.end).format("YYYY-MM-DD HH:mm:ss");
    this.child_type = rawData.child_type;

    if (this.tzStart.format() === this.tzEnd.format()) {
      this.singleDate = true;
    } else {
      this.singleDate = false;
    }

    if (this.singleDate) {
      this.icon = "today";
    } else {
      this.icon = "date_range";
    }

    if (this.tzStart < moment()) {
      this.isPast = true;
    } else {
      this.isPast = false;
    }

    if (rawData.child) {
      this.name = rawData.child.title;
      this.child = rawData.child;
    } else {
      this.name = "Evénement sans child";
    }

    this.chip = this.chipFormat();
  }

  get color(): string {
    switch (this.child_type) {
      case "project":
        return "yellow darken-3";

      case "event":
        return "blue darken-3";

      default:
        return "grey";
    }
  }

  removeTimeIfNeeded(data: string) {
    const timeRegex = /\d{1,2}:\d{2}( AM| PM)?/;
    if (!this.timed) {
      return data.replace(timeRegex, "");
    } else {
      const time = data.match(timeRegex);
      if (time) {
        return data.replace(time[0], "(" + time[0] + ")");
      }
    }
    return data;
  }

  chipFormat() {
    let chip = "";

    const currentYear = moment().format("YYYY");

    //SINGLE DATE
    if (this.tzStart.format() === this.tzEnd.format()) {
      chip = this.tzStart.format("LLLL");

      chip = this.removeTimeIfNeeded(chip);

      //RANGE DATE
    } else {
      //superlong chip
      if (
        (currentYear !== this.tzStart.format("YYYY") ||
          currentYear !== this.tzEnd.format("YYYY")) &&
        this.timed
      ) {
        var start = this.tzStart.format("l") + " " + this.tzStart.format("LT");
        var end = this.tzEnd.format("l") + " " + this.tzEnd.format("LT");
        //soft chip
      } else {
        var start = this.tzStart.format("llll");
        var end = this.tzEnd.format("llll");
      }
      start = this.removeTimeIfNeeded(start);
      end = this.removeTimeIfNeeded(end);

      chip = start + " - " + end;
    }

    const currentYearRegex = "(, )?(?<!/)" + currentYear;
    chip = chip.replaceAll(new RegExp(currentYearRegex, "g"), "");

    chip = chip.replaceAll("  ", " ");

    return chip;
  }
}
