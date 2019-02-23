import Vue from 'vue';
import App from './App.vue';
import store from './store';
import SkeletonPlugin from './skeleton/plugin';

import globalComponents from './global-components';

Vue.config.productionTip = false;

globalComponents.forEach(component => {
  Vue.component(component.__file.split('/').pop().split('.')[0], component);
});

import widgets from './components/widgets';
Vue.use(SkeletonPlugin, { widgets });

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
