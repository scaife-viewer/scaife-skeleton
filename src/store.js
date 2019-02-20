import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import widgets from './components/widgets';
import {
  SET_PASSAGE_TEXT,
  SET_SELECTED_LEMMAS,
  SET_TEXT_SIZE,
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
} from './constants';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightOpen: true,
    leftOpen: true,
    widgetOptions: [...widgets],
    widgets: {
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
    [SET_SELECTED_LEMMAS]: (state, lemmas) => state.selectedLemmas = lemmas,
    [SET_TEXT_SIZE]: (state, size) => state.readerTextSize = size,
    [SET_PASSAGE_TEXT]: (state, lines) => state.passageText = lines,
    [TOGGLE_LEFT_SIDEBAR]: state => state.leftOpen = !state.leftOpen,
    [TOGGLE_RIGHT_SIDEBAR]: state => state.rightOpen = !state.rightOpen,
  },
  actions: {
    [TOGGLE_LEFT_SIDEBAR]: ({ commit }) => commit(TOGGLE_LEFT_SIDEBAR),
    [TOGGLE_RIGHT_SIDEBAR]: ({ commit }) => commit(TOGGLE_RIGHT_SIDEBAR),
    [SET_PASSAGE_TEXT]: ({ commit }, { lines }) => {
      commit(SET_PASSAGE_TEXT, lines);
    },
    [SET_SELECTED_LEMMAS]: ({ commit }, { lemmas }) => {
      commit(SET_SELECTED_LEMMAS, lemmas);
    },
    [SET_TEXT_SIZE]: ({ commit }, { size }) => {
      commit(SET_TEXT_SIZE, size);
    }
  }
})
