<template>
  <aside :class="{ 'sidebar-left--open': leftOpen, 'sidebar-right--open': rightOpen }">
    <button class="toggle-open" v-if="open" @click="$emit('toggle')"><slot name="open-close-button" /></button>
    <button class="toggle-open" v-else @click="$emit('toggle')"><slot name="close-open-button" /></button>
    <div>
      <button @click="addPlaceholder">Add Placeholder</button>
      <component
        v-for="(placeholder, index) in placeholders"
        :key="index"
        :configured-component="placeholder.widget"
        :is="placeholder.placeholder"
        @configured="widget => onConfigure(widget, index)"
        @remove="removePlaceholder(index)"
      />
    </div>
  </aside>
</template>
<script>
import Placeholder from "./Placeholder.vue";

export default {
  props: ["name", "open"],
  computed: {
    leftOpen() {
      return this.$store.state.leftOpen;
    },
    rightOpen() {
      return this.$store.state.rightOpen;
    },
    placeholders() {
      return this.$store.state.placeholders[this.name];
    }
  },
  methods: {
    onConfigure(widget, index) {
      this.$store.state.placeholders[this.name][index].widget = widget;
    },
    addPlaceholder() {
      this.$store.state.placeholders[this.name] = [
        ...this.$store.state.placeholders[this.name],
        {
          placeholder: Placeholder,
          widget: null
        }
      ];
    },
    removePlaceholder(index) {
      const placeholders = [...this.$store.state.placeholders[this.name]];
      placeholders.splice(index, 1);
      this.$store.state.placeholders[this.name] = placeholders;
    }
  }
};
</script>
