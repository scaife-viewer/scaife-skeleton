<template>
  <div class="widget-editor" :class="{ editing, hovering }">
    <WidgetSelector :main-editor="mainEditor" :kind="kind" v-if="editing" @select="widget => $emit('change-widget', widget)" />
    <button v-if="!mainEditor" @click="$emit('toggle-edit')">{{ editing ? 'Done' : 'Edit' }}</button>
  </div>
</template>

<script>
  import WidgetSelector from './WidgetSelector.vue';

  export default {
    props: ['kind', 'editing', 'hovering', 'mainEditor'],
    components: { WidgetSelector },
  }
</script>

<style lang="scss">
  @import "../variables.scss";

  .widget-editor {
    z-index: 2000;  // has to be more than the widget sticky-block
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid $gray-300;
    background: $gray-100;
    text-align: center;
    display: none;
    &.editing,
    &.hovering {
      display: block;
    }
    button {
      margin: 15px 0;
      background: $gray-200;
      color: $gray-700;
      padding: 0.5rem 2rem;
      border: none;
      font-size: 14px;
      &:hover {
        background: $gray-300;
        color: $black;
      }
    }

    &.main-widget-editor {
      position: relative;

    }
  }

</style>
