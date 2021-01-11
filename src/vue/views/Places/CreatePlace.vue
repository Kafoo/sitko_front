<template>

  <v-card-text class="pa-0">
    <v-form 
    @submit.prevent="createPlace" 
    v-model="form">

      <v-row justify="center">
        <label 
        for="name" 
        class="name text-h5 font-weight-bold black--text mb-5">
          {{ $t("actions.new", { item: $t("place") }) | camelize }}
        </label>
      </v-row>

      <v-row justify="center">
        <image-input
        icon
        :image="newPlace.image" 
        @changeImage="changeImage"/>
      </v-row>

      <v-row justify="center" dense>
        <v-col cols="12" sm="6">
          <v-text-field
            class="mt-5"
            :label="$t('name') | capitalize"
            outlined
            maxlength="40"
            :rules="[rules.required[0]]"
            v-model="newPlace.name"
            :disabled="loading"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center" dense>
        <v-col cols="12" sm="10">
          <v-textarea
            :label="$t('description') | capitalize"
            outlined
            rows="6"
            :rules="[rules.required[0]]"
            v-model="newPlace.description"
            :disabled="loading"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row justify="center" dense>
        <v-col cols="12" sm="10">
          <!-- TOTRANSLATE -->
          <tags-input
          :tags="newPlace.tags"
          @update="updateTags"
          label="Tags du lieu"
          />
        </v-col>
      </v-row>


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
import PlaceModel from "@/ts/models/placeClass";
import TagsInput from "@c/molecules/tag/TagsInput.vue"
import TagModel from "@/ts/models/tagClass"

export default defineComponent({

  name: "CreatePlace",

  components: {
    LoadingBar,
    ImageInput,
    TagsInput
  },

  setup(props, {root}){

    // PLACE //
    var newPlace: Ref<PlaceModel> = ref({
      name:"",
      description:"",
      image: new Image(0),
      tags:[],
      projects:[]
    })

    var form = ref(false)
    var loading = ref(false)
    const rules = useInputRules()

    const { SEND_PLACE_CREATION } = useActions({SEND_PLACE_CREATION: 'place/SEND_PLACE_CREATION'} as any)

    const changeImage = (data:string|Image) => {
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

    const updateTags = (tags:Array<TagModel>) => {
      newPlace.value.tags = tags    
    }

  var showCrop = ref(false)

    return{
      createPlace,
      rules,
      loading,
      form,
      newPlace,
      showCrop,
      changeImage,
      updateTags
    }
  }
})
</script>

<style scoped>

</style>