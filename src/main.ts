import Vue from "vue";
import App from "@/vue/App.vue";
import router from "@/ts/router";
import store from "@/ts/store";
import vuetify from "@/ts/plugins/vuetify";
import i18n from "@/ts/plugins/i18n";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./assets/css/main.css";
import "@/ts/functions/interceptors"
import "@/ts/functions/vueFilters"

Vue.config.productionTip = false;
Vue.extend(vuetify);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
