import Vue from "vue";
import { TranslateResult } from 'vue-i18n'

export function capitalize(value: string | TranslateResult ){
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function camelize(value: string | TranslateResult){
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


Vue.filter("capitalize", capitalize);
Vue.filter("camelize", camelize);