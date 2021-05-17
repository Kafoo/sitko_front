<template>
  <primary-content-body>
    <div class="card-body">
      <ariane>
        <back-button v-if="lastRoute" :path="lastRoute.path" />
      </ariane>

      <v-form @submit.prevent="createPlace" v-model="form">
        <cud-layout>
          <template v-slot:header-title>
            {{ $t("actions.new.place") | camelize }}
          </template>

          <template v-slot:image>
            <image-input v-model="newPlace.image" />
          </template>

          <template v-slot:title>
            <v-text-field
              :label="$t('name') | capitalize"
              outlined
              maxlength="40"
              :rules="[rules.required[0]]"
              v-model="newPlace.name"
              :disabled="loading"
            ></v-text-field>
          </template>

          <template v-slot:visibility>
            <visibility-input type="place" v-model="newPlace.visibility" />
          </template>

          <template v-slot:description>
            <v-textarea
              :label="$t('description') | capitalize"
              outlined
              rows="6"
              :rules="[rules.required[0]]"
              v-model="newPlace.description"
              :disabled="loading"
            ></v-textarea>
          </template>

          <template v-slot:location>
            <location-input v-model="newPlace.location" />
          </template>

          <template v-slot:tags>
            <tags-input
              :tags="newPlace.tags"
              @update="updateTags"
              :label="$t('place tags') | capitalize"
            />
          </template>

          <template v-slot:contact_infos>
            <contact-infos-input v-model="newPlace.contact_infos" class="mt-5"/>
          </template>

          <template v-slot:actions>
            <v-btn
              type="submit"
              color="success"
              :disabled="loading || !form"
              :loading="loading"
            >
              {{ $t("confirm.confirm") }}
            </v-btn>
          </template>
        </cud-layout>
      </v-form>
    </div>
  </primary-content-body>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted,
  computed,
  Ref
} from "@vue/composition-api";
import { useActions, useGetters } from "vuex-composition-helpers";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import LoadingBar from "@c/atoms/app/LoadingBar.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import ImageModel from "@/ts/models/imageClass";
import PlaceModel from "@/ts/models/placeClass";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import TagModel from "@/ts/models/tagClass";
import CudLayout from "@/vue/layouts/crud/CudLayout.vue";
import VisibilityInput from "@c/molecules/input/VisibilityInput.vue";
import LocationInput from "@/vue/components/molecules/input/LocationInput.vue";
import ContactInfosInput from '@/vue/components/molecules/input/ContactInfosInput.vue';

export default defineComponent({
  name: "PlaceCreation",

  components: {
    LoadingBar,
    ImageInput,
    TagsInput,
    CudLayout,
    VisibilityInput,
    LocationInput,
    ContactInfosInput
  },

  setup(props, { root }) {
    const { lastRoute } = useGetters({ lastRoute: "app/lastRoute" } as any);

    // PLACE //
    var newPlace: Ref<PlaceModel> = ref(new PlaceModel());

    var form = ref(false);
    var loading = ref(false);
    const rules = useInputRules();

    const { SEND_PLACE_CREATION } = useActions({
      SEND_PLACE_CREATION: "place/SEND_PLACE_CREATION"
    } as any);

    const validateUrl = (url?: string) => {
      if (url) {
        let regex = /^(http|https)/;
        if (url.length > 3 && !url.match(regex)) {
          return "http://" + url;
        } else {
          return url;
        }
      } else {
        return undefined;
      }
    };

    const validateContactInfos = () => {
      var infos = newPlace.value.contact_infos;
      infos.facebook = validateUrl(infos.facebook);
      infos.instagram = validateUrl(infos.instagram);
      infos.youtube = validateUrl(infos.youtube);
    };

    const createPlace = () => {
      loading.value = true;
      validateContactInfos()
      SEND_PLACE_CREATION(newPlace.value)
        .then(() => {
          loading.value = false;
          root.$router.push("/places/myplaces");
        })
        .catch((error: any) => {
          loading.value = false;
        });
    };

    const updateTags = (tags: Array<TagModel>) => {
      newPlace.value.tags = tags;
    };

    var showCrop = ref(false);

    return {
      createPlace,
      rules,
      loading,
      form,
      newPlace,
      showCrop,
      updateTags,
      lastRoute
    };
  }
});
</script>

<style scoped></style>
