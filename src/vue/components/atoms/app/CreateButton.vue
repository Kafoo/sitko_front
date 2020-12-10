<template>
  
  <v-btn
    large
    @click="$emit('action')"
    class="center mb-8 green lighten-1"
    justify="center"
    align="center"
  >
    {{ $t("actions.create", { item: item }) }}
  </v-btn>

</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CreateButton extends Vue{
  
  @Prop(String) item?:string

}
</script>