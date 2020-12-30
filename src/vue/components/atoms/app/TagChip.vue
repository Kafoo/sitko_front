<template>

  <v-chip class="tag-chip mr-1">
    <slot/>
  </v-chip>

</template>

<style scoped>

.tag-chip{
    font-size: 0.7em;
    height: 17px;
    padding: 7px;
}
.tag-chip.theme--light.v-chip:hover::before {
    opacity: 0;
}

</style>