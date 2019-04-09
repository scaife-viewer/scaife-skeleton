import Vue from 'vue';
import App from './App.vue';
import store from './store';
import SkeletonPlugin from './skeleton/plugin';

import globalComponents from './global-components';
import router from './router';
import widgets from './components/widgets';

Vue.config.productionTip = false;

globalComponents.forEach((component) => {
  // eslint-disable-next-line no-underscore-dangle
  Vue.component(component.__file.split('/').pop().split('.')[0], component);
});


Vue.use(SkeletonPlugin, { widgets });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
