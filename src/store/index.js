import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// config vuex
const store = new Vuex.Store({
  state: {
    username: '',
    token: getToken(),
  },
  mutations: {
    setToken(state, newToken) {
      state.token = newToken
      // 设置了 token 的同时, 同步到本地cookies中
      setToken(newToken);
    },
  },
  getters: {
    token: state => state.user.token,
  },
  actions: {},
});

export default store;
