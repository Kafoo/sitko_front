<template>
  <div>
    <div class="input-container">
      <div>
        <big-avatar
          :circle="circle"
          :size="size"
          :image="value"
          :default="default_image"
        />
        <v-hover v-slot="{ hover }">
          <v-icon
            small
            class="edit-icon"
            :class="[
              circle ? 'edit-icon-circle' : '',
              ` elevation-${hover ? 5 : 2}`
            ]"
            @click="$refs.file.click()"
            >edit</v-icon
          >
        </v-hover>
        <v-hover v-if="nullable && value" v-slot="{ hover }">
          <v-icon
            small
            class="delete-icon"
            :class="[
              circle ? 'delete-icon-circle' : '',
              ` elevation-${hover ? 5 : 2}`
            ]"
            @click="$emit('input', null)"
            >close</v-icon
          >
        </v-hover>
      </div>
    </div>

    <input
      type="file"
      ref="file"
      accept="image/x-png, image/jpeg"
      style="display:none"
      @change="confirmInput"
    />

    <v-dialog persistent v-model="cropping" width="unset">
      <crop-popup
        @close="cropping = false"
        :image="customImage"
        @confirm="update"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  PropType,
  onMounted
} from "@vue/composition-api";
import store from "@/ts/store";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import ImageModel from "@/ts/models/imageClass";
import CropPopup from "@c/organisms/app/CropPopup.vue";
import BigAvatar from "../../atoms/media/BigAvatar.vue";
import i18n from "@/ts/plugins/i18n";

export default defineComponent({
  name: "ImageInput",

  props: {
    value: {
      type: [Object as () => ImageModel, String]
    },
    size: {
      type: String,
      default: "170px"
    },
    default_image: {
      type: String,
      default: undefined
    },
    circle: {
      type: Boolean,
      default: false
    },
    nullable: {
      type: Boolean,
      default: true
    }
  },

  components: {
    CropPopup,
    BigAvatar
  },

  setup(props, { emit }) {
    var cropping = ref(false);

    var customImage = ref("");

    const confirmInput = (e: any) => {
      var file = e.target.files[0];

      if (file) {        
        if (file.size < 4000000) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = e => {
            customImage.value = e.target!.result as string;
            cropping.value = true;
          };
        } else {
          store.commit("app/setAlert", {
            type: "error",
            msg: i18n.t("media.max_size", { max: "4Mo" })
          });
        }
      }

    };

    const checkDimensions = (image:string) => {

      var imageModel = new Image();
      imageModel.src = image;

      imageModel.onload = function() {
          // access image size here

          if (imageModel.width > 2000) {
            const ratio = imageModel.width/imageModel.height
            imageModel.width = 2000
            imageModel.height = imageModel.width/ratio
          }


          image = imageModel.src;


      };

      return image

    }

    const update = (newImage: string) => {

      newImage = checkDimensions(newImage)

      emit("input", newImage);
    };

    var imageSrc = computed(() => {
      if (typeof props.value === "string") {
        return props.value;
      } else if (props.value) {
        return props.value.medium;
      } else if (!props.value) {
        const defaultModel = new ImageModel(props.default_image);
        return defaultModel.medium;
      }
    });

    const rules = ref({
      image: useInputRules().image
    });

    return {
      rules,
      confirmInput,
      imageSrc,
      cropping,
      customImage,
      update
    };
  }
});
</script>

<style scoped>
.input-container {
  width: fit-content;
  position: relative;
}

.edit-icon {
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

.delete-icon {
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
