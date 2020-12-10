<template>
  <primary-content-body>
    <page-title :title="$t('explore')" />

    <img :src="image_src" class="mt-8" width="60%" />
  </primary-content-body>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import PageTitle from "@/vue/components/atoms/app/PageTitle.vue";

@Component({
  name: "Explore",

  components: {
    PrimaryContentBody,
    PageTitle
  }
})
export default class Explore extends Vue {
  image_src =
    "https://res.cloudinary.com/dyigive9u/image/upload/v1606053248/kisspng-question-mark-clip-art-transparent-background-question-mark-5b560ebef0c515.6542983615323665269862_xpztfa.png";
}
</script>
