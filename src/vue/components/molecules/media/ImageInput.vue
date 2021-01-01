<template>
  
  <div>

    <div class="input-container">
      <v-img 
      class="choose-img rounded-lg elevation-3"
      :width="size"
      :height="size"
      :src="imageSrc">
      </v-img>
      <v-hover v-slot="{ hover }">
        <v-icon 
        class='edit-icon'
        :class="` elevation-${hover ? 5 : 2}`"
        @click="pickingImage = true">edit</v-icon>
      </v-hover>
    </div>

    <v-dialog v-model="pickingImage" width="unset">
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
    },
    size: {
      type:String,
      default: "150px"
    },
    icon: {
      type:Boolean,
      default:false
    }
  },

  components: {
    ChooseImage
  },

  setup(props, {emit}) {

    var pickingImage = ref(false)

    const changeImage = (img:string) => {
      emit('changeImage', img)
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

.input-container{
  width: fit-content;
  position: relative;
}

.edit-icon{
    background-color: #ffffffad;
    border: 1px solid #767676;
    border-radius: 31px;
    padding: 5px;
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #252525;
    cursor: pointer;
}


</style>