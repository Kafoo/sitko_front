<template>
  <div class="d-flex justify-center">
    <loading-circle v-if="loading" small />

    <v-card 
    v-else-if="user" 
    width="800px" 
    class="pa-3"
    :class="$vuetify.breakpoint.name === 'xs' ? 'ma-0' : 'ma-8'"
    >
      <v-row justify="center">
        <v-col cols="auto">
          <big-avatar circle :image="user.image" default="avatar"/>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <page-title class="mb-0">{{user.name | capitalize}}</page-title>
        </v-col>
      </v-row>

      <v-row 
      justify="center">
        <v-col cols="auto">
          <join-button
          v-if="user.can.link"
          :entity="user"
          type="user"
          class="mb-4" />
          <v-btn
            v-else-if="user.can.update"
            class="mb-4"
            to="/profil"
          >
            <v-icon small class="mr-1">edit</v-icon>
            {{ $t("options.edit") }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row justify="center" dense>
        <v-col cols="12" sm="6" md="6" class=" text-center mb-4">

          <outlined-area label="Statut">
            <div v-if="user.user_type">
              <v-icon>{{user.user_type.icon}}</v-icon>
              {{user.user_type.translated_name | capitalize}}
            </div>
            <div 
            v-else
            class="grey--text">
              N/A
            </div>
          </outlined-area>

        </v-col>
        <v-col cols="12" sm="6" md="6" class="text-center mb-4">

          <outlined-area label="Habitat">
            <div v-if="user.home_type">
              <v-icon>{{user.home_type.icon}}</v-icon>
              {{user.home_type.translated_name | capitalize}}
            </div>
            <div 
            v-else
            class="grey--text">
              N/A
            </div>
          </outlined-area>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <current-tags :tags="user.tags" />
        </v-col>
      </v-row>

      <div
        class="description grey lighten-3 my-5 pa-5 breakwrap rounded-xl"
      >
        <div class="font-weight-bold mb-2">
          <v-icon>person</v-icon>
          Bio
        </div>
        <div v-if="user.bio" v-html="user.bio"/>
        <div v-else class="grey--text text-center">
          -- {{user.name}} n'a pas encore rempli cette section --
        </div>
      </div>

      <div
        class="description grey lighten-3 my-5 pa-5 breakwrap rounded-xl"
      >
        <div class="font-weight-bold mb-2">
          <v-icon>radio_button_checked</v-icon>
          Attentes
        </div>
        <div v-if="user.expectations" v-html="user.expectations"/>
        <div v-else class="grey--text text-center">
          -- {{user.name}} n'a pas encore rempli cette section --
        </div>
      </div>

      <outlined-area 
      v-if="user.contact_infos && Object.keys(user.contact_infos).length > 0"
      label="Contact">
        <div class="d-flex flex-wrap justify-center">
          <v-btn 
          v-if="user.contact_infos.facebook"
          rounded
          :href="user.contact_infos.facebook" target="_blank"
          color="#4267B2" 
          dark
          class="ma-2">
            <v-icon left>facebook</v-icon>
            Facebook
          </v-btn>
          <v-btn 
          v-if="user.contact_infos.instagram"
          rounded
          :href="user.contact_infos.instagram" target="_blank"
          color="purple" 
          dark
          class="ma-2">
            <v-icon left>camera</v-icon>
            Instagram
          </v-btn>
          <v-btn 
          v-if="user.contact_infos.youtube"
          rounded
          :href="user.contact_infos.youtube" target="_blank"
          color="#ea0000" 
          dark
          class="ma-2">
            <v-icon left>play_arrow</v-icon>
            Youtube
          </v-btn>
          <v-btn 
          v-if="user.contact_infos.email"
          rounded
          @click="show_email = true"
          color="grey darken-2" 
          dark
          class="ma-2 pr-3">
            <v-icon left>email</v-icon>
            Email
          </v-btn>

          <v-dialog v-model="show_email" width="unset">
            <v-card class="pa-8 selectable-text">
              <v-icon>email</v-icon>
              <span class="ml-2 selectable-text">
                {{user.contact_infos.email}}
              </span>
            </v-card>
          </v-dialog>

        </div>
      </outlined-area>


    </v-card>

  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed
} from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import UserModel from "@/ts/models/userClass";
import useFetcher from "@use/useFetcher";
import CurrentTags from "@/vue/components/molecules/current/CurrentTags.vue";
import PageTitle from "@/vue/components/atoms/app/PageTitle.vue";
import BigAvatar from "@c/atoms/media/BigAvatar.vue";
import JoinButton from "@/vue/components/atoms/place/JoinButton.vue";
import OutlinedArea from '@/vue/components/molecules/app/OutlinedArea.vue';


export default defineComponent({
  name: "UserOverview",

  components: {
    CurrentTags,
    PageTitle,
    BigAvatar,
    JoinButton,
    OutlinedArea
  },

  setup(props, { root }) {
  
    const user_id = parseInt(root.$route.params.id);
    var { entity: user, loading } = useFetcher("user/GET_USER", user_id);

    var show_email = ref(false)

    return {
      user,
      loading,
      show_email
    };
  }
});
</script>

<style scoped></style>
