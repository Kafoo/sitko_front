<template>
  <primary-content-body>
    <div class="pa-3">
      <v-row justify="center">
        <page-title>{{$t('profil edition') | capitalize}}</page-title>
      </v-row>
      <v-form v-model="form">
        <v-row justify="center" class="my-4">
          <image-input
            nullable
            circle
            default_image="avatar"
            v-model="editedUser.image"
          />
        </v-row>

        <v-row dense>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              outlined
              autocomplete="disabled"
              v-model="editedUser.name"
              :rules="[rules.required[0]]"
              :label="firstNameLabel"
              maxlength="20"
              required
              :disabled="loading"
            ></v-text-field>
          </v-col>

        <v-row dense>
          <v-col cols="12">
            <v-alert v-if="errors.name" dense outlined type="error">
              {{ errors.name[0] }}
            </v-alert>
          </v-col>
        </v-row>

          <v-spacer></v-spacer>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              outlined
              autocomplete="disabled"
              v-model="editedUser.last_name"
              :label="lastNameLabel"
              maxlength="20"
              :disabled="loading"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12" class="mb-5">
            <tags-input
              :tags="editedUser.tags"
              :label="$t('my tags') | capitalize"
              @update="
                tags => {
                  editedUser.tags = tags;
                }
              "
            />
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" sm="6" md="6">
            <v-select
            return-object
            v-model="editedUser.home_type"
            :items="home_types"
            item-value="id"
            label="Habitat"
            outlined
            class="rounded-lg"
            >
              <template slot="selection" slot-scope="data">
                <v-icon left>{{data.item.icon}}</v-icon>
                {{ data.item.translated_name | capitalize }}
              </template>
              <template slot="item" slot-scope="data">
                <v-icon left>{{data.item.icon}}</v-icon>
                {{ data.item.translated_name | capitalize }}
              </template>
            </v-select>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="12" sm="6" md="6">
            <v-select
            return-object
            v-model="editedUser.user_type"
            :items="user_types"
            item-value="id"
            label="Statut"
            outlined
            class="rounded-lg"
            >
              <template slot="selection" slot-scope="data">
                <v-icon left>{{data.item.icon}}</v-icon>
                {{ data.item.translated_name | capitalize }}
              </template>
              <template slot="item" slot-scope="data">
                <v-icon left>{{data.item.icon}}</v-icon>
                {{ data.item.translated_name | capitalize }}
              </template>
            </v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-textarea
              label="Ma bio"
              outlined
              rows="6"
              v-model="editedUser.bio"
              :disabled="loading"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-textarea
              label="Mes attentes sur Sitko"
              outlined
              rows="4"
              v-model="editedUser.expectations"
              :disabled="loading"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              append-icon="facebook"
              outlined
              autocomplete="disabled"
              v-model="editedUser.contact_infos.facebook"
              :rules="[rules.url[0]]"
              label="Facebook"
              :disabled="loading"
            ></v-text-field>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              append-icon="camera"
              outlined
              autocomplete="disabled"
              v-model="editedUser.contact_infos.instagram"
              :rules="[rules.url[0]]"
              label="Instagram"
              :disabled="loading"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
            append-icon="play_arrow"
              outlined
              autocomplete="disabled"
              v-model="editedUser.contact_infos.youtube"
              :rules="[rules.url[0]]"
              label="Youtube"
              :disabled="loading"
            ></v-text-field>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              append-icon="email"
              outlined
              autocomplete="disabled"
              v-model="editedUser.contact_infos.email"
              :rules="[rules.email[0]]"
              label="Email"
              required
              :disabled="loading"
            ></v-text-field>
          </v-col>

        </v-row>

        <v-row justify="end">
          <v-col class="d-flex flex-column" cols="12" sm="auto">
            <v-btn
              class="d-block mb-4"
              color="success"
              :disabled="!modified || !form || loading"
              @click="editUser"
            >
              {{ $t("save") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>

    </div>

    <loading-bar :loading="loading" />
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
import { useGetters, useActions } from "vuex-composition-helpers";
import { useInputRules } from "@/ts/functions/composition/inputRules";
import { capitalize } from "@/ts/functions/vueFilters";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import LoadingBar from "@c/atoms/app/LoadingBar.vue";
import PageTitle from "@c/atoms/app/PageTitle.vue";
import ConfirmDialog from "@c/molecules/app/ConfirmDialog.vue";
import ImageInput from "@c/molecules/media/ImageInput.vue";
import UserModel from "@/ts/models/userClass";
import ImageModel from "@/ts/models/imageClass";
import TagsInput from "@c/molecules/tag/TagsInput.vue";

export default defineComponent({
  name: "Profil",

  components: {
    PrimaryContentBody,
    PageTitle,
    ConfirmDialog,
    ImageInput,
    LoadingBar,
    TagsInput
  },

  setup(props, { root }) {
    const rules = useInputRules();

    var modified = ref(false);
    var form = ref(false);
    var dialog = ref(false);
    var loading = ref(false);

    const { app_data } = useGetters({app_data: 'app/app_data'} as any)
    const home_types = app_data.value.home_types
    const user_types = app_data.value.user_types

    const { SEND_USER_EDITION } = useActions({
      SEND_USER_EDITION: "auth/SEND_USER_EDITION"
    } as any);
    const { user } = useGetters({ user: "auth/user" } as any);
    var { errors } = useGetters({ errors: "app/errors" } as any);

    var editedUser = ref<UserModel>(JSON.parse(JSON.stringify(user.value)));

    watch(() => editedUser.value, (newValue:any) => {
      modified.value = true
    }, {deep:true});

    const firstNameLabel = computed(
      () =>
        capitalize(root.$t("first name")) + " / " + capitalize(root.$t("alias"))
    );

    const lastNameLabel = computed(
      () =>
        capitalize(root.$t("last name")) + " (" + root.$t("form.optional") + ")"
    );

    const validateUrl = (url?:string) => {
        if (url) {          
          let regex = /^(http|https)/;
          if(url.length > 3 && !url.match(regex)) {
              return 'http://' + url;
          }else{
              return url
          }
        } else {
          return undefined
        }
    };

    const validateContactInfos = () => {
      var infos = editedUser.value.contact_infos
      infos.facebook = validateUrl(infos.facebook)
      infos.instagram = validateUrl(infos.instagram)
      infos.youtube = validateUrl(infos.youtube)
    }

    const editUser = () => {
      loading.value = true;
      validateContactInfos()
      SEND_USER_EDITION(editedUser.value)
        .then(() => {
          loading.value = false;
          modified.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    };

    return {
      dialog,
      loading,
      editedUser,
      SEND_USER_EDITION,
      editUser,
      rules,
      errors,
      firstNameLabel,
      lastNameLabel,
      form,
      modified,
      home_types,
      user_types
    };
  }
});
</script>

<style scoped>

>>>.v-input .v-icon, .v-menu__content .v-icon { 
    color: #4d4d4d;
}

</style>
