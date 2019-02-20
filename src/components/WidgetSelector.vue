<template>
  <div class="add-widgets">
    <div class="widget-option" v-for="(option, i) in widgetOptions" :key="i" @click.prevent="$emit('select', option.component)">
      <span><icon name="plus-square" /> {{ option.text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      widgetOptions() {
        return this.$store.state.widgetOptions.map(o => {
          return { text: o.displayName, component: o };
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
    }

    color: $gray-700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
</style>
