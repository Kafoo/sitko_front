<template>
  <div style="line-height:15px" class="text-caption grey--text text--darken-1">
    <v-clamp autoresize :max-lines="2">
      {{text}}
    </v-clamp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, Ref } from "@vue/composition-api";
import CaldatesPopup from "@c/organisms/caldate/CaldatesPopup.vue";
import CaldateModel from '@/ts/models/caldateClass';
import i18n from '@/ts/plugins/i18n';

export default defineComponent({
  name: "CaldatesInCard",

  components: {
    CaldatesPopup
  },

  props: {
    caldates: {
      type: Array as ()=> Array<CaldateModel>,
      default: []
    },

    more: {
      type: Boolean,
      default: false
    },

    title: String
  },

  setup(props) {
    var morePopup = ref(false);

    var text:Ref<string> = computed(() => {
      var text = ""
      if (props.caldates.length) {
        text += props.caldates[0].chip
        if (props.caldates.length > 1) {
          text += " " + i18n.t('and')
          text += " " + (props.caldates.length - 1).toString()
          text += " " + i18n.tc("other caldate", props.caldates.length - 1 > 1 ? 2 : 1)
        }
      }
      return text
    })



    return {
      morePopup,
      text
    };
  }
});
</script>

<style scoped></style>
