<template>
  <v-dialog v-model="model" persistent max-width="500px">
    <v-card class="pa-6 d-flex flex-column align-center">
      <div class="mb-2 text-h6">
        Code d'accès :
      </div>
      <div class="d-flex align-end">
        <v-text-field
          id="codeInput"
          @keypress="checkKey($event)"
          @input="checkConfirm"
          v-model="code"
          hide-details
          class="input mr-3"
        >
        </v-text-field>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "@vue/composition-api";
import { filter } from "vue/types/umd";
import { useMutations } from "vuex-composition-helpers";
import store from "@/ts/store";
import router from "@/ts/router";

export default defineComponent({
  name: "AccessCode",

  setup(props, { root, refs }) {
    onMounted(() => {
      setTimeout(() => {
        if (document && document.getElementById("codeInput")) {
          document.getElementById("codeInput")!.focus();
        }
      });
    });

    var model = ref(true);
    var code = ref("");

    const { setAccessCode } = useMutations({
      setAccessCode: "app/setAccessCode"
    } as any);

    const checkKey = (evt: any) => {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode == 13) {
        confirm();
      } else if (code.value.length === 6) {
        evt.preventDefault();
      } else if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    };

    const checkConfirm = () => {
      if (code.value.length === 6) {
        confirm();
      }
    };

    const confirm = () => {
      console.log(process.env.VUE_APP_ACCESS_CODE);
      if (code.value == process.env.VUE_APP_ACCESS_CODE) {
        store.commit("app/setAccessCode", code.value);
        window.location.href = "/";
      } else {
        code.value = "";
      }
    };

    return {
      model,
      code,
      checkKey,
      checkConfirm,
      confirm
    };
  }
});
</script>

<style scoped>
.input {
  width: 111px;
  font-size: 2em;
}
</style>
