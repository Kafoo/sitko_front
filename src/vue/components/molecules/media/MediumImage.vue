<template>
  
      <v-img
        v-if="image"
        :class="isDefault?'':'c-pointer'"
        :src="image.medium"
        @click="!isDefault?expand_image = true:undefined"
      > 
      
      <template>
      
        <v-dialog v-model="expand_image" width="90%">
          <image-popup :image="image" @close="expand_image = false" />
        </v-dialog>
      
      </template>
      
      </v-img>

</template>

<script lang="ts">

import { defineComponent, ref } from "@vue/composition-api"
import ImagePopup from "@c/organisms/app/ImagePopup.vue"
import ImageModel from "@/ts/models/imageClass"

export default defineComponent({

  name : "MediumImage",

  components:{
    ImagePopup
  },

  props:{
    image:{
      type:Object,
      default: () => new ImageModel()
    }
  },

  setup(props) {

    var expand_image = ref(false)

    const isDefault = props.image.full === 'https://res.cloudinary.com/dyigive9u/image/upload/v1611173096/default_image_01_scb2id.png'

    return{
      expand_image,
      isDefault
    }

  }
});
</script>

<style scoped>



</style>
