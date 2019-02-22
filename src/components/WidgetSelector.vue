<template>
  <div class="add-widgets">
    <div class="widget-option" :class="{ selected: selected(option) }" v-for="(option, i) in widgetOptions" :key="i" @click.prevent="$emit('select', option.component)">
      <span><icon :name="iconName(option)" /> {{ option.text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['kind', 'mainEditor'],
    methods: {
      selected(option) {
        return this.mainEditor && this.mainWidget === option.component;
      },
      iconName(option) {
        if (this.mainEditor) {
          return this.mainWidget === option.component ? 'check-square' : 'square';
        } else {
          return 'plus-square';
        }
      },
    },
    computed: {
      mainWidget() {
        return this.$store.state.widgets.mainWidget;
      },
      widgetOptions() {
        const { mainWidget, left, right } = this.$store.state.widgets;
        return this.$scaife.skeleton.widgetOptions(this.kind, mainWidget, left, right);
      }
    }
  }
</script>

<style lang="scss">
  @import "../variables.scss";

  .widget-option {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.75rem 1.25rem;
    margin: 0.5rem 0.375rem;
    border: 1px solid $gray-100;
    background: $gray-200;
    &:hover,
    &.selected {
      background: $gray-300;
      color: $black;
      span svg {
        color: #0A0;
      }
    }

    color: $gray-700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
</style>
