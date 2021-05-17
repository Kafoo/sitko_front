<template>
  <primary-content-body>
    <loading-circle v-if="loading" small />
    <div v-else-if="place" class="card-body">
      <ariane>
        <back-button :text="$t('place page')" :path="place.path" />
      </ariane>

      <v-form @submit.prevent="editPlace" v-model="form">
        <cud-layout>
          <template v-slot:header-title>
            {{ $t("place edition") | capitalize }}
          </template>

          <template v-slot:image>
            <image-input v-model="place.image" />
          </template>

          <template v-slot:title>
            <v-text-field
              :label="$t('name') | capitalize"
              outlined
              maxlength="40"
              :rules="[rules.required[0]]"
              v-model="place.name"
              :disabled="loading_edit"
            ></v-text-field>
          </template>

          <template v-slot:visibility>
            <visibility-input type="place" v-model="place.visibility" />
          </template>

          <template v-slot:description>
            <v-textarea
              :label="$t('description') | capitalize"
              outlined
              rows="6"
              :rules="[rules.required[0]]"
              v-model="place.description"
              :disabled="loading_edit"
            ></v-textarea>
          </template>

          <template v-slot:location>
            <location-input v-model="place.location" />
          </template>

          <template v-slot:tags>
            <tags-input
              :tags="place.tags"
              @update="
                tags => {
                  place.tags = tags;
                }
              "
              :label="$t('place tags') | capitalize"
            />
          </template>

          <template v-slot:contact_infos>
            <contact-infos-input v-model="place.contact_infos" class="mt-5"/>
          </template>

          <template v-slot:actions>
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
              {{ $t("confirm.edit") }}
            </v-btn>
          </template>

        </cud-layout>
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
import DeleteButton from "@c/atoms/app/DeleteButton.vue";
import { useGetters, useActions } from "vuex-composition-helpers";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import useFetcher from "@use/useFetcher";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import Image from "@/ts/models/imageClass";
import PlaceModel from "@/ts/models/placeClass";
import ConfirmDialog from "@c/molecules/app/ConfirmDialog.vue";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import CudLayout from "@/vue/layouts/crud/CudLayout.vue";
import VisibilityInput from "@c/molecules/input/VisibilityInput.vue";
import LocationInput from "@/vue/components/molecules/input/LocationInput.vue";
import ContactInfosInput from '@/vue/components/molecules/input/ContactInfosInput.vue';


export default defineComponent({
  components: {
    PrimaryContentBody,
    ImageInput,
    ConfirmDialog,
    TagsInput,
    DeleteButton,
    CudLayout,
    VisibilityInput,
    LocationInput,
    ContactInfosInput
  },

  name: "PlaceEdition",

  setup(props, { root }) {
    var loading_deletion = ref(false);
    var loading_edit = ref(false);

    var form = ref(false);
    const rules = useInputRules();

    const { SEND_PLACE_EDITION } = useActions({
      SEND_PLACE_EDITION: "place/SEND_PLACE_EDITION"
    } as any);
    const { SEND_PLACE_DELETION } = useActions({
      SEND_PLACE_DELETION: "place/SEND_PLACE_DELETION"
    } as any);

    const place_id = parseInt(root.$route.params.id);

    var { entity: place, loading } = useFetcher(
      "place/GET_PLACE",
      {action_param:place_id,
      copy:true}
    );

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
      var infos = place.value.contact_infos;
      infos.facebook = validateUrl(infos.facebook);
      infos.instagram = validateUrl(infos.instagram);
      infos.youtube = validateUrl(infos.youtube);
    };

    const editPlace = () => {
      loading_edit.value = true;
      validateContactInfos()
      SEND_PLACE_EDITION(place.value)
        .then(() => {
          loading_edit.value = false;
          root.$router.push("/place/" + place_id);
        })
        .catch(() => {
          loading_edit.value = false;
        });
    };

    const deletePlace = () => {
      loading_deletion.value = true;
      SEND_PLACE_DELETION(place_id)
        .then(() => {
          loading_deletion.value = false;
          root.$router.push("/places/myplaces");
        })
        .catch(() => {
          loading_deletion.value = false;
        });
    };

    return {
      loading_edit,
      loading_deletion,
      loading,
      form,
      rules,
      place,
      editPlace,
      deletePlace
    };
  }
});
</script>
