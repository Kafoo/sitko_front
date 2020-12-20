<template>

  <v-chip class="encule mr-1" small>
    <slot/>
  </v-chip>

</template>

<style scoped>

.encule{
    font-size: 0.7em;
    height: 17px;
    padding: 7px;
}
.theme--light.v-chip:hover::before {
    opacity: 0;
}
.encule:hover{

}
</style>