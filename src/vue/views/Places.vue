<template>
  <primary-content-body>
    <router-view/>
  </primary-content-body>
</template>

<script>
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody";

export default {
  name: "Places",

  components: {
    PrimaryContentBody
  },

};
</script>
