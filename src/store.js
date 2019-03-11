import Vue from 'vue';
import Vuex from 'vuex';

import {
  SET_PASSAGE_TEXT,
  SET_SELECTED_LEMMAS,
  SET_TEXT_SIZE,
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  MORPHGNT_SET_BOOKS,
  MORPHGNT_SET_BOOK,
  MORPHGNT_SET_PASSAGE,
  MORPHGNT_SELECT_WORD,
  MORPHGNT_TOGGLE_INTERLINEAR,
  MORPHGNT_SET_SELECTED_WORD,
} from './constants';
import { stat } from 'fs';

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

    interlinear: false,
    books: [],
    book: null,
    passage: null,
    word: null,
  },
  mutations: {
    [SET_SELECTED_LEMMAS]: (state, lemmas) => state.selectedLemmas = lemmas,
    [SET_TEXT_SIZE]: (state, size) => state.readerTextSize = size,
    [SET_PASSAGE_TEXT]: (state, lines) => state.passageText = lines,
    [TOGGLE_LEFT_SIDEBAR]: state => state.leftOpen = !state.leftOpen,
    [TOGGLE_RIGHT_SIDEBAR]: state => state.rightOpen = !state.rightOpen,
    [MORPHGNT_SET_BOOKS]: (state, books) => state.books = books,
    [MORPHGNT_SET_BOOK]: (state, book) => state.book = book,
    [MORPHGNT_SET_PASSAGE]: (state, passage) => {
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
    [MORPHGNT_SELECT_WORD]: (state, word) => state.word = word,
    [MORPHGNT_TOGGLE_INTERLINEAR]: state => state.interlinear = !state.interlinear,
    [MORPHGNT_SET_SELECTED_WORD]: (state, { word, selected }) => {
      // if selected, then add if it doesn't exist already
      // if not selected, remove if it does exist
      const index = state.selectedWords.indexOf(word);
      if (selected && index === -1) {
        state.selectedWords = [...state.selectedWords, word];
      } else if (!selected && index > -1) {
        const newSelection = [...state.selectedWords];
        newSelection.splice(index, 1);
        state.selectedWords = newSelection;
      }
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
    [MORPHGNT_SET_BOOKS]: ({ commit }, { books }) => {
      commit(MORPHGNT_SET_BOOKS, books);
    },
    [MORPHGNT_SET_BOOK]: ({ commit }, { book }) => {
      commit(MORPHGNT_SET_BOOK, book);
    },
    [MORPHGNT_SET_PASSAGE]: ({ commit }, { passage }) => {
      commit(MORPHGNT_SET_PASSAGE, passage);
    },
    [MORPHGNT_SELECT_WORD]: ({ commit }, { word }) => {
      commit(MORPHGNT_SELECT_WORD, word);
    },
    [MORPHGNT_TOGGLE_INTERLINEAR]: ({ commit }) => {
      commit(MORPHGNT_TOGGLE_INTERLINEAR);
    },
    [MORPHGNT_SET_SELECTED_WORD]: ({ commit }, { word, selected }) => {
      commit(MORPHGNT_SET_SELECTED_WORD, { word, selected });
    }
  },
})
