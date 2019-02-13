import Vue from 'vue';
import App from './App.vue';
import store from './store';

import globalComponents from './global-components';

Vue.config.productionTip = false;

globalComponents.forEach(component => {
  Vue.component(component.__file.split('/').pop().split('.')[0], component);
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
