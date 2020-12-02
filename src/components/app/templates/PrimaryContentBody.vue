<template>
  <div class="d-flex justify-center">
    <v-card
      :tile="mobile"
      :elevation="mobile ? 0 : 3"
      class="account d-flex flex-column flex-grow-1 align-center ma-xs-0 ma-sm-5 pa-5"
      max-width="800px"
    >
      <slot></slot>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    mobile() {
      var breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs" ? true : false;
    }
  }
};
</script>
