import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";

Vue.config.productionTip = false;

new Vue({
  router, //es6, 同router: router
  render: h => h(App)
}).$mount("#app");
