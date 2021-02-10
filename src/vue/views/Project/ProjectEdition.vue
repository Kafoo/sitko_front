<template>
  <primary-content-body>
    <loading-circle v-if="loading" small/>
    <div v-else-if="project" class="card-body py-0">
      <v-form @submit.prevent="editProject" v-model="form">

        <v-row justify="center">
          <label
            for="name"
            class="name text-h5 font-weight-bold black--text mb-3"
          >
            {{$t('project edition') | capitalize}}
          </label>
        </v-row>

        <v-row justify="center">
            <image-input
              nullable
              :image="project.image"
              @update="
                image => {
                  project.image = image;
                }
              "
            />
        </v-row>

        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-text-field
              outlined
              :label="$t('title') | capitalize"
              v-model="project.title"
              :rules="[rules.required[0]]"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12" sm="10">
            <v-textarea
              outlined
              :label="$t('description') | capitalize"
              name="input-7-4"
              v-model="project.description"
              :rules="[rules.required[0]]"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12">
            <tags-input
              :tags="project.tags"
              @update="
                tags => {
                  project.tags = tags;
                }
              "
              :label="$t('project tags') | capitalize"
            />
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-3">
          <caldate-input
            :caldates="project.caldates"
            @update="
              caldates => {
                project.caldates = caldates;
              }
            "
          />
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>

          <delete-button
            :disabled="loading_edit"
            :loading="loading_deletion"
            :text="$t('delete project')"
            :confirmation_text="$t('Project deletion is definitive.')"
            @confirm-action="deleteProject"
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
import { defineComponent, ref, computed, onMounted, watch } from "@vue/composition-api";
import { useActions } from "vuex-composition-helpers";
import useProjectGetter from "@use/useProjectGetter";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import ProjectModel from "@/ts/models/projectClass";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import DeleteButton from "@c/atoms/app/DeleteButton.vue"

export default defineComponent({
  name: "ProjectEdition",

  components: {
    TagsInput,
    ImageInput,
    CaldateInput,
    DeleteButton
  },

  setup(props, {root} ) {

    var form = ref(false);
    var loading_deletion = ref(false);
    var loading_edit = ref(false);

    const rules = useInputRules();

    const project_id = parseInt(root.$route.params.id)
    var { project, loading } = useProjectGetter(project_id, true);

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
