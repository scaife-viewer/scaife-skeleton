<template>
  <div class="widget-editor" :class="{ editing, hovering }">
    <WidgetSelector v-if="editing" @select="widget => $emit('change-widget', widget)" />
    <button @click="$emit('toggle-edit')">{{ editing ? 'Done' : 'Edit' }}</button>
  </div>
</template>
<script>
import WidgetSelector from './WidgetSelector.vue';

export default {
    props: ['editing', 'hovering'],
    components: { WidgetSelector },
}
</script>
<style lang="scss">
.widget-editor {
  text-align: center;
  display: none;
  &.editing,
  &.hovering {
    display: block;
  }
}
</style>
