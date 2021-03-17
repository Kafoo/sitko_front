<template>
  
  <v-btn
    @click="btn.action"
    class="placeAction rounded-lg mb-4 ml-sm-4"
    :loading="loading"
    :disabled="loading"
  >
    <v-icon class="mr-2" :color="btn.color">{{ btn.icon }}</v-icon>
    {{ btn.title }}
  </v-btn>

</template>

<script lang="ts">

import { defineComponent, ref } from "@vue/composition-api"
import PlaceModel from "@/ts/models/placeClass"
import { useActions } from 'vuex-composition-helpers';

export default defineComponent({

  name : "JoinButton",

  props: {
    place: Object as () => PlaceModel
  },

  setup(props, {root}) {

    const { SEND_JOIN_REQUEST } = useActions({SEND_JOIN_REQUEST: 'place/SEND_JOIN_REQUEST'} as any)
    const { SEND_LEAVE_REQUEST } = useActions({SEND_LEAVE_REQUEST: 'place/SEND_LEAVE_REQUEST'} as any)

    var loading = ref(false)

    const leave = ()=>{
      loading.value = true
      SEND_LEAVE_REQUEST(props.place)
      .then(()=>{
        loading.value = false
        btn.value = join_btn
      })
    }

    const join = ()=>{
      loading.value = true
      SEND_JOIN_REQUEST(props.place)
      .then(()=>{
        loading.value = false
        btn.value = leave_btn
      })
    }

    const leave_btn = {
      title: root.$i18n.t('leave'),
      icon:"remove",
      color:'red',
      action: leave
    }

    const join_btn = {
      title: root.$i18n.t('join'),
      icon:"add",
      color:'green',
      action: join
    }

    var btn = ref(join_btn)

    if (props.place) {
      if (props.place.joined) {
        btn.value = leave_btn
      }else{
        btn.value = join_btn
      }
    }

    return{
      loading,
      btn
    }

  }
});
</script>

<style scoped>



</style>
