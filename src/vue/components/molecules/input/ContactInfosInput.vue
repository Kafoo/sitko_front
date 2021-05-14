<template>
  <div>
    <v-row dense>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          append-icon="facebook"
          outlined
          autocomplete="disabled"
          @input="facebookChange"
          v-model="value.facebook"
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
          @input="instagramChange"
          v-model="value.instagram"
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
          @input="youtubeChange"
          v-model="value.youtube"
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
          @input="emailChange"
          v-model="value.email"
          :rules="[rules.email[0]]"
          label="Email"
          required
          :disabled="loading"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"
import { useInputRules } from "@/ts/functions/composition/inputRules";

export default defineComponent({

  name : "ContactInfosInput",

  props: {
    value: {
      type:Object,
      default:{}
    },
    loading: {
      type:Boolean,
      default:false
    }
  },

  setup(props, {emit}) {

    const rules = useInputRules();

    const facebookChange = (value) => {
      var infos = {... props.value}
      infos.facebook = value
      emit("input", infos);
    }

    const instagramChange = (value) => {
      var infos = {... props.value}
      infos.instagram = value
      emit("input", infos);
    }

    const youtubeChange = (value) => {
      var infos = {... props.value}
      infos.youtube = value
      emit("input", infos);
    }

    const emailChange = (value) => {
      var infos = {... props.value}
      infos.email = value
      emit("input", infos);
    }

    return{
      rules,
      facebookChange,
      instagramChange,
      youtubeChange,
      emailChange
    }

  }
});
</script>

<style scoped>



</style>
