import Vue from 'vue';
import Vuex from 'vuex';

import { scaifeWidgets } from '@scaife-viewer/scaife-widgets';
import createStore from './demos/config';
import skeletonCreateStore from './skeleton/config';

Vue.use(Vuex);

const skeletonStore = skeletonCreateStore();

export default new Vuex.Store({
  ...createStore(),
  modules: {
    [skeletonStore.namespace]: skeletonStore.store,
    [scaifeWidgets.namespace]: scaifeWidgets.store,
  },
});
