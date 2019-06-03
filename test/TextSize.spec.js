/* global describe, expect, it  */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import SkeletonPlugin from '../src/skeleton/plugin';
import createStore from '../src/demos/config';
import TextSize from '../src/components/widgets/text-size/TextSize.vue';
import TextSizeWidget from '../src/components/widgets/text-size/TextSizeWidget.vue';

const localVue = createLocalVue();

const widgets = [
  TextSizeWidget,
];
localVue.use(SkeletonPlugin, { widgets });
localVue.use(Vuex);

describe('TextSize.vue', () => {
  const store = new Vuex.Store(createStore());

  it('sets the correct default data', () => {
    const wrapper = shallowMount(TextSize, {
      store,
      localVue,
      stubs: { },
    });

    expect(wrapper.text()).toBe('Αα');
    expect(store.state.readerTextSize).toBe('md');
  });
});
