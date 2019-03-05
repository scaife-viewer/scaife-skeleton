import Vue from 'vue';
import Vuex from 'vuex';

import {
  SET_PASSAGE_TEXT,
  SET_SELECTED_LEMMAS,
  SET_TEXT_SIZE,
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  SET_BOOKS,
  SET_BOOK,
  SET_PASSAGE,
} from './constants';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightOpen: true,
    leftOpen: true,
    widgets: {
      mainWidget: null,
      right: [],
      left: [],
    },
    passageText: '',
    selectedWords: [],
    readerText: {},
    selectedLemmas: [],
    readerTextSize: 'md',

    books: [],
    book: null,
    passage: null,
  },
  mutations: {
    [SET_SELECTED_LEMMAS]: (state, lemmas) => state.selectedLemmas = lemmas,
    [SET_TEXT_SIZE]: (state, size) => state.readerTextSize = size,
    [SET_PASSAGE_TEXT]: (state, lines) => state.passageText = lines,
    [TOGGLE_LEFT_SIDEBAR]: state => state.leftOpen = !state.leftOpen,
    [TOGGLE_RIGHT_SIDEBAR]: state => state.rightOpen = !state.rightOpen,
    [SET_BOOKS]: (state, books) => state.books = books,
    [SET_BOOK]: (state, book) => state.book = book,
    [SET_PASSAGE]: (state, passage) => {
      const { prev, next, title, words, ...p } = passage;
      state.passage = {
        prev,
        next,
        title,
        words: words.map(word => ({
          id: word['@id'].slice(-16, -5),
          classes: [
            `pos-${word.pos}`,
            `case-${word.case}`,
          ],
          text: word.text,
          // @@@ move to annotations API
          norm: word.norm,
          lemma: word.lemma,
          mood: word.mood,
          tense: word.tense,
          voice: word.voice,
          number: word.number,
          person: word.person,
          pos: word.pos,
          case: word.case,
          word: word.word,
          gender: word.gender,
        })),
      };
    },
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
    },
    [SET_BOOKS]: ({ commit }, { books }) => {
      commit(SET_BOOKS, books);
    },
    [SET_BOOK]: ({ commit }, { book }) => {
      commit(SET_BOOK, book);
    },
    [SET_PASSAGE]: ({ commit }, { passage }) => {
      commit(SET_PASSAGE, passage);
    }
  },
})
