<template>
  
    <v-btn 
    color="red"
    class="white--text"
    @click="deletion = true"
    :disabled="disabled"
    >
      <!-- TOTRANSLATE -->
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
      //TOTRANSLATE
      default: 'Supprimer'
    },
    confirmation_text:{
      type:String,
      //TOTRANSLATE
      default: 'La suppression est définitive'
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
