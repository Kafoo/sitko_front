import Vue from "vue";
import App from "@/vue/App.vue";
import router from "@/ts/router";
import store from "@/ts/store";
import vuetify from "@/ts/plugins/vuetify";
import i18n from "@/ts/plugins/i18n";
import VueComp from "@vue/composition-api";
import Autocomplete from "@trevoreyre/autocomplete-vue";
import "@trevoreyre/autocomplete-vue/dist/style.css";

import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, { id: process.env.ANALYTICS_ID, router });

import 'leaflet/dist/leaflet.css';
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./assets/css/main.css";
import "@/ts/functions/interceptors";
import "@/ts/functions/vueFilters";
import PrimaryContentBody from "@/vue/layouts/PrimaryContentBody.vue";
import Ariane from "@/vue/layouts/app/Ariane.vue";
import LoadingCircle from "@c/atoms/app/LoadingCircle.vue";
import Help from "@c/molecules/app/Help.vue";
import BackButton from "@c/atoms/app/BackButton.vue";
import VClamp from "vue-clamp";
import PageTitle from "@c/atoms/app/PageTitle.vue";
import TinyAvatar from "@c/atoms/user/TinyAvatar.vue";

Vue.config.productionTip = false;
Vue.extend(vuetify);
Vue.use(VueComp);
Vue.use(Autocomplete);

Vue.component("primary-content-body", PrimaryContentBody);
Vue.component("ariane", Ariane);
Vue.component("loading-circle", LoadingCircle);
Vue.component("v-clamp", VClamp);
Vue.component("help", Help);
Vue.component("back-button", BackButton);
Vue.component("page-title", PageTitle);
Vue.component("tiny-avatar", TinyAvatar);

import L from 'leaflet';
type D = L.Icon.Default & {
  _getIconUrl?: string;
};
// eslint-disable-next-line  
delete (L.Icon.Default.prototype as D)._getIconUrl
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
