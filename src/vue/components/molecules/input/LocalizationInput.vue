<template>
  
  <div style="height:80px">
    <v-combobox 
    v-if="!selected"
    :search-input.sync="query" 
    :items="results"
    item-text="title"
    no-filter
    outlined
    :label="$t('adress') | capitalize"
    return-object
    :loading="loading"
    @change="onChange"
    append-icon=""
    >
    </v-combobox>

    <v-card 
    v-else-if="adress" 
    outlined
    rounded
    class="pa-3 d-flex align-center justify-space-between"
    style="border-color:#8f8f8f">
      <div>
        <v-icon class="mr-2">location_on</v-icon>
        {{adress.title}}
      </div>
      <v-btn 
      small 
      icon 
      class="ml-1"
      @click="reset">
        <v-icon>close</v-icon>
      </v-btn>
    </v-card>
  </div>

</template>

<script lang="ts">

import { defineComponent, ref, Ref, watch, onMounted } from "@vue/composition-api"
import LocalizationModel from "@/ts/models/localizationClass"

export default defineComponent({

  name : "LocalizationInput",

  props:{
    value:Object
  },

  setup(props, {emit}) {

    var adress = ref({})
    var selected = ref(false)
    var loading = ref(false)
    var query = ref("")
    var results = ref([])
    var fetching = ref(false)
    var lastInput = Date.now()
    const delay = 1000

    onMounted(()=>{
      if (props.value) {
        selected.value = true
        adress.value = props.value
      }
    })

    const geocode = (value:string): any=>{

      fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${value}&apiKey=gj95wnWgipY419UbMT8cB15ETPR9EoeRjtsTxfR53mA`)
          .then((result:any) => result.json())
          .then((result:any) => {
              results.value = result.items
              loading.value = false
          });
    }

    watch(() => query.value, (value:any) => {

        if (value) {     
          loading.value = true

          lastInput = Date.now()

          setTimeout(()=>{
            if (Date.now() - lastInput > delay-20) {
              geocode(value)
            }
          },delay)

        }else{
          results.value = []
        }
    });

    const reset = () => {
      selected.value = false
      query.value = ""
      adress.value = {}
      emit('input', null)
    }

    const onChange = (value:any) => {
      if (typeof value === 'object') {
        selected.value = true
        const newLocalization = new LocalizationModel(value)
        adress.value = newLocalization
        emit('input', newLocalization)
      }
      
    }

    return{
      query,
      results,
      loading,
      adress,
      onChange,
      selected,
      reset
    }

  }
});
</script>

<style scoped>



</style>
