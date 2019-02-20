<template>
  <aside class="sidebar-wrapper" :class="{ 'sidebar-left--open': leftOpen, 'sidebar-left--closed': !leftOpen, 'sidebar-right--open': rightOpen, 'sidebar-right--closed': !rightOpen }">
    <div>
      <button class="toggle-open" v-if="open" @click="$emit('toggle')"><slot name="open-close-button" /></button>
      <button class="toggle-open" v-else @click="$emit('toggle')"><slot name="close-open-button" /></button>
    </div>
    <div class="sidebar">
      <div class="widgets">
        <SidebarWidget
          v-for="(widget, index) in widgets"
          :key="index"
          @remove="removeWidget(index)"
          :editing="editing"
          :heading="widget.displayName">
          <component slot="body" :is="widget" />
        </SidebarWidget>
      </div>
      <WidgetSelector v-if="editing" @select="addWidget" />
      <button @click="editing = !editing">{{ editing ? 'Done' : 'Edit' }}</button>
    </div>
  </aside>
</template>
<script>
import SidebarWidget from './SidebarWidget.vue';
import WidgetSelector from './WidgetSelector.vue';

export default {
  props: ["name", "open"],
  components: { WidgetSelector, SidebarWidget },
  data() {
    return {
      editing: false,
    }
  },
  computed: {
    leftOpen() {
      return this.$store.state.leftOpen;
    },
    rightOpen() {
      return this.$store.state.rightOpen;
    },
    widgets() {
      return this.$store.state.widgets[this.name];
    },
  },
  methods: {
    addWidget(component) {
      this.$store.state.widgets[this.name] = [
        ...this.$store.state.widgets[this.name],
        component
      ];
    },
    removeWidget(index) {
      const widgets = [...this.$store.state.widgets[this.name]];
      widgets.splice(index, 1);
      this.$store.state.widgets[this.name] = widgets;
    }
  }
};
</script>
<style lang="scss">
  .sidebar-wrapper {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .left.sidebar-wrapper.sidebar-left--closed,
  .right.sidebar-wrapper.sidebar-right--closed {
    flex: 0;
  }
  .sidebar {
    background: #ddd;
    overflow-y: auto;
    flex: 1;
  }
  .sidebar-left--closed .sidebar,
  .sidebar-right--closed .sidebar {
    max-width: 0;
    overflow: hidden;
    opacity: 0;
  }
  .left.sidebar-left--closed {
    button.toggle-open {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
    }
  }
  .right.sidebar-right--closed {
    button.toggle-open {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
    }
  }

  .left.sidebar-left--open,
  .right.sidebar-right--open {
     button.toggle-open {
      position: inherit;
      top: inherit;
      left: inherit;
    }
  }

  .left.sidebar-left--open .sidebar,
  .right.sidebar-right--open .sidebar {
    max-width: 600px;
  }
</style>

