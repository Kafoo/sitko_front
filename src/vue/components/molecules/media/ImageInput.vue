<template>
  
  <div>

    <v-btn icon fab>
      <v-img 
      class="choose-img"
      :src="imageSrc" 
      @click="pickingImage = true"></v-img>
    </v-btn>

    <v-dialog v-model="pickingImage" width="80%">
      <choose-image 
      @change="changeImage" 
      @close="pickingImage = false"/>
    </v-dialog>

  </div>


</template>

<script lang="ts">

import { computed, defineComponent, ref, PropType } from "@vue/composition-api"
import {useInputRules} from "@/ts/functions/composition/inputRules"
import ChooseImage from "@c/molecules/media/ChooseImage.vue"
import ImageModel from "@/ts/models/imageClass"

export default defineComponent({

  name : "ImageInput",

  props : {
    image: {
      type: [Object, String],
      default: new ImageModel
    }
  },

  components: {
    ChooseImage
  },

  setup(props, {emit}) {

    var pickingImage = ref(false)

    const changeImage = (img:string) => {
      emit('changeImage', img)
      pickingImage.value = false
    }

    const imageSrc = computed(() => {
      if (typeof props.image === "string") {
        return props.image
      }else if (props.image){
        return props.image.thumb
      }
    })

    const rules = ref({
      image: useInputRules().image,
    })

      return{
        rules,
        pickingImage,
        changeImage,
        imageSrc
      }

  }
});
</script>

<style scoped>

.choose-img{
  width: 50px;
  cursor: pointer;
}

</style>
