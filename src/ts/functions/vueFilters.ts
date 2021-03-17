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

export function incoming(value : Array<ProjentModel> | undefined){
  if (value) {
    return value.filter((project:ProjentModel)=>{
      return project.inc_caldates.length > 0
    });
  }
}

export function past(value : Array<ProjentModel> | undefined){
  if (value) {
    return value.filter((project:ProjentModel)=>{
      return project.inc_caldates.length == 0
    });
  }
}

Vue.filter("capitalize", capitalize);
Vue.filter("camelize", camelize);
Vue.filter("incoming", incoming);
Vue.filter("past", past);
