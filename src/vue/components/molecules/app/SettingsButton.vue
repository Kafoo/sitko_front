<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon fab small class="ml-1" v-bind="attrs" v-on="on">
        <v-icon>edit</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        link
        @click="item.action"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { PropType } from "vue";
import { defineComponent } from "@vue/composition-api";

type Items = {
  title: string;
  data: any;
  action: any;
};

export default defineComponent({
  name: "",

  props: {
    items: Array as () => Items[]
  },

  setup() {
    return {};
  }
});
</script>

<style scoped></style>
