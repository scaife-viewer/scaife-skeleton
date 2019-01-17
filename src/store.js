import Vue from 'vue'
import Vuex from 'vuex'

import widgets from './components/widgets';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    widgetOptions: [...widgets],
  },
  mutations: {

  },
  actions: {

  }
})
