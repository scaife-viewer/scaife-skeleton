<template>
  <div class="add-widgets">
    <div class="widget-option" v-for="(option, i) in widgetOptions" :key="i" @click.prevent="$emit('select', option.component)">
      <span><icon :name="iconName(option)" /> {{ option.text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['kind', 'mainEditor'],
    methods: {
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
        return this.$store.state.widgetOptions.filter(o => {
          const { location } = o.scaifeConfig;
          return location === this.kind || location === 'both';
        }).filter(o => {
          const { singleton } = o.scaifeConfig;
          if (singleton) {
            return (this.mainWidget !== o &&
                    this.$store.state.widgets.left.indexOf(o) === -1 &&
                    this.$store.state.widgets.right.indexOf(o) === -1)
          } else {
            return true;
          }
        }).map(o => {
          return { text: o.scaifeConfig.displayName, component: o };
        });
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
    &:hover {
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
