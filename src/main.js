import Vue from 'vue';
import Popover  from 'vue-js-popover';

import App from './App.vue';
import store from './store';
import SkeletonPlugin from './skeleton/plugin';

import globalComponents from './global-components';
import router from './router';

Vue.config.productionTip = false;

globalComponents.forEach(component => {
  Vue.component(component.__file.split('/').pop().split('.')[0], component);
});

import widgets from './components/widgets';
Vue.use(SkeletonPlugin, { widgets });

Vue.use(Popover);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
