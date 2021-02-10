<template>
  
    <v-btn 
    color="red"
    class="white--text"
    @click="deletion = true"
    :disabled="disabled"
    >

      {{text}}

      <confirm-dialog
      :show="deletion"
      :text="confirmation_text"
      :cancel="$t('confirm.cancel')"
      @cancel-action="deletion = false"
      :confirm="$t('delete')"
      @confirm-action="$emit('confirm-action')"
      confirm_color="red"
      :loading="loading"
      />

    </v-btn>

</template>

<script lang="ts">

import { defineComponent, ref, watch } from "@vue/composition-api"
import ConfirmDialog from "@c/molecules/app/ConfirmDialog.vue";
import i18n from '@/ts/plugins/i18n.js' 

export default defineComponent({

  name : "DeleteButton",

  components:{
    ConfirmDialog
  },

  props:{
    disabled:{
      type:Boolean,
      default: false
    },
    text:{
      type:String,
      default: i18n.t('delete')
    },
    confirmation_text:{
      type:String,
      default: i18n.t('Deletion is definitive')
    },
    loading:{
      type:Boolean,
      default:false
    }
  },

  setup(props) {

    var deletion = ref(false)

    //When loading stops - whatever the reason -, pop up closes
    watch(() => props.loading, (newValue:any) => {
      if (newValue === false) {
        deletion.value = false
      }
    });

    return{
      deletion
    }

  }
});
</script>

<style scoped>



</style>
