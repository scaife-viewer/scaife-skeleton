import Vue from 'vue';
import App from './App.vue';
import store from './store';

import globalComponents from './global-components';

Vue.config.productionTip = false;

globalComponents.forEach(component => {
  Vue.component(component.__file.split('/').pop().split('.')[0], component);
});


import widgets from './components/widgets';

class ScaifeSkeleton {
  constructor(widgets) {
    this.widgets = widgets;
  }

  widgetOptions(location, mainWidget, leftWidgets, rightWidgets) {
    return this.widgets.filter(o => {
      return o.scaifeConfig.location === location || o.scaifeConfig.location === 'both';
    }).filter(o => {
      if (o.scaifeConfig.singleton) {
        return (mainWidget !== o && leftWidgets.indexOf(o) === -1 && rightWidgets.indexOf(o) === -1)
      } else {
        return true;
      }
    }).map(o => {
      return { text: o.scaifeConfig.displayName, component: o };
    });
  }
};

const skeleton = new ScaifeSkeleton(widgets);

Vue.prototype.$scaife = { skeleton };

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
