<template>
  <primary-content-body>
    <div>
      <v-row justify="center">
        <page-title>{{$t('settings') | capitalize}}</page-title>
      </v-row>
      <v-form v-model="form">

        <v-row dense>
          <v-col cols="12">
            <v-text-field
              outlined
              id="email"
              v-model="editedUser.email"
              :rules="[rules.required[0], rules.email[0]]"
              :label="$t('e-mail') | capitalize"
              required
              :disabled="loading"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-alert v-if="errors.email" dense outlined type="error">
              {{ errors.email[0] }}
            </v-alert>
          </v-col>
        </v-row>

        <!-- <v-row dense>
          <v-col cols="12">
            <v-checkbox
              v-model="editedUser.preferences.email"
              label="Demandes/confirmations de lien"
            ></v-checkbox>
          </v-col>
        </v-row> -->

        <v-row justify="center" dense>
          <v-col cols="12">
            <v-text-field
              outlined
              autocomplete="off"
              v-model="editedUser.password"
              :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.min(8)[0]]"
              :type="show_password ? 'text' : 'password'"
              name="input-10-1"
              :label="$tc('new password', 1) | capitalize"
              :hint="$t('form.min_carac', { n: '8' }) | capitalize"
              counter
              @click:append="show_password = !show_password"
              :disabled="loading"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" dense>
          <v-col cols="12">
            <v-text-field
              outlined
              autocomplete="off"
              block
              v-model="editedUser.password_confirmation"
              :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[
                rules.match(
                  editedUser.password,
                  editedUser.password_confirmation
                )[0]
              ]"
              :type="show_password ? 'text' : 'password'"
              name="input-10-1"
              :label="$t('confirmation') | capitalize"
              counter
              @click:append="show_password = !show_password"
              :disabled="loading"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-alert v-if="errors.password" dense outlined type="error">
              {{ errors.password[0] }}
            </v-alert>
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

            <v-btn
              class="d-block my-4"
              color="grey"
              :disabled="loading"
              @click="logout"
            >
              {{ $t("logout") }}
            </v-btn>

            <v-btn
              class="d-block"
              color="red"
              :disabled="loading"
              @click="dialog = true"
            >
              {{ $t("delete my account") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>

      <!-- Confirm deletion -->
      <confirm-dialog
        :show="dialog"
        :text="$t('Account deletion is definitive.')"
        :cancel="$t('confirm.cancel')"
        @cancel-action="dialog = false"
        :confirm="$t('delete')"
        @confirm-action="deleteUser()"
        confirm_color="red"
        :loading="loading_deletion"
      />
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
  name: "Settings",

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
    var show_password = ref(false);
    var dialog = ref(false);
    var loading = ref(false);
    var loading_deletion = ref(false);

    const { SEND_USER_EDITION } = useActions({
      SEND_USER_EDITION: "auth/SEND_USER_EDITION"
    } as any);
    const { SEND_DELETE_USER } = useActions({
      SEND_DELETE_USER: "auth/SEND_DELETE_USER"
    } as any);
    const { SEND_LOGOUT_REQUEST } = useActions({
      SEND_LOGOUT_REQUEST: "auth/SEND_LOGOUT_REQUEST"
    } as any);
    const { user } = useGetters({ user: "auth/user" } as any);
    var { errors } = useGetters({ errors: "app/errors" } as any);

    var editedUser = ref<UserModel>(JSON.parse(JSON.stringify(user.value)));

    watch(() => editedUser.value, (newValue:any) => {
      modified.value = true
    }, {deep:true});

    const deleteUser = () => {
      loading_deletion.value = true;
      SEND_DELETE_USER(user.value)
        .then(() => {
          loading_deletion.value = false;
          root.$router.push("/").catch(() => {});
        })
        .catch(() => {
          loading_deletion.value = false;
          dialog.value = false;
        });
    };

    const editUser = () => {
      loading.value = true;
      SEND_USER_EDITION(editedUser.value)
        .then(() => {
          loading.value = false;
          modified.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    };

    const logout = () => {
      SEND_LOGOUT_REQUEST();
    };

    return {
      dialog,
      loading,
      loading_deletion,
      editedUser,
      SEND_USER_EDITION,
      SEND_DELETE_USER,
      SEND_LOGOUT_REQUEST,
      logout,
      editUser,
      deleteUser,
      show_password,
      rules,
      errors,
      form,
      modified
    };
  }
});
</script>

<style scoped></style>
