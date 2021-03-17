<template>
  <div class="text-center">
    <page-title class="my-5" :title="$t('contact') | capitalize" />

    <h5>Facebook</h5>
    <h5>Instagram</h5>
    <h5>E-mail</h5>
    <h5>...</h5>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import PageTitle from "@c/atoms/app/PageTitle.vue";

export default defineComponent({
  name: "Contact",

  components: {
    PageTitle
  },

  setup() {
    return {};
  }
});
</script>
