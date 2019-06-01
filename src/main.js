import Vue from 'vue';
import App from './App.vue';
import store from './store';
import SkeletonPlugin from './skeleton/plugin';

import router from './router';
import widgets from './components/widgets';

Vue.config.productionTip = false;

Vue.use(SkeletonPlugin, { widgets });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
