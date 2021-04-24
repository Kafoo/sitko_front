<template>
  
  <div class="d-flex">
    <v-select
    :value="value"
    @change="update"
    :items="visibilities"
    item-text="name"
    item-value="id"
    label="Visibilité"
    outlined
    class="rounded-lg"
    ></v-select>

    <help class="mt-2 mx-2" :text="$t('help.visibility.'+type)" />
  </div>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"
import { capitalize } from '@/ts/functions/vueFilters';

export default defineComponent({

  name : "VisibilityInput",

  props: {
    value: {
      type: Number
    },
    type:{
      type:String
    }
  },

  setup(props, { emit, root }) {

    const visibilities = [
      {
        'id': 1,
        "name": capitalize(root.$i18n.t('visibilities.1')),
      },
      {
        'id': 2,
        "name": capitalize(root.$i18n.t('visibilities.2')),
      },
      {
        'id': 3,
        "name": capitalize(root.$i18n.t('visibilities.3')),
      },
    ]

    const update = (visibility:number) =>{
      emit('input', visibility)
    }

    return{
      visibilities,
      update
    }

  }
});
</script>

<style scoped>



</style>
