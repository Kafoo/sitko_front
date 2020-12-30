<template>

  <div>

    <v-card v-if="!cropping">

      <close-dialog @action="$emit('close')"/>

      <div class="d-flex justify-center">

        <v-hover 
        v-for="(img, index) in genericImages"
        :key="index">
          <template v-slot:default="{ hover }">
            <v-img 
            class="c-pointer generic-image flex-grow-0 ma-3 rounded-lg" 
            :class="`elevation-${hover ? 5 : 2}`"
            width="100px" 
            :src="img.thumb"
            @click="selectDefault(index)">
            </v-img>
          </template>
        </v-hover>

      </div>

      <div class="d-flex justify-center">

      <input 
      type="file" 
      ref="file" 
      style="display:none" 
      @change="changeImage"/>

        <v-btn
          class="input-button flex-grow-0 mb-3"
          outlined
          color="success"
          @click="$refs.file.click()"
        >
          <v-icon left dark>
            cloud_upload
          </v-icon>
          Télécharger
        </v-btn>

      </div>
    </v-card>

    <crop-popup 
    @toogle="cropping = false" 
    :image="customImage"
    @confirm="valideCustomImage" v-else/>

  </div>

</template>

<script lang="ts">

import { defineComponent, ref } from "@vue/composition-api"
import {useInputRules} from "@/ts/functions/composition/inputRules"
import CropPopup from "@c/organisms/app/CropPopup.vue";
import CloseDialog from "@c/atoms/app/CloseDialog.vue";
import { Emit } from "vue-property-decorator";
import Image from "@/ts/models/imageClass"

export default defineComponent({

  name : "ChooseImage",

  components: { CropPopup, CloseDialog },

  setup(props, {emit}) {

    var cropping = ref(false)

    var customImage = ref("")

    var pickingImage = ref(false)

    const genericImages = [
      new Image(0),
      new Image(1)
    ]

    const valideCustomImage = (img:string) => {
      emit('change', img)
    }

    const changeImage = (e:any) => {

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = e => {
          // emit('change', e.target!.result as string)
          customImage.value =  e.target!.result as string
          cropping.value = true
        };
    }

    const selectDefault = (index:number) => {
      emit('change', genericImages[index])
    }

    const rules = ref({
      image: useInputRules().image,
  })

    return{
      rules,
      pickingImage,
      cropping,
      changeImage,
      genericImages,
      customImage,
      valideCustomImage,
      selectDefault
    }

  }
});
</script>

<style scoped>

.choose-img{
  width: 50px;
  cursor: pointer;
}

.input-button{
  width: 200px;
  text-align: center;
}


</style>
