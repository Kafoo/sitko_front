<template>
  
  <div>

    <div class="input-container">
      <div>
        <v-img
        class="choose-img rounded-lg elevation-3"
        :class="circle?'rounded-circle':'rounded-lg'"
        :width="size"
        :height="size"
        :src="imageSrc">
        </v-img>
        <v-hover v-slot="{ hover }">
          <v-icon 
          small
          class='edit-icon'
          :class="[circle?'edit-icon-circle':'', ` elevation-${hover ? 5 : 2}`]"
          @click="pickingImage = true">edit</v-icon>
        </v-hover>
        <v-hover 
        v-if="deletable"
        v-slot="{ hover }">
          <v-icon 
          small
          class='delete-icon'
          :class="[circle?'delete-icon-circle':'', ` elevation-${hover ? 5 : 2}`]"
          @click="$emit('changeImage', undefined)">close</v-icon>
        </v-hover>
      </div>
    </div>

    <v-dialog v-model="pickingImage" width="unset">
      <choose-image 
      @change="changeImage" 
      @close="pickingImage = false"/>
    </v-dialog>

  </div>


</template>

<script lang="ts">

import { computed, defineComponent, ref, PropType, onMounted } from "@vue/composition-api"
import {useInputRules} from "@/ts/functions/composition/inputRules"
import ChooseImage from "@c/organisms/media/ChooseImage.vue"
import ImageModel from "@/ts/models/imageClass"

export default defineComponent({

  name : "ImageInput",

  props : {
    image: {
      type: [Object as ()=>ImageModel, String],
      default: undefined
    },
    size: {
      type:String,
      default: "150px"
    },
    default_image: {
      type:String,
      default: undefined
    },
    circle: {
      type:Boolean,
      default:false
    },
    deletable: {
      type:Boolean,
      default:false
    },
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
      }else{
        const defaultModel = new ImageModel(props.default_image)
        return defaultModel.thumb
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



.delete-icon{
    background-color: #ffffffad;
    border: 1px solid #767676;
    border-radius: 31px;
    padding: 5px;
    position: absolute;
    top: 3px;
    right: 3px;
    color: #000000;
    cursor: pointer;
}

</style>