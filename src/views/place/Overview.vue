<template>
  <div class="text-center">

    <h1 class="mb-3">Les Vallées</h1>

    <img class='image' src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/40451975_2674910106066657_4956392723440467968_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=MHEZIJhsSZMAX9Zv10x&_nc_ht=scontent-cdg2-1.xx&oh=887b9247a49c14922e252de423115a48&oe=5FDFA376"
    width="250px"
    height="200px" />

    <h3 class="mt-6">Lieu de ouf, projets de dingues,<br> venez on est gentils.</h3>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {

  }
};
</script>

<style scoped>
  
  .image{
    border-radius: 4px;
    box-shadow: 0 0 5px black;
  }

</style>