import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import widgets from './components/widgets';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    widgetOptions: [...widgets],
    placeholders: {
      right: [],
      left: [],
    },
    passageText: '',
    selectedWords: [],
    readerText: {},
    selectedLemmas: [],
    readerTextSize: 'md',
  },
  mutations: {
    setSelectedLemmas: (state, lemmas) => state.selectedLemmas = lemmas,
    setTextSize: (state, size) => state.readerTextSize = size,
    setPassageText: (state, lines) => state.passageText = lines,
  },
  actions: {
    setPassageText: ({ commit }, { lines }) => {
      commit('setPassageText', lines);
    },
    setSelectedLemmas: ({ commit }, { lemmas }) => {
      commit('setSelectedLemmas', lemmas);
    },
    setTextSize: ({ commit }, { size }) => {
      commit('setTextSize', size);
    }
  }
})
