<template>
  <div>
    <div class="input-container">
      <div>
        <big-avatar
          :circle="circle"
          :size="size"
          :image="imageSrc"
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
        <v-hover v-if="nullable && image" v-slot="{ hover }">
          <v-icon
            small
            class="delete-icon"
            :class="[
              circle ? 'delete-icon-circle' : '',
              ` elevation-${hover ? 5 : 2}`
            ]"
            @click="$emit('update', null)"
            >close</v-icon
          >
        </v-hover>
      </div>
    </div>

    <input
      type="file"
      ref="file"
      accept=".jpg, .png"
      style="display:none"
      @change="confirmInput"
    />

    <v-dialog v-model="cropping" width="unset">
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
import { useInputRules } from "@/ts/functions/composition/inputRules";
import ImageModel from "@/ts/models/imageClass";
import CropPopup from "@c/organisms/app/CropPopup.vue";
import BigAvatar from "../../atoms/media/BigAvatar.vue";

export default defineComponent({
  name: "ImageInput",

  props: {
    image: {
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

      if (file.size < 4000000) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
          customImage.value = e.target!.result as string;
          cropping.value = true;
        };
      } else {
        console.log("nope");
      }
    };

    const update = () => {
      emit("update", customImage.value);
    };

    const imageSrc = computed(() => {
      if (typeof props.image === "string") {
        return props.image;
      } else if (props.image) {
        return props.image.medium;
      } else if (!props.image) {
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
