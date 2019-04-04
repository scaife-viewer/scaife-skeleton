/* global describe, expect, it  */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import TextSize from '../src/components/widgets/text-size/TextSize.vue';
import createStore from '../src/config';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TextSize.vue', () => {
  const store = new Vuex.Store(createStore());

  it('sets the correct default data', () => {
    const wrapper = shallowMount(TextSize, {
      store,
      localVue,
      stubs: { BaseWidget: true },
    });

    expect(wrapper.text()).toBe('Αα');
    expect(wrapper.html()).toBe('<span class="text-size-control text-undefined selected">Αα</span>');
  });
});
