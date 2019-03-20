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
  LIBRARY_LOAD_TEXT_GROUP_LIST,
  LIBRARY_SET_TEXT_GROUPS,
  LIBRARY_SET_TEXT_GROUP_URNS,
  LIBRARY_RESET_TEXT_GROUP_WORKS,
  LIBRARY_FILTER_TEXT_GROUPS,
  LIBRARY_FILTER_TEXT_GROUP_WORKS,
  LIBRARY_SET_SORT,
} from './constants';

import transformTextGroupList from './transforms';
import library from './demos/medium.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Library
    textGroups: [],
    textGroupWorks: [],
    textGroupTexts: [],
    textGroupUrns: {},
    allTextGroups: null,
    allTextGroupWorks: null,
    allTextGroupTexts: null,
    sortKind: 'text-group',

    // Reader
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
  getters: {
    sortedByURN(state, getters) {
      const tmp = [...getters.hydratedTextGroups];
      tmp.sort((a, b) => a.urn.localeCompare(b.urn));
      return tmp;
    },
    sortedByTextGroup(state, getters) {
      const tmp = [...getters.hydratedTextGroups];
      tmp.sort((a, b) => a.label.localeCompare(b.label));
      return tmp;
    },
    sortedByWork(state, getters) {
      const tmp = [...getters.hydratedWorks];
      tmp.sort((a, b) => a.label.localeCompare(b.label));
      return tmp;
    },
    hydratedTextGroups(state) {
      return state.textGroups.map(textGroup => ({
        ...textGroup,
        urn: textGroup.urn.toString(),
        works: textGroup.works.map(work => ({
          ...state.textGroupUrns[work.urn.toString()],
          urn: work.urn.toString(),
          texts: work.texts.map(text => ({
            ...state.textGroupUrns[text.urn.toString()],
            urn: text.urn.toString(),
          })),
        })),
      }));
    },
    hydratedWorks(state) {
      return state.textGroupWorks.map(work => ({
        ...state.textGroupUrns[work.urn.toString()],
        urn: work.urn.toString(),
        textGroup: state.textGroupUrns[work.urn.upTo('textGroup')],
        texts: work.texts.map(text => ({
          ...state.textGroupUrns[text.urn.toString()],
          urn: text.urn.toString(),
        })),
      }));
    },
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
    [LIBRARY_SET_TEXT_GROUPS]: (state, { textGroups, works, texts }) => {
      if (textGroups !== undefined) {
        if (!state.allTextGroups) {
          state.allTextGroups = [...textGroups];
        }
        state.textGroups = textGroups;
      }
      if (works !== undefined) {
        if (!state.allTextGroupWorks) {
          state.allTextGroupWorks = [...works];
        }
        state.textGroupWorks = works;
      }
      if (texts !== undefined) {
        if (!state.allTextGroupTexts) {
          state.allTextGroupTexts = [...texts];
        }
        state.textGroupTexts = texts;
      }
    },

    [LIBRARY_SET_TEXT_GROUP_URNS]: (state, { textGroupUrns }) => {
      state.textGroupUrns = textGroupUrns;
    },
    [LIBRARY_SET_SORT]: (state, { kind }) => {
      console.log('m set sort', kind);
      state.sortKind = kind;
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
    },
    [LIBRARY_LOAD_TEXT_GROUP_LIST]: ({ commit }) => {
      // eventually call an API getting `library`
      const {
        textGroups,
        works,
        texts,
        textGroupUrns,
      } = transformTextGroupList(library);

      commit(LIBRARY_SET_TEXT_GROUPS, { textGroups, works, texts });
      commit(LIBRARY_SET_TEXT_GROUP_URNS, { textGroupUrns });
    },
    [LIBRARY_RESET_TEXT_GROUP_WORKS]: ({ state, commit }) => {
      commit(LIBRARY_SET_TEXT_GROUPS, { works: [...state.allTextGroupWorks] });
    },
    [LIBRARY_FILTER_TEXT_GROUPS]: ({ state, commit }, query) => {
      if (state.allTextGroups) {
        const textGroups = [];
        state.allTextGroups.forEach((textGroup) => {
          if (textGroup.label.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            textGroups.push(textGroup);
          } else {
            const works = textGroup.works.filter((work) => {
              const { label } = state.textGroupUrns[work.urn.toString()];
              return label.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            });
            if (works.length > 0) {
              textGroups.push({ ...textGroup, works });
            }
          }
        });
        commit(LIBRARY_SET_TEXT_GROUPS, { textGroups });
      }
    },
    [LIBRARY_FILTER_TEXT_GROUP_WORKS]: ({ state, commit }, query) => {
      if (state.allTextGroupWorks) {
        const works = [];
        state.allTextGroupWorks.forEach((work) => {
          if (work.label.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            works.push(work);
          } else {
            const { label } = state.textGroupUrns[work.urn.upTo('textGroup')];
            if (label.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
              works.push(work);
            }
          }
        });
        commit(LIBRARY_SET_TEXT_GROUPS, { works });
      }
    },
    [LIBRARY_SET_SORT]: ({ commit }, { kind }) => {
      console.log('a set sort', kind);
      commit(LIBRARY_SET_SORT, { kind });
    },
  },
});
