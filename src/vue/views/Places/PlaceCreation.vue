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
            <image-input :image="newPlace.image" @update="changeImage" />
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
            <v-select
              disabled
              :items="['Public', 'Restreint', 'Privé']"
              label="Visibilité"
              outlined
              class="rounded-lg"
            ></v-select>

            <help class="mt-2 mx-2" :text="$t('help.visibility')" />
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

          <template v-slot:tags>
            <tags-input
              :tags="newPlace.tags"
              @update="updateTags"
              :label="$t('place tags') | capitalize"
            />
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

export default defineComponent({
  name: "PlaceCreation",

  components: {
    LoadingBar,
    ImageInput,
    TagsInput,
    CudLayout
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

    const changeImage = (data: string | ImageModel) => {
      newPlace.value.image = data;
    };

    const createPlace = () => {
      loading.value = true;
      SEND_PLACE_CREATION(newPlace.value)
        .then(() => {
          console.log("compo then");
          loading.value = false;
          root.$router.push("/places/myplaces");
        })
        .catch((error: any) => {
          console.log(error);
          console.log("compo catch");
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
      changeImage,
      updateTags,
      lastRoute
    };
  }
});
</script>

<style scoped></style>
