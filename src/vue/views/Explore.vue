<template>
  <primary-content-body>
    <page-title :title="$t('explore') | capitalize" />

    <img :src="image_src" class="mt-8" width="60%" />
  </primary-content-body>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import PageTitle from "@c/atoms/app/PageTitle.vue";

export default defineComponent({
  name: "Explore",

  components: {
    PrimaryContentBody,
    PageTitle
  },

  setup(props: any) {
    const image_src =
      "https://res.cloudinary.com/dyigive9u/image/upload/v1606053248/kisspng-question-mark-clip-art-transparent-background-question-mark-5b560ebef0c515.6542983615323665269862_xpztfa.png";

    return {
      image_src
    };
  }
});
</script>
