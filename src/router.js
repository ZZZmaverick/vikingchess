import Vue from "vue";
import Router from "vue-router";

import login from "./pages/login.vue";
import register from "./pages/register.vue";
import home from "./pages/home.vue";
import adventure from "./pages/adventure.vue";
import character from "./pages/character.vue";
import shop from "./pages/shop.vue";
import setting from "./pages/setting.vue";
import changepwd from "./pages/changepwd.vue";
import changeinfo from "./pages/changeinfo.vue";
import fight from "./pages/fight.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      name: "any",
      redirect: "/login" //change this
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
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
    },
    {
      path: "/changepwd",
      name: "changepwd",
      component: changepwd
    },
    {
      path: "/changeinfo",
      name: "changeinfo",
      component: changeinfo
    },
    {
      path: "/fight:id",
      name: "fight",
      component: fight
    }
  ]
});

//全局守卫
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    if (localStorage.isLogin === "true") {
      next("/home");
    } else {
      next();
    }
  } else if (to.path == "/register") {
    next();
  } else {
    if (from.path == "/login") {
      next();
    } else {
      if (localStorage.isLogin == "true") {
        next();
      } else {
        next("/login");
      }
    }
  }
});

export default router;
