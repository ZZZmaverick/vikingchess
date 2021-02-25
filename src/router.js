import Vue from "vue";
import Router from "vue-router";

import login from "./pages/login.vue";
import home from "./pages/home.vue";
import adventure from "./pages/adventure.vue";
import character from "./pages/character.vue";
import shop from "./pages/shop.vue";
import setting from "./pages/setting.vue";

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
      component: adventure /* ,
      children: [
        {
          path: "/adventure/gamelevel/:id",
          component: gamelevelintro
        }
      ] */
    },
    {
      path: "/character",
      name: "character",
      component: character
    },
    {
      path: "/shop",
      name: "shop",
      component: shop
    },
    {
      path: "/setting",
      name: "setting",
      component: setting
    }
  ]
});

//全局守卫
/* router.beforeEach() */

export default router;
