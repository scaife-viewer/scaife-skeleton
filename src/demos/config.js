import axios from 'axios';

import {
  PREVIOUS_CARD,
  NEXT_CARD,
  SET_PASSAGE_TEXT,
  SET_SELECTED_LEMMAS,
  SET_TEXT_SIZE,
  SET_TEXT_WIDTH,
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  MORPHGNT_SET_BOOKS,
  MORPHGNT_SET_BOOK,
  MORPHGNT_SET_PASSAGE,
  MORPHGNT_SELECT_WORD,
  MORPHGNT_TOGGLE_INTERLINEAR,
  MORPHGNT_SET_SELECTED_WORD,
  HOMER_SELECT_CARD,
  HOMER_LOOKUP_REFERENCE,
  SET_IMAGE_URL,
} from './constants';

import cards from './homer';

const parseHomerReference = (ref) => {
  const parts = ref.split('.');
  return {
    book: parseInt(parts[0], 10),
    line: parseInt(parts[1], 10),
  };
};

export default function createStore() {
  return {
    state: {
      rightOpen: true,
      leftOpen: true,
      leftVisible: true,
      rightVisible: true,
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
      readerTextWidth: 'normal',

      interlinear: false,
      books: [],
      book: null,
      passage: null,
      word: null,
      selectedCard: null,
      cards,
      imageURL: '',
    },
    getters: {
      // eslint-disable-next-line arrow-parens
      getChunks: (state) => (start, end) => {
        const parsedStart = parseHomerReference(start);
        const parsedEnd = parseHomerReference(end);

        const newCards = [];
        let startFound = false;
        let endFound = false;
        state.cards.forEach((c) => {
          const parts = c.split('-');
          const cardStart = parseHomerReference(parts[0]);
          const cardEnd = parseHomerReference(parts[1]);

          if (
            // eslint-disable-next-line operator-linebreak
            parsedStart.book === cardStart.book &&
            parsedStart.line >= cardStart.line
          ) {
            startFound = true;
          }
          if (
            // eslint-disable-next-line operator-linebreak
            parsedEnd.book === cardEnd.book &&
            parsedEnd.line <= cardEnd.line
          ) {
            if (!endFound) {
              newCards.push(c);
            }
            endFound = true;
          }
          if (startFound && !endFound) {
            newCards.push(c);
          }
        });

        return newCards;
      },
    },
    mutations: {
      [SET_SELECTED_LEMMAS]: (state, lemmas) => {
        state.selectedLemmas = lemmas;
      },
      [SET_TEXT_SIZE]: (state, size) => {
        state.readerTextSize = size;
      },
      [SET_TEXT_WIDTH]: (state, width) => {
        state.readerTextWidth = width;
      },
      [SET_PASSAGE_TEXT]: (state, lines) => {
        state.passageText = lines;
      },
      [TOGGLE_LEFT_SIDEBAR]: (state) => {
        state.leftOpen = !state.leftOpen;
      },
      [TOGGLE_RIGHT_SIDEBAR]: (state) => {
        state.rightOpen = !state.rightOpen;
      },
      [MORPHGNT_SET_BOOKS]: (state, books) => {
        state.books = books;
      },
      [MORPHGNT_SET_BOOK]: (state, book) => {
        state.book = book;
      },
      [MORPHGNT_SET_PASSAGE]: (state, passage) => {
        // eslint-disable-next-line object-curly-newline
        const { prev, next, title, words } = passage;
        state.passage = {
          prev,
          next,
          title,
          // eslint-disable-next-line arrow-parens
          words: words.map((word) => ({
            id: word['@id'].slice(-16, -5),
            classes: [`pos-${word.pos}`, `case-${word.case}`],
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
      [MORPHGNT_SELECT_WORD]: (state, word) => {
        state.word = word;
      },
      [MORPHGNT_TOGGLE_INTERLINEAR]: (state) => {
        state.interlinear = !state.interlinear;
      },
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
      [HOMER_SELECT_CARD]: (state, { card }) => {
        state.selectedCard = card;
      },
      [SET_IMAGE_URL]: (state, url) => {
        state.imageURL = url;
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
      [SET_TEXT_WIDTH]: ({ commit }, { width }) => {
        commit(SET_TEXT_WIDTH, width);
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
      [HOMER_SELECT_CARD]: ({ commit, dispatch }, { card }) => {
        axios
          .get(
            // eslint-disable-next-line comma-dangle
            `https://homer-api.herokuapp.com/urn:cts:greekLit:tlg0012.tlg001.perseus-grc2:${card}/`
          )
          .then((r) => {
            dispatch(SET_PASSAGE_TEXT, { lines: r.data });
            commit(HOMER_SELECT_CARD, { card });
          });
      },
      [PREVIOUS_CARD]: ({ dispatch, state }) => {
        let index;
        if (state.selectedCard === null) {
          index = state.cards.length - 1;
        } else {
          const currentIndex = state.cards.indexOf(state.selectedCard);
          if (currentIndex === 0) {
            index = state.cards.length - 1;
          } else {
            index = currentIndex - 1;
          }
        }
        dispatch(HOMER_SELECT_CARD, { card: state.cards[index] });
      },
      [NEXT_CARD]: ({ dispatch, state }) => {
        let index;
        if (state.selectedCard === null) {
          index = 0;
        } else {
          const currentIndex = state.cards.indexOf(state.selectedCard);
          if (currentIndex === state.cards.length - 1) {
            index = 0;
          } else {
            index = currentIndex + 1;
          }
        }
        dispatch(HOMER_SELECT_CARD, { card: state.cards[index] });
      },
      [HOMER_LOOKUP_REFERENCE]: ({ dispatch }, { reference }) => {
        dispatch(HOMER_SELECT_CARD, { card: reference });
      },
      [SET_IMAGE_URL]: ({ commit }, { url }) => {
        commit(SET_IMAGE_URL, url);
      },
    },
  };
}
