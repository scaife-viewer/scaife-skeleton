import utils from './utils';
import {
  ADD_LEFT_WIDGET,
  ADD_RIGHT_WIDGET,
  CHANGE_MAIN_WIDGET,
  REMOVE_LEFT_WIDGET,
  REMOVE_RIGHT_WIDGET,
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  SET_MAIN_LAYOUT_WIDTH_NORMAL,
  SET_MAIN_LAYOUT_WIDTH_WIDE,
  SET_MAIN_LAYOUT_WIDTH_WIDER,
  SKELETON_NAMESPACE,
} from './constants';

export default function createStore() {
  return {
    namespace: SKELETON_NAMESPACE,
    store: {
      namespaced: true, // expects to be namespaced under `scaife`
      state: {
        rightOpen: true,
        leftOpen: true,
        widgets: {
          mainWidget: null,
          right: [],
          left: [],
        },
        mainLayoutFlexClass: 'main-layout-flex-2',
      },
      getters: {},
      mutations: {
        [SET_MAIN_LAYOUT_WIDTH_NORMAL]: (state) => {
          state.mainLayoutFlexClass = 'main-layout-flex-2';
        },
        [SET_MAIN_LAYOUT_WIDTH_WIDE]: (state) => {
          state.mainLayoutFlexClass = 'main-layout-flex-4';
        },
        [SET_MAIN_LAYOUT_WIDTH_WIDER]: (state) => {
          state.mainLayoutFlexClass = 'main-layout-flex-6';
        },
        [TOGGLE_LEFT_SIDEBAR]: (state) => {
          state.leftOpen = !state.leftOpen;
        },
        [TOGGLE_RIGHT_SIDEBAR]: (state) => {
          state.rightOpen = !state.rightOpen;
        },
        [ADD_LEFT_WIDGET]: (state, widget) => {
          state.widgets.left = [
            ...state.widgets.left,
            utils.displayName(widget.scaifeConfig.displayName),
          ];
        },
        [ADD_RIGHT_WIDGET]: (state, widget) => {
          state.widgets.right = [
            ...state.widgets.right,
            utils.displayName(widget.scaifeConfig.displayName),
          ];
        },
        [REMOVE_LEFT_WIDGET]: (state, index) => {
          const widgets = [...state.widgets.left];
          widgets.splice(index, 1);
          state.widgets.left = widgets;
        },
        [REMOVE_RIGHT_WIDGET]: (state, index) => {
          const widgets = [...state.widgets.right];
          widgets.splice(index, 1);
          state.widgets.right = widgets;
        },
        [CHANGE_MAIN_WIDGET]: (state, widget) => {
          state.widgets = {
            ...state.widgets,
            mainWidget: utils.displayName(widget.scaifeConfig.displayName),
          };
        },
      },
      actions: {
        [SET_MAIN_LAYOUT_WIDTH_NORMAL]: ({ commit }) => {
          commit(SET_MAIN_LAYOUT_WIDTH_NORMAL);
        },
        [SET_MAIN_LAYOUT_WIDTH_WIDE]: ({ commit }) => {
          commit(SET_MAIN_LAYOUT_WIDTH_WIDE);
        },
        [SET_MAIN_LAYOUT_WIDTH_WIDER]: ({ commit }) => {
          commit(SET_MAIN_LAYOUT_WIDTH_WIDER);
        },
        [TOGGLE_LEFT_SIDEBAR]: ({ commit }) => {
          commit(TOGGLE_LEFT_SIDEBAR);
        },
        [TOGGLE_RIGHT_SIDEBAR]: ({ commit }) => {
          commit(TOGGLE_RIGHT_SIDEBAR);
        },
        [ADD_LEFT_WIDGET]: ({ commit }, { widget }) => {
          commit(ADD_LEFT_WIDGET, widget);
        },
        [ADD_RIGHT_WIDGET]: ({ commit }, { widget }) => {
          commit(ADD_RIGHT_WIDGET, widget);
        },
        [REMOVE_LEFT_WIDGET]: ({ commit }, { index }) => {
          commit(REMOVE_LEFT_WIDGET, index);
        },
        [REMOVE_RIGHT_WIDGET]: ({ commit }, { index }) => {
          commit(REMOVE_RIGHT_WIDGET, index);
        },
        [CHANGE_MAIN_WIDGET]: ({ commit }, { widget }) => {
          commit(CHANGE_MAIN_WIDGET, widget);
        },
      },
    },
  };
}
