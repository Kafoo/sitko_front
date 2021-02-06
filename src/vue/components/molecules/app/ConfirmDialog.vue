<template>
  <v-dialog 
  v-model="show" 
  width="500"
  persistent>
    <v-card class="pt-7 pb-3">
      <v-card-text class="text-h6">
        {{ $t("confirm.sure") | capitalize }}<br />
        {{ text }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          text
          @click="$emit('cancel-action')"
          :disabled="loading"
        >
          {{ cancel }}
        </v-btn>
        <v-btn
          :color="confirm_color"
          text
          @click="$emit('confirm-action')"
          :disabled="loading"
        >
          {{ confirm }}
        </v-btn>
      </v-card-actions>

      <loading-bar :loading="loading" />
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import LoadingBar from "@c/atoms/app/LoadingBar.vue";

@Component({
  name: "ConfirmDialog",

  components: {
    LoadingBar
  }
})
export default class ConfirmDialog extends Vue {
  @Prop(Boolean) show?: boolean;
  @Prop(String) text?: string;
  @Prop(String) cancel?: string;
  @Prop(String) confirm?: string;
  @Prop({ default: "primary" }) confirm_color?: string;
  @Prop({ default: false }) loading?: boolean;
}
</script>
