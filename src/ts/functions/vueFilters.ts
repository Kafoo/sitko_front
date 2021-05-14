import Vue from "vue";
import { TranslateResult } from "vue-i18n";
import ProjentModel from "@/ts/models/projentClass";

export function capitalize(value: string | TranslateResult) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function camelize(value: string | TranslateResult) {
  if (!value) return "";
  value = value.toString();
  var parts = value.split(" ");
  value = "";
  parts.forEach(function(part, index) {
    value += part.charAt(0).toUpperCase() + part.slice(1);
    if (index < parts.length - 1) {
      value += " ";
    }
  });
  return value;
}

export function incoming(value: Array<ProjentModel> | undefined) {
  if (value) {
    return value.filter((projent: ProjentModel) => {
      return projent.current;
    });
  }
}

export function past(value: Array<ProjentModel> | undefined) {
  if (value) {
    return value.filter((projent: ProjentModel) => {
      return !projent.current;
    });
  }
}

export function sort_newest(value: Array<{created_at:string}> | undefined) {
  if (value) {
    var entities = [...value];
    return entities.sort(function(a, b) {
      if (a.created_at < b.created_at) {
        return 1
      } else {
        return -1
      }
    })
  }else{
    return []
  }
}

export function sort_soonest(value: Array<ProjentModel> | undefined) {
  if (value) {
    var entities = [...value];
    return entities.sort(function(a, b) {

      if (!a.caldates[0]) {
        return 1
      }
      if (!b.caldates[0]) {
        return -1
      }
      if (a.caldates[0].start > b.caldates[0].start) {
        return 1
      } else {
        return -1
      }
    })
  }else{
    return []
  }
}

Vue.filter("capitalize", capitalize);
Vue.filter("camelize", camelize);
Vue.filter("incoming", incoming);
Vue.filter("past", past);
Vue.filter("sort_newest", sort_newest);
Vue.filter("sort_soonest", sort_soonest);
