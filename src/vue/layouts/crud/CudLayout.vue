<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto my-2 text-center">
        <label for="name" class="name text-h4 font-weight-bold black--text">
          <slot name="header-title"></slot>
        </label>
      </v-col>
    </v-row>

    <div class="d-flex flex-column flex-sm-row my-4 mx-sm-4">
      <div class="d-flex justify-center mb-4 mr-sm-5">
        <slot name="image"></slot>
      </div>

      <div class="d-flex flex-column flex-grow-1">
        <v-row justify="center" dense>
          <v-col class="mt-2">
            <slot name="title"></slot>
          </v-col>
        </v-row>
        <v-row justify="center" dense>
          <v-col>
            <slot  name="visibility"></slot>
          </v-col>
        </v-row>
      </div>
    </div>

    <v-row v-if="$slots.is_done" justify="end" dense>
      <v-col>
        <slot name="is_done"></slot>
      </v-col>
    </v-row>

    <v-row justify="center" dense>
      <v-col>
        <slot name="description"></slot>
      </v-col>
    </v-row>

    <v-row justify="center" dense>
      <v-col>
        <slot name="location"></slot>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-n1">
      <v-col class="mb-4">
        <slot name="tags"></slot>
      </v-col>

      <v-col v-if="$slots.caldates" class="mb-4" cols="12" sm="6">
        <slot name="caldates"></slot>
      </v-col>
    </v-row>

    <v-card-actions class="mt-4 d-flex flex-wrap justify-end">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CudLayout",

  setup() {}
});
</script>

<style scoped></style>
