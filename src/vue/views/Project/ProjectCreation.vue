<template>
  <primary-content-body>
    <div class="card-body">
      <ariane>
        <back-button v-if="lastRoute" :path="lastRoute.path" />
      </ariane>

      <v-form @submit.prevent="createProject" v-model="form">
        <cud-layout>
          <template v-slot:header-title>
            {{ $t("actions.new.project") | camelize }}
          </template>

          <template v-slot:image>
            <image-input v-model="newProject.image" />
          </template>

          <template v-slot:title>
            <v-text-field
              :label="$t('title') | capitalize"
              outlined
              maxlength="40"
              :rules="[rules.required[0]]"
              v-model="newProject.title"
              :disabled="loading"
            ></v-text-field>
          </template>

          <template v-slot:visibility>
            <visibility-input type="place_entity" v-model="newProject.visibility"/>
          </template>

          <template v-slot:is_done>
            <v-switch
              color="green"
              class="mt-0 ml-2"
              v-model="newProject.is_done"
              :label="`${$t('state')} : ${newProject.is_done?$t('completed project'):$t('ongoing project')}` | capitalize"
              inset
            ></v-switch>
          </template>

          <template v-slot:description>
            <v-textarea
              :label="$t('description') | capitalize"
              outlined
              rows="6"
              :rules="[rules.required[0]]"
              v-model="newProject.description"
              :disabled="loading"
            ></v-textarea>
          </template>

          <template v-slot:tags>
            <tags-input
              :tags="newProject.tags"
              @update="
                tags => {
                  newProject.tags = tags;
                }
              "
              :label="$t('project tags') | capitalize"
            />
          </template>

          <template v-slot:caldates>
            <caldate-input
              :caldates="newProject.caldates"
              @update="
                caldates => {
                  newProject.caldates = caldates;
                }
              "
              :label="$t('project dates') | capitalize"
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
import ImageInput from "@c/molecules/media/ImageInput.vue";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";
import BackButton from "@c/atoms/app/BackButton.vue";
import CudLayout from "@/vue/layouts/crud/CudLayout.vue";
import VisibilityInput from "@c/molecules/input/VisibilityInput.vue";
import ProjectModel from "@/ts/models/projectClass"

export default defineComponent({
  name: "ProjectCreation",

  components: {
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

    const { SEND_PROJECT_CREATION } = useActions({
      SEND_PROJECT_CREATION: "project/SEND_PROJECT_CREATION"
    } as any);

    var place_id = ref(root.$route.params.place_id);
    var form = ref(false);
    var loading = ref(false);
    var newProject = ref(new ProjectModel({place_id: place_id.value}));

    const createProject = () => {
      loading.value = true;
      SEND_PROJECT_CREATION(newProject.value)
        .then(() => {
          loading.value = false;
          root.$router.push(
            "/place/" + newProject.value.place_id + "/projects"
          );
        })
        .catch(() => {
          loading.value = false;
        });
    };
    const updateTags = (tags: any) => {
      newProject.value.tags = tags;
    };

    return {
      form,
      rules,
      loading,
      newProject,
      createProject,
      lastRoute
    };
  }
});
</script>
