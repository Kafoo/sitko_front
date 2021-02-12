import Vue from "vue";
import App from "@/vue/App.vue";
import router from "@/ts/router";
import store from "@/ts/store";
import vuetify from "@/ts/plugins/vuetify";
import i18n from "@/ts/plugins/i18n";
import VueComp from "@vue/composition-api";
import Autocomplete from "@trevoreyre/autocomplete-vue";
import "@trevoreyre/autocomplete-vue/dist/style.css";

import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {id: 'UA-182613407-1', router})

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./assets/css/main.css";
import "@/ts/functions/interceptors";
import "@/ts/functions/vueFilters";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import LoadingCircle from "@c/atoms/app/LoadingCircle.vue"
import VClamp from "vue-clamp";


Vue.config.productionTip = false;
Vue.extend(vuetify);
Vue.use(VueComp);
Vue.use(Autocomplete);

Vue.component("primary-content-body", PrimaryContentBody);
Vue.component("loading-circle", LoadingCircle);
Vue.component("v-clamp", VClamp);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
