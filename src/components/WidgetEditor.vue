<template>
  <div class="widget-editor">
    <WidgetSelector v-if="editing" @select="widget => $emit('change-widget', widget)" />
    <button @click="$emit('toggle-edit')">{{ editing ? 'Done' : 'Edit' }}</button>
  </div>
</template>
<script>
import WidgetSelector from './WidgetSelector.vue';

export default {
    props: ['editing'],
    components: { WidgetSelector },
}
</script>
<style lang="scss">
.widget-editor {
  text-align: center;
}
</style>
