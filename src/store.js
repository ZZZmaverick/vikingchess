import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    userData: {
      username: "",
      password: "",
      nickname: "",
      gender: 0,
      avatar: 0,
      money: 0,
      health: 0,
      faith: 0,
      skills: [],
      equipments: [],
      cards: [],
      backupSki: [],
      backupEqu: [],
      backupCards: []
    }
  },
  mutations: {
    changeLoginState(state) {
      state.isLogin = !state.isLogin;
    },
    chageUserData(state, newData) {
      state.userData = newData;
    }
  },
  actions: {}
});
