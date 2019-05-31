import Vue from 'vue';
import Vuex from 'vuex';

import createStore from './config';
import skeletonCreateStore from './skeleton/store';

Vue.use(Vuex);

const skeletonStore = skeletonCreateStore();

export default new Vuex.Store({
  ...createStore(),
  modules: {
    [skeletonStore.namespace]: skeletonStore.store,
  }
});
