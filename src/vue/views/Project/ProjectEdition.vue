<template>
  <primary-content-body>
    <loading-circle v-if="loading" small />
    <div v-else-if="project" class="card-body">
      <ariane>
        <back-button :text="$t('project page')" :path="project.path" />
        <place-chip :place="project.place" />
      </ariane>

      <v-form @submit.prevent="editProject" v-model="form">
        <cud-layout>
          <template v-slot:header-title>
            {{ $t("project edition") | capitalize }}
          </template>

          <template v-slot:image>
            <image-input nullable v-model="project.image" />
          </template>

          <template v-slot:title>
            <v-text-field
              outlined
              class="rounded-lg"
              :label="$t('title') | capitalize"
              v-model="project.title"
              :rules="[rules.required[0]]"
            ></v-text-field>
          </template>

          <template v-slot:visibility>
            <visibility-input
              type="place_entity"
              v-model="project.visibility"
            />
          </template>

          <template v-slot:is_done>
            <v-switch
              color="green"
              class="mt-0 ml-2"
              v-model="project.is_done"
              :label="
                `${$t('state')} : ${
                  project.is_done
                    ? $t('completed project')
                    : $t('ongoing project')
                }` | capitalize
              "
              inset
            ></v-switch>
          </template>

          <template v-slot:description>
            <v-textarea
              outlined
              class="rounded-lg"
              :label="$t('description') | capitalize"
              name="input-7-4"
              v-model="project.description"
              :rules="[rules.required[0]]"
            ></v-textarea>
          </template>

          <template v-slot:tags>
            <tags-input
              :tags="project.tags"
              @update="
                tags => {
                  project.tags = tags;
                }
              "
              :label="$t('project tags') | capitalize"
            />
          </template>

          <template v-slot:caldates>
            <caldate-input
              :caldates="project.caldates"
              @update="
                caldates => {
                  project.caldates = caldates;
                }
              "
              :label="$t('project dates') | capitalize"
            />
          </template>

          <template v-slot:actions>
            <delete-button
              class="ma-1"
              :disabled="loading_edit"
              :loading="loading_deletion"
              :text="$t('delete project')"
              :confirmation_text="$t('Project deletion is definitive.')"
              @confirm-action="deleteProject"
            />

            <v-btn
              class="ma-1"
              type="submit"
              color="success"
              :loading="loading_edit"
              :disabled="loading_edit || !form"
            >
              {{ $t("confirm.save") }}
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
  computed,
  onMounted,
  watch
} from "@vue/composition-api";
import { useActions } from "vuex-composition-helpers";
import useFetcher from "@use/useFetcher";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import ProjectModel from "@/ts/models/projectClass";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";
import VisibilityInput from "@c/molecules/input/VisibilityInput.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import DeleteButton from "@c/atoms/app/DeleteButton.vue";
import PlaceChip from "@c/atoms/place/PlaceChip.vue";
import CudLayout from "@/vue/layouts/crud/CudLayout.vue";

export default defineComponent({
  name: "ProjectEdition",

  components: {
    TagsInput,
    ImageInput,
    CaldateInput,
    VisibilityInput,
    DeleteButton,
    PlaceChip,
    CudLayout
  },

  setup(props, { root }) {
    var form = ref(false);
    var loading_deletion = ref(false);
    var loading_edit = ref(false);

    const rules = useInputRules();

    const project_id = parseInt(root.$route.params.id);

    var { entity: project, loading } = useFetcher(
      "project/GET_PROJECT",
      project_id,
      true
    );

    const { SEND_PROJECT_EDITION } = useActions({
      SEND_PROJECT_EDITION: "project/SEND_PROJECT_EDITION"
    } as any);
    const { SEND_PROJECT_DELETION } = useActions({
      SEND_PROJECT_DELETION: "project/SEND_PROJECT_DELETION"
    } as any);

    const editProject = () => {
      loading_edit.value = true;
      SEND_PROJECT_EDITION(project.value)
        .then(() => {
          loading_edit.value = false;
          root.$router.push("/project/" + project.value.id);
        })
        .catch(() => {
          loading_edit.value = false;
        });
    };

    const deleteProject = () => {
      loading_deletion.value = true;
      SEND_PROJECT_DELETION(project.value.id)
        .then(() => {
          loading_deletion.value = false;
          root.$router.push("/place/" + project.value.place_id);
        })
        .catch(() => {
          loading_deletion.value = false;
        });
    };

    return {
      loading,
      loading_edit,
      loading_deletion,
      rules,
      form,
      project,
      deleteProject,
      editProject
    };
  }
});
</script>

<style scoped></style>
