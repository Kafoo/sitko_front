<template>
  <div 
  v-if="app_alert"
  class="alert-container">
    <div 
    class="alert elevation-10 d-flex align-center" 
    :class="app_alert.type">
      <v-icon 
      v-if="app_alert.type == 'error'" 
      color="white" 
      class="mr-2"
        >warning</v-icon
      >
      <span class="mx-2">
        {{ app_alert.msg }}<br>
        <span class="text-caption font-italic">
          ({{ app_alert.info }})
        </span>
      </span>
      <v-btn icon @click="removeAlert">
        <v-icon color="white">close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter, Mutation, namespace } from "vuex-class";

const appStore = namespace("app")

@Component({
  name: "Alert"
})
export default class Alert extends Vue {
  @appStore.Getter app_alert: any;
  @appStore.Mutation removeAlert: any;
}
</script>

<style scoped>
.alert-container {
  animation: fade-in 0.2s ease;
  display: flex;
  position: fixed;
  bottom: 60px;
  width: 90%;
  margin: 0% 5%;
  z-index: 1000;
}

.alert {
  margin: auto;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  color: white !important;
}

.alert.error {
  border: none !important;
  background-color: #9d1818 !important;
}

.alert.success {
  background-color: green;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
