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

      <v-file-input 
      v-model="newPlace.file"
      :label="$t('image') | capitalize"
      :rules="[rules.image[0]]"
      accept="image/jpeg"
      @change="onFileChange" />

      <v-card-actions>
      <v-spacer></v-spacer>
        <v-btn 
        type="submit" 
        color="success"
        :disabled="loading || !form">
          C'est parti
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


interface NewPlace {
  name:String
  description:String
  image:String
  tags:Array<{title: string}>
  file?:File
}

export default defineComponent({

  name: "CreatePlace",

  components: {
    LoadingBar
  },

  setup(props, {root}){

    // PLACE //
    var newPlace: Ref<NewPlace> = ref({
      name:"",
      description:"",
      image:"",
      tags:[],
      file:undefined
    })

    var form = ref(false)
    var loading = ref(false)
    const rules = useInputRules()

    const { SEND_PLACE_CREATION } = useActions({SEND_PLACE_CREATION: 'place/SEND_PLACE_CREATION'} as any)

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

  const onFileChange = (e:any) => {

      if (newPlace.value.file) {
        const reader = new FileReader();
        reader.readAsDataURL(newPlace.value.file);
        reader.onload = e => {
          newPlace.value.image = e.target!.result as string;
        };
      } else {
        newPlace.value.image = "";
      }

  }

    return{
      createPlace,
      rules,
      loading,
      form,
      newPlace,
      onFileChange,
      showCrop
    }
  }
})
</script>

<style scoped>

::v-deep .v-select__selection { display:none }

</style>