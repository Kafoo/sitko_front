<template>
  
  <div>

    <div class="input-container">
      <div v-if="!image.thumb">
        <v-btn @click="pickingImage = true">ajouter une image</v-btn>
      </div>
      <div v-else>
        <v-img
        class="choose-img rounded-lg elevation-3"
        :class="circle?'rounded-circle':'rounded-lg'"
        :width="size"
        :height="size"
        :src="imageSrc">
        </v-img>
        <v-hover v-slot="{ hover }">
          <v-icon 
          class='edit-icon'
          :class="[circle?'edit-icon-circle':'', ` elevation-${hover ? 5 : 2}`]"
          @click="pickingImage = true">edit</v-icon>
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
import ChooseImage from "@c/molecules/media/ChooseImage.vue"
import ImageModel from "@/ts/models/imageClass"

export default defineComponent({

  name : "ImageInput",

  props : {
    image: {
      type: [Object, String],
      default: ():ImageModel=>{return new ImageModel}
    },
    size: {
      type:String,
      default: "150px"
    },
    circle: {
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
      }else if (typeof props.image === "object"){
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

.edit-icon-circle{

    bottom: 0px;
    right: 0px;
}

</style>