<template>
  <div>
    <v-skeleton-loader
      v-for="item in [1, 2, 3, 4]"
      v-bind:key="item"
      class="boilerplate ma-1 elevation-3"
      height="60"
      type="table-heading"
    ></v-skeleton-loader>
  </div>

</template>