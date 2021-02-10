<template>
  <primary-content-body>
    <div class="card-body">
      <v-form @submit.prevent="createProject" v-model="form">

        <v-row justify="center">
          <label
            for="name"
            class="name text-h5 font-weight-bold black--text mb-5"
          >
            {{ $t("actions.new", { item: $t("project") }) | camelize }}
          </label>
        </v-row>

        <v-row justify="center">
          <image-input :image="newProject.image" @update="(image) => {newProject.image = image}" />
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12" sm="6">
            <v-text-field
              class="mt-5"
              :label="$t('title') | capitalize"
              outlined
              maxlength="40"
              :rules="[rules.required[0]]"
              v-model="newProject.title"
              :disabled="loading"
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
              v-model="newProject.description"
              :disabled="loading"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12" sm="10">
            <tags-input
              :tags="newProject.tags"
              @update="(tags) => {newProject.tags = tags}"
              :label="$t('project tags') | capitalize"
            />
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-3">
          <caldate-input
            :caldates="newProject.caldates"
            @update="
              caldates => {
                newProject.caldates = caldates;
              }
            "
          />
        </v-row>

        <v-card-actions class="d-flex justify-center">
          <v-btn type="submit" :disabled="loading || !form">
            {{ $t("confirm.confirm") }}
          </v-btn>
        </v-card-actions>
      </v-form>
      <v-progress-linear
        v-if="loading"
        color="green darken-4 accent-4"
        indeterminate
        rounded
        height="6"
        class="progress"
      ></v-progress-linear>
    </div>


  </primary-content-body>
</template>

<script lang="ts">

import {ref, defineComponent, computed, onMounted, watch} from "@vue/composition-api"
import { useActions } from 'vuex-composition-helpers';
import { useInputRules } from "@/ts/functions/composition/inputRules"
import ChooseDate from "@c/organisms/app/ChooseDate.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import TagsInput from "@c/molecules/tag/TagsInput.vue";
import CaldateInput from "@c/molecules/input/CaldateInput.vue";

export default defineComponent({

  name : "ProjectCreation",

  components:{
    ChooseDate,
    ImageInput,
    TagsInput,
    CaldateInput
  },

  setup(props, {root}) {

    const rules = useInputRules()

    const { SEND_PROJECT_CREATION } = useActions({SEND_PROJECT_CREATION: 'project/SEND_PROJECT_CREATION'} as any)

    var place_id = ref(root.$route.params.place_id)
    var form = ref(false)
    var loading = ref(false)
    var newProject = ref({
      place_id: place_id.value,
      caldates: [],
      image: undefined,
      tags: []
    })

    const createProject = () => {
      loading.value = true;
      SEND_PROJECT_CREATION(newProject.value)
        .then(() => {
          loading.value = false;
          root.$router.push("/place/" + newProject.value.place_id + "/projects");
        })
        .catch(() => {
          loading.value = false;
        });
    }
    const updateTags = (tags:any) => {
      newProject.value.tags = tags;
    }


    return{
      form,
      rules,
      loading,
      newProject,
      createProject

    }

  }
});
</script>