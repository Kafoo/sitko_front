<template>

  <v-chip class="tag-chip mr-1" small>
    <slot/>
  </v-chip>

</template>

<style scoped>

.tag-chip{
    font-size: 0.7em !important;
    height: 17px !important;
    padding: 7px;
}
.tag-chip.theme--light.v-chip:hover::before {
    opacity: 0;
}

</style>