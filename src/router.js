import Vue from "vue";
import Router from "vue-router";

import login from "./pages/login.vue";
import home from "./pages/home.vue";
import adventure from "./pages/adventure.vue";
import gamelevelintro from "./components/gamelevelintro.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    /* {
      path: "*",
      name: "any",
      redirect: "/login" //change this
    }, */
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/adventure",
      name: "adventure",
      component: adventure,
      children: [
        {
          path: "/adventure/gamelevel/:id",
          component: gamelevelintro
        }
      ]
    }
  ]
});

//全局守卫
/* router.beforeEach() */

export default router;
