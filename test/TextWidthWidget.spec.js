/* global describe, expect, it  */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import TextWidthWidget from '../src/components/widgets/text-width/TextWidthWidget.vue';
import createStore from '../src/config';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TextWidthWidget.vue', () => {
  const store = new Vuex.Store(createStore());

  it('sets the correct default data', () => {
    const wrapper = shallowMount(TextWidthWidget, {
      store,
      localVue,
      stubs: { },
    });
    const normalSpan = wrapper.findAll('span').at(1);

    expect(wrapper.text()).toBe('Narrow Normal Wide');
    expect(normalSpan.html()).toBe('<span class="text-width-control active">Normal</span>');
    expect(store.state.readerTextWidth).toBe('normal');
  });

  it('updates the "textWidth" appropriately', () => {
    const wrapper = shallowMount(TextWidthWidget, {
      store,
      localVue,
      stubs: { },
    });
    const narrowSpan = wrapper.findAll('span').at(0);
    const normalSpan = wrapper.findAll('span').at(1);
    const wideSpan = wrapper.findAll('span').at(2);

    expect(narrowSpan.html()).toBe('<span class="text-width-control">Narrow</span>');
    expect(normalSpan.html()).toBe('<span class="text-width-control active">Normal</span>');
    expect(wideSpan.html()).toBe('<span class="text-width-control">Wide</span>');
    expect(store.state.readerTextWidth).toBe('normal');

    wideSpan.trigger('click');
    expect(narrowSpan.html()).toBe('<span class="text-width-control">Narrow</span>');
    expect(normalSpan.html()).toBe('<span class="text-width-control">Normal</span>');
    expect(wideSpan.html()).toBe('<span class="text-width-control active">Wide</span>');
    expect(store.state.readerTextWidth).toBe('wide');

    narrowSpan.trigger('click');
    expect(narrowSpan.html()).toBe('<span class="text-width-control active">Narrow</span>');
    expect(normalSpan.html()).toBe('<span class="text-width-control">Normal</span>');
    expect(wideSpan.html()).toBe('<span class="text-width-control">Wide</span>');
    expect(store.state.readerTextWidth).toBe('narrow');

    normalSpan.trigger('click');
    expect(narrowSpan.html()).toBe('<span class="text-width-control">Narrow</span>');
    expect(normalSpan.html()).toBe('<span class="text-width-control active">Normal</span>');
    expect(wideSpan.html()).toBe('<span class="text-width-control">Wide</span>');
    expect(store.state.readerTextWidth).toBe('normal');
  });
});
