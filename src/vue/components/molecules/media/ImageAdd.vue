<template>
  
  <v-file-input
    v-model="model"
    :label="$t('image') | capitalize"
    :rules="[rules.image[0]]"
    accept="image/jpeg"
    @change="$emit('change')"
    prepend-icon="insert_photo"
  />

</template>

<script lang="ts">

import { defineComponent, ref } from "@vue/composition-api"
import {useInputRules} from "@/ts/functions/composition/inputRules"

export default defineComponent({

  name : "",

  props : {
    model:String
  },

  setup() {

  const rules = ref({
    image: useInputRules().image,
  })

    return{
      rules
    }

  }
});
</script>

<style scoped>



</style>
