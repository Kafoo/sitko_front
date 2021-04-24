<template>
  <primary-content-body>
    <div class="d-flex justify-center align-center fill-height">
      <div 
      v-if="loading" 
      class="d-flex flex-column align-center">
        <loading-circle relative small/>
        <div>
          <!-- TOTRANSLATE -->
          Verifying e-mail...
        </div>
      </div>
      <div 
      v-else
      class="d-flex flex-column align-center">
        <div class="mb-4" v-if="verified">
          <!-- TOTRANSLATE -->
          E-mail vérifié !
        </div>
        <div class="mb-4" v-else>
          <!-- TOTRANSLATE -->
          E-mail non vérifié
        </div>
        <v-spacer></v-spacer>
        <v-btn to="/">
          <v-icon left>home</v-icon>
          <!-- TOTRANSLATE -->
          accueil
        </v-btn>
      </div>
    </div>
  </primary-content-body>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from '@vue/composition-api';
import { useActions, useGetters, useMutations } from 'vuex-composition-helpers';
import Login from "@/vue/views/Auth/Login.vue";
import UserModel from "@/ts/models/userClass";
import store from '@/ts/store';


export default defineComponent({

  name : "Verify",

  props:{
    hash:String
  },

  components:{
    Login
  },

  setup(props, context) {
    const { SEND_VERIFY_REQUEST } = useActions({SEND_VERIFY_REQUEST: 'auth/SEND_VERIFY_REQUEST'} as any)
    const { SEND_LOGOUT_REQUEST } = useActions({SEND_LOGOUT_REQUEST: "auth/SEND_LOGOUT_REQUEST"} as any);
    const { user } = useGetters({user: 'auth/user'} as any)
    var verified = ref(false)
    var loading = ref(false)

    onMounted(()=>{
      verify()
    })

    const verify = () => {
      loading.value = true
      SEND_VERIFY_REQUEST(props.hash)
        .then(() => {
          loading.value = false
          verified.value = true
        })
        .catch(() => {
          if (user.value) {
            store.commit("app/setAlert", {
              type: "error",
              //TOTRANSLATE
              msg: "Error verifying email, please try to login"
            });
            SEND_LOGOUT_REQUEST("/login")
          }
        });
    }

    return{
      user,
      verify,
      loading,
      verified
    }

  }
});

</script>
