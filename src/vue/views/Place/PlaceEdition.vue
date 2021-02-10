<template>
  <primary-content-body>
    <div v-if="!loading && place" class="pa-0">
      <v-form @submit.prevent="editPlace" v-model="form">

        <v-row justify="center">
          <label
            for="name"
            class="name text-h5 font-weight-bold black--text mb-5"
          >
            {{$t('place edition') | capitalize}}
          </label>
        </v-row>

        <v-row justify="center">
          <image-input
            :image="place.image"
            @update="changeImage"
          />
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12" sm="6">
            <v-text-field
              class="mt-5"
              :label="$t('name') | capitalize"
              outlined
              maxlength="40"
              :rules="[rules.required[0]]"
              v-model="place.name"
              :disabled="loading_edit"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12" sm="10">
            <v-textarea
              :label="$t('description') | capitalize"
              outlined
              rows="6"
              :rules="[rules.required[0]]"
              v-model="place.description"
              :disabled="loading_edit"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12" class="mb-4">
            <tags-input
              :tags="place.tags"
              @update="
                tags => {
                  place.tags = tags;
                }
              "
              :label="$t('place tags') | capitalize"
            />
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>

          <delete-button
            :disabled="loading_edit"
            :loading="loading_deletion"
            :text="$t('delete place')"
            :confirmation_text="$t('Place deletion is definitive.')"
            @confirm-action="deletePlace"
          />

          <v-btn 
          type="submit" 
          color="success" 
          :loading="loading_edit" 
          :disabled="loading_edit || !form"
          >
            {{$t('confirm.edit')}}
          </v-btn>
        </v-card-actions>
      </v-form>

    </div>
  </primary-content-body>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  Ref,
  computed
} from "@vue/composition-api";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import DeleteButton from "@c/atoms/app/DeleteButton.vue"
import { useGetters, useActions } from "vuex-composition-helpers";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import usePlaceGetter from "@use/usePlaceGetter";
import LoadingBar from "@c/atoms/app/LoadingBar.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import Image from "@/ts/models/imageClass";
import PlaceModel from "@/ts/models/placeClass";
import ConfirmDialog from "@c/molecules/app/ConfirmDialog.vue";
import TagsInput from "@c/molecules/tag/TagsInput.vue";

export default defineComponent({
  components: {
    PrimaryContentBody,
    LoadingBar,
    ImageInput,
    ConfirmDialog,
    TagsInput,
    DeleteButton
  },

  name: "PlaceEdition",

  setup(props, {root}) {

    var loading_deletion = ref(false);
    var loading_edit = ref(false)

    var form = ref(false);
    const rules = useInputRules();

    const { SEND_PLACE_EDITION } = useActions({
      SEND_PLACE_EDITION: "place/SEND_PLACE_EDITION"
    } as any);
    const { SEND_PLACE_DELETION } = useActions({
      SEND_PLACE_DELETION: "place/SEND_PLACE_DELETION"
    } as any);

    const place_id = parseInt(root.$route.params.id)
    var { place, loading } = usePlaceGetter(place_id, true);

    const editPlace = () => {
      loading_edit.value = true;
      SEND_PLACE_EDITION(place.value)
        .then(() => {
          loading_edit.value = false;
          root.$router.push("/place/" + place.value.id);
        })
        .catch(() => {
          loading_edit.value = false;
        });
    };

    const deletePlace = () => {
      loading_deletion.value = true;
      SEND_PLACE_DELETION(place.value.id)
        .then(() => {
          loading_deletion.value = false;
          root.$router.push("/places/myplaces");
        })
        .catch(() => {
          loading_deletion.value = false;
        });
    };

    const changeImage = (data: string | Image) => {
      place.value.image = data;
    };

    return {
      loading_edit,
      loading_deletion,
      loading,
      form,
      rules,
      place,
      changeImage,
      editPlace,
      deletePlace
    };
  }
});
</script>
