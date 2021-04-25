<template>
  <primary-content-body>
    <div class="card-body">
      <ariane>
        <back-button v-if="lastRoute" :path="lastRoute.path" />
      </ariane>

      <v-form @submit.prevent="createEvent" v-model="form">
        <cud-layout>
          <template v-slot:header-title>
            {{ $t("actions.new.event") | camelize }}
          </template>

          <template v-slot:image>
            <image-input v-model="newEvent.image" />
          </template>

          <template v-slot:title>
            <v-text-field
              :label="$t('title') | capitalize"
              outlined
              maxlength="40"
              :rules="[rules.required[0]]"
              v-model="newEvent.title"
              :disabled="loading"
            ></v-text-field>
          </template>

          <template v-slot:visibility>
            <visibility-input type="place_entity" v-model="newEvent.visibility"/>
          </template>

          <template v-slot:description>
            <v-textarea
              :label="$t('description') | capitalize"
              outlined
              rows="6"
              :rules="[rules.required[0]]"
              v-model="newEvent.description"
              :disabled="loading"
            ></v-textarea>
          </template>

          <template v-slot:tags>
            <tags-input
              :tags="newEvent.tags"
              @update="
                tags => {
                  newEvent.tags = tags;
                }
              "
              :label="$t('event tags') | capitalize"
            />
          </template>

          <template v-slot:caldates>
            <caldate-input
              :caldates="newEvent.caldates"
              @update="
                caldates => {
                  newEvent.caldates = caldates;
                }
              "
              :label="$t('event dates') | capitalize"
            />
          </template>

          <template v-slot:actions>
            <v-btn
              type="submit"
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
  computed,
  onMounted,
  watch
} from "@vue/composition-api";
import { useActions, useGetters } from "vuex-composition-helpers";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import ChooseDate from "@c/organisms/app/ChooseDate.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";
import BackButton from "@c/atoms/app/BackButton.vue";
import CudLayout from "@/vue/layouts/crud/CudLayout.vue";
import VisibilityInput from "@c/molecules/input/VisibilityInput.vue";
import EventModel from "@/ts/models/eventClass"
import CaldateModel from "@/ts/models/caldateClass"
import store from '@/ts/store';

export default defineComponent({
  name: "EventCreation",

  components: {
    ChooseDate,
    ImageInput,
    TagsInput,
    CaldateInput,
    BackButton,
    CudLayout,
    VisibilityInput
  },

  setup(props, { root }) {
    const { lastRoute } = useGetters({ lastRoute: "app/lastRoute" } as any);

    const rules = useInputRules();

    const { SEND_EVENT_CREATION } = useActions({
      SEND_EVENT_CREATION: "event/SEND_EVENT_CREATION"
    } as any);

    var place_id = ref(root.$route.params.place_id);
    var form = ref(false);
    var loading = ref(false);
    var newEvent = ref(new EventModel({place_id: place_id.value}));

    const createEvent = () => {

      if (!newEvent.value.caldates.length) {
        store.commit('app/setAlert', {
          type:'error', 
          msg:root.$i18n.t('Please select at least 1 date for the event')
        })
      } else {  
        loading.value = true;
        SEND_EVENT_CREATION(newEvent.value)
          .then(() => {
            loading.value = false;
            root.$router.push(
              "/place/" + newEvent.value.place_id + "/events"
            );
          })
          .catch(() => {
            loading.value = false;
          });
      }

    };
    const updateTags = (tags: any) => {
      newEvent.value.tags = tags;
    };

    return {
      form,
      rules,
      loading,
      newEvent,
      createEvent,
      lastRoute
    };
  }
});
</script>
