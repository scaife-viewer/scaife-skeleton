<template>
  <component :is="widgetBase" class="text-size-widget">
    <span slot="header">Text Size</span>
    <div slot="body">
      <TextSize :value="textSize" @input="changeTextSize" size="xs" />{{ ' ' }}
      <TextSize :value="textSize" @input="changeTextSize" size="sm" />{{ ' ' }}
      <TextSize :value="textSize" @input="changeTextSize" size="md" />{{ ' ' }}
      <TextSize :value="textSize" @input="changeTextSize" size="lg" />{{ ' ' }}
      <TextSize :value="textSize" @input="changeTextSize" size="xl" />
    </div>
  </component>
</template>

<script>
import TextSize from './TextSize.vue';

export default {
  props: ['widget-base'],
  displayName: 'Text Size',
  computed: {
    textSize() {
      return this.$store.state.readerTextSize;
    },
  },
  methods: {
    changeTextSize(size) {
      this.$store.dispatch('setTextSize', { size });
    },
  },
  components: { TextSize },
};
</script>
