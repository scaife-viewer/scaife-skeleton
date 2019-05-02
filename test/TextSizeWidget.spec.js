/* global describe, expect, it  */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import TextSize from '../src/components/widgets/text-size/TextSize.vue';
import TextSizeWidget from '../src/components/widgets/text-size/TextSizeWidget.vue';
import TextWidthWidget from '../src/components/widgets/text-width/TextWidthWidget.vue';
import createStore from '../src/config';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TextSizeWidget.vue', () => {
  const store = new Vuex.Store(createStore());

  it('sets the correct default data', () => {
    const wrapper = shallowMount(TextSizeWidget, {
      store,
      localVue,
      stubs: { },
    });

    expect(wrapper.html()).toContain('<div class="text-size-widget"><textsize-stub size="xs" value="md"></textsize-stub>');
    expect(store.state.readerTextSize).toBe('md');
  });

  it('updates the "readerTextSize" appropriately', () => {
    const wrapper = shallowMount(TextSizeWidget, {
      store,
      localVue,
      stubs: { },
    });

    expect(wrapper.html()).toContain('<div class="text-size-widget"><textsize-stub size="xs" value="md"></textsize-stub>');
    expect(store.state.readerTextSize).toBe('md');
    store.dispatch('setTextSize', { size: 'sm' });
    expect(wrapper.html()).toContain('<div class="text-size-widget"><textsize-stub size="xs" value="sm"></textsize-stub>');
    expect(store.state.readerTextSize).toBe('sm');
    store.dispatch('setTextSize', { size: 'lg' });
    expect(wrapper.html()).toContain('<div class="text-size-widget"><textsize-stub size="xs" value="lg"></textsize-stub>');
    expect(store.state.readerTextSize).toBe('lg');
    store.dispatch('setTextSize', { size: 'xl' });
    expect(wrapper.html()).toContain('<div class="text-size-widget"><textsize-stub size="xs" value="xl"></textsize-stub>');
    expect(store.state.readerTextSize).toBe('xl');
    store.dispatch('setTextSize', { size: 'md' });
    expect(wrapper.html()).toContain('<div class="text-size-widget"><textsize-stub size="xs" value="md"></textsize-stub>');
    expect(store.state.readerTextSize).toBe('md');
  });
});
