<template>

  <v-card-text >
    <v-form 
    @submit.prevent="createPlace" 
    v-model="form">
      <div class="mb-4">
        <label 
        for="name" 
        class="name">
          {{ $t("actions.new", { item: $t("place") }) | camelize }}
        </label>
      </div>
      <v-text-field
        :label="$t('name') | capitalize"
        outlined
        :rules="[rules.required[0]]"
        v-model="newPlace.name"
        :disabled="loading"
      ></v-text-field>
      <v-textarea
        :label="$t('description') | capitalize"
        outlined
        rows="6"
        :rules="[rules.required[0]]"
        v-model="newPlace.description"
        :disabled="loading"
      ></v-textarea>

      <image-input 
      :image="newPlace.image" 
      @changeImage="changeImage"/>

      <v-card-actions>
      <v-spacer></v-spacer>
        <v-btn 
        type="submit" 
        color="success"
        :disabled="loading || !form">
          <!-- TOTRANSLATE -->
          C'est parti !
        </v-btn>
      </v-card-actions>
    </v-form>

    <loading-bar :loading="loading"/>

  </v-card-text>


</template>

<script lang="ts">
import {ref, defineComponent, onMounted, computed, Ref} from "@vue/composition-api"
import { useActions } from 'vuex-composition-helpers';
import { useInputRules } from "@/ts/functions/composition/inputRules"
import LoadingBar from "@c/atoms/app/LoadingBar.vue"
import ImageInput from "@c/molecules/media/ImageInput.vue"
import Image from "@/ts/models/imageClass"

interface NewPlace {
  name:String
  description:String
  image:String | object
  tags:Array<{title: string}>
}

export default defineComponent({

  name: "CreatePlace",

  components: {
    LoadingBar,
    ImageInput
  },

  setup(props, {root}){

    // PLACE //
    var newPlace: Ref<NewPlace> = ref({
      name:"",
      description:"",
      image: new Image(0),
      tags:[]
    })

    var form = ref(false)
    var loading = ref(false)
    const rules = useInputRules()

    const { SEND_PLACE_CREATION } = useActions({SEND_PLACE_CREATION: 'place/SEND_PLACE_CREATION'} as any)

    const changeImage = (data:any) => {
      newPlace.value.image = data
    }

    const createPlace = () =>{
      loading.value = true
      SEND_PLACE_CREATION(newPlace.value)
        .then(() => {
          loading.value = false;
          root.$router.push("/places/myplaces")
        })
        .catch(() => {
          loading.value = false;
        });
    }

  var showCrop = ref(false)

    return{
      createPlace,
      rules,
      loading,
      form,
      newPlace,
      showCrop,
      changeImage
    }
  }
})
</script>

<style scoped>

::v-deep .v-select__selection { display:none }

</style>