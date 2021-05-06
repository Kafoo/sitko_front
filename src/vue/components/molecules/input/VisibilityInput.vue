<template>
  
  <div class="d-flex">
    <v-select
    :value="value"
    @change="update"
    :items="visibilities"
    item-text="translated_name"
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
import { useGetters } from 'vuex-composition-helpers';

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

    const { app_data } = useGetters({app_data: 'app/app_data'} as any)
    const visibilities = app_data.value.visibilities

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
