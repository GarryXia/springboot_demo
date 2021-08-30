/* eslint-disable */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

// config router
const user = store.state.username;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    next({ path: '/login' });
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>',
});
