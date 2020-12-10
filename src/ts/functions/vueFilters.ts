import Vue from "vue";

Vue.filter("capitalize", function(value: String) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("camelize", function(value: String) {
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
});