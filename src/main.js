import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import Axios from "axios";

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

Axios.defaults.baseURL = "/api";

new Vue({
  router, //es6, 同router: router
  render: h => h(App)
}).$mount("#app");
