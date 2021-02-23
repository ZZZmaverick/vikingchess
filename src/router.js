import Vue from "vue";
import Router from "vue-router";

import login from "./pages/login.vue";
import home from "./pages/home.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      name: "any",
      redirect: "/home" //change this
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/home",
      name: "home",
      component: home
    }
  ]
});

//全局守卫
/* router.beforeEach() */

export default router;
