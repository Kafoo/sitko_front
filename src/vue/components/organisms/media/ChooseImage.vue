<template>
  <div>
    <v-card v-if="!cropping" class="pa-8">
      <close-dialog @action="close" />

      <div class="d-flex justify-center">
        <div v-for="(img, index) in genericImages" :key="index">
          <v-hover v-slot="{ hover }">
            <v-img
              class="c-pointer generic-image flex-grow-0 ma-3 rounded-lg"
              :class="`elevation-${hover ? 5 : 2}`"
              width="100px"
              height="100px"
              :src="img.thumb"
              @click="selectDefault(index)"
            >
            </v-img>
          </v-hover>
        </div>
      </div>

      <div class="d-flex flex-column align-center">
        <input
          type="file"
          ref="file"
          accept=".jpg, .png"
          style="display:none"
          @change="changeImage"
        />

        <v-btn
          class="input-button flex-grow-0 mt-2"
          color="success"
          @click="$refs.file.click()"
        >
          <v-icon left dark>
            cloud_upload
          </v-icon>
          <span>
            <!-- TOTRANSLATE -->
            Télécharger
          </span>
        </v-btn>

        <v-alert v-if="error" dense text outlined type="error">
          {{ error }}
        </v-alert>
      </div>
    </v-card>

    <crop-popup
      v-else
      @toogle="cropping = false"
      :image="customImage"
      @confirm="valideCustomImage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import CropPopup from "@c/organisms/app/CropPopup.vue";
import CloseDialog from "@c/atoms/app/CloseDialog.vue";
import { Emit } from "vue-property-decorator";
import Image from "@/ts/models/imageClass";

export default defineComponent({
  name: "ChooseImage",

  components: { CropPopup, CloseDialog },

  setup(props, { emit }) {
    var cropping = ref(false);

    var customImage = ref("");

    var pickingImage = ref(false);

    var error = ref("");

    const genericImages = [new Image(0), new Image(1)];

    const valideCustomImage = (img: string) => {
      close();
      emit("change", img);
    };

    const changeImage = (e: any) => {
      var file = e.target.files[0];

      if (file.size < 4000000) {
        error.value = "";
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
          // emit('change', e.target!.result as string)
          customImage.value = e.target!.result as string;
          cropping.value = true;
        };
      } else {
        // TOTRANSLATE
        error.value = "Poids max : 4Mo";
      }
    };

    const close = () => {
      error.value = "";
      emit("close");
    };

    const selectDefault = (index: number) => {
      close();
      emit("change", genericImages[index]);
    };

    const rules = ref({
      image: useInputRules().image
    });

    return {
      rules,
      pickingImage,
      cropping,
      changeImage,
      genericImages,
      customImage,
      valideCustomImage,
      selectDefault,
      error,
      close
    };
  }
});
</script>

<style scoped>
.choose-img {
  width: 50px;
  cursor: pointer;
}

.input-button {
  width: 200px;
  text-align: center;
}
</style>
