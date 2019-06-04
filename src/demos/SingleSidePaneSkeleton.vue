<template>
    <EditableSkeleton
      @leftToggle="onLeftToggle"
      @rightToggle="onRightToggle"
      @addWidget="addWidget"
      @changeWidget="changeWidget"
      @removeWidget="removeWidget"
      :left-visible="leftVisible"
      :left-open="leftOpen"
      :right-visible="rightVisible"
      :right-open="rightOpen"
      :main-widget="mainWidget"
      :left-widgets="leftWidgets"
      :right-widgets="rightWidgets"
    />
</template>
<script>
  import EditableSkeleton from '../skeleton/EditableSkeleton.vue'
  import ToggleVisibilityWidget from '../components/widgets/visibility/ToggleVisibilityWidget.vue';
  import {
    TOGGLE_RIGHT_SIDEBAR, TOGGLE_LEFT_SIDEBAR,
    TOGGLE_RIGHT_SIDEBAR_VISIBILITY
  } from './constants';

  export default {
    components: {
      EditableSkeleton
    },
    methods: {
      onLeftToggle() {
        this.$store.dispatch(TOGGLE_LEFT_SIDEBAR);
      },
      onRightToggle() {
        this.$store.dispatch(TOGGLE_RIGHT_SIDEBAR);
      },
      addWidget(name, widget) {
        this.$store.state.widgets[name] = [
          ...this.$store.state.widgets[name],
          widget
        ];
      },
      changeWidget(mainWidget) {
        this.$store.state.widgets = {
          ...this.$store.state.widgets,
          mainWidget,
        };
      },
      removeWidget(name, index)  {
        const widgets = [...this.$store.state.widgets[name]];
        widgets.splice(index, 1);
        this.$store.state.widgets[name] = widgets;
      }
    },
    created() {
      this.$store.dispatch(TOGGLE_RIGHT_SIDEBAR_VISIBILITY);
    },
    computed: {
      mainWidget() {
        return ToggleVisibilityWidget;
      },
      leftWidgets() {
        return this.$store.state.widgets.left;
      },
      rightWidgets() {
        return this.$store.state.widgets.right;
      },
      leftVisible() {
        return this.$store.state.leftVisible;
      },
      rightVisible() {
        return this.$store.state.rightVisible;
      },
      leftOpen() {
        return this.$store.state.leftOpen;
      },
      rightOpen() {
        return this.$store.state.rightOpen;
      },
    }
  }
</script>
