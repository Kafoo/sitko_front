<template>

  <primary-content-body>


      <v-card-text v-if="!loading_place" class="pa-0">
        <v-form 
        @submit.prevent="editPlace" 
        v-model="form">

          <v-row justify="center">
            <label 
            for="name" 
            class="name text-h5 font-weight-bold black--text mb-5">
            <!-- TOTRANSLATE -->
              Edition du lieu
            </label>
          </v-row>

          <v-row justify="center">
            <image-input
            icon
            :image="editedPlace.image" 
            @changeImage="changeImage"/>
          </v-row>

          <v-row justify="center" dense>
            <v-col cols="6">
              <v-text-field
                class="mt-5"
                :label="$t('name') | capitalize"
                outlined
                maxlength="40"
                :rules="[rules.required[0]]"
                v-model="editedPlace.name"
                :disabled="loading"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center" dense>
            <v-col cols="10">
              <v-textarea
                :label="$t('description') | capitalize"
                outlined
                rows="6"
                :rules="[rules.required[0]]"
                v-model="editedPlace.description"
                :disabled="loading"
              ></v-textarea>
            </v-col>
          </v-row>


          <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn 
            color="red" dark
            @click="deletion = true">
              <!-- TOTRANSLATE -->
              Supprimer le lieu
            </v-btn>
            <v-btn 
            type="submit" 
            color="success"
            :disabled="loading || !form">
              <!-- TOTRANSLATE -->
              Valider
            </v-btn>
          </v-card-actions>
        </v-form>

        <loading-bar :loading="loading"/>

        <!-- Confirm deletion -->
        <confirm-dialog
          :show="deletion"
          :text="$t('Place deletion is definitive.')"
          :cancel="$t('confirm.cancel')"
          @cancel-action="deletion = false"
          :confirm="$t('delete')"
          @confirm-action="deletePlace()"
          confirm_color="red"
          :loading="loading_deletion"
        />

      </v-card-text>

  </primary-content-body>
</template>

<script lang="ts">
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import { defineComponent, ref, onMounted, Ref } from "@vue/composition-api"
import { useGetters, useActions } from 'vuex-composition-helpers';
import { useInputRules } from "@/ts/functions/composition/inputRules"
import LoadingBar from "@c/atoms/app/LoadingBar.vue"
import ImageInput from "@c/molecules/media/ImageInput.vue"
import Image from "@/ts/models/imageClass"
import PlaceModel from "@/ts/models/placeClass"
import ConfirmDialog from "@c/molecules/app/ConfirmDialog.vue";

export default defineComponent({

  components: {
    PrimaryContentBody,
    LoadingBar,
    ImageInput,
    ConfirmDialog
  },

  name : "Dashboard",

  setup(props, { root }) {

    var deletion = ref(false)
    var loading_deletion = ref(false)

    const { place } = useGetters({place: 'place/place'} as any)
    const { loading_place } = useGetters({loading_place: 'place/loading_place'} as any)

    var editedPlace: Ref<PlaceModel> = ref(new PlaceModel)

    var form = ref(false)
    var loading = ref(false)
    const rules = useInputRules()

    const { GET_PLACE } = useActions({GET_PLACE: 'place/GET_PLACE'} as any)
    const { SEND_PLACE_EDITION } = useActions({SEND_PLACE_EDITION: 'place/SEND_PLACE_EDITION'} as any)
    const { SEND_PLACE_DELETION } = useActions({SEND_PLACE_DELETION: 'place/SEND_PLACE_DELETION'} as any)

    onMounted(() =>{
      GET_PLACE(root.$route.params.id)
      .then(()=>{
        editedPlace.value = JSON.parse(JSON.stringify(place.value))
      })
    })

    const editPlace = () =>{
      loading.value = true
      SEND_PLACE_EDITION(editedPlace.value)
        .then(() => {
          loading.value = false;
          root.$router.push("/place/"+editedPlace.value.id+"/overview")
        })
        .catch(() => {
          loading.value = false;
        });
    }

    const deletePlace = () =>{
      loading_deletion.value = true
      SEND_PLACE_DELETION(editedPlace.value.id)
        .then(() => {
          loading_deletion.value = false;
          root.$router.push("/places/myplaces")
        })
        .catch(() => {
          loading_deletion.value = false;
        });
    }

    const changeImage = (data:string|Image) => {
      editedPlace.value.image = data
    } 

    return{
      place,
      loading_place,
      form,
      loading,
      rules,
      editedPlace,
      changeImage,
      editPlace,
      deletePlace,
      deletion,
      loading_deletion
    }

  }

});
</script>

