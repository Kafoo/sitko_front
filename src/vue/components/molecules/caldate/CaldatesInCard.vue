<template>
  <div style="line-height:15px" class="text-caption grey--text text--darken-1">
    <v-clamp autoresize :max-lines="2">
      {{text}}
    </v-clamp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, Ref, watch } from "@vue/composition-api";
import CaldatesPopup from "@c/organisms/caldate/CaldatesPopup.vue";
import CaldateModel from '@/ts/models/caldateClass';
import i18n from '@/ts/plugins/i18n';
import moment from "moment";

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

    var incoming_caldates:any = computed(() => {
      return  props.caldates.filter((caldate: CaldateModel) => 
          caldate.end > moment().format('YYYY-MM-DD HH:MM:ss')
        )
    })

    var text:Ref<string> = computed(() => {
      var text = ""
      if (incoming_caldates.value.length) {
        text += incoming_caldates.value[0].chip
        if (incoming_caldates.value.length > 1) {
          text += " " + i18n.t('and')
          text += " " + (incoming_caldates.value.length - 1).toString()
          text += " " + i18n.tc("other caldate", incoming_caldates.value.length - 1 > 1 ? 2 : 1)
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
