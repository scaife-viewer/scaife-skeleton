<template>
  <div class="skeleton">
    <SidebarLayout
      class="left"
      :class="sidebarClasses"
      @changeWidget="widget => addWidget('left', widget)"
      @removeWidget="index => removeWidget('left', index)"
      @editToggle="editing = !editing"
      :widgets="leftWidgets"
      :editing="editing">
      <div slot="button-container" class="button-container">
        <button class="toggle-open" v-if="leftOpen" @click="onLeftToggle"><Icon name="arrow-left" /></button>
        <button class="toggle-open" v-else @click="onLeftToggle"><Icon name="arrow-right" /></button>
      </div>
    </SidebarLayout>

    <MainLayout
      @changeWidget="changeWidget"
      @editToggle="editing = !editing"
      :editing="editing"
      :widget="mainWidget"
    />

    <SidebarLayout
      class="right"
      :class="sidebarClasses"
      @changeWidget="widget => addWidget('right', widget)"
      @removeWidget="index => removeWidget('right', index)"
      @editToggle="editing = !editing"
      :widgets="rightWidgets"
      :editing="editing">
      <div slot="button-container" class="button-container">
        <button class="toggle-open" v-if="rightOpen" @click="onRightToggle"><Icon name="arrow-right" /></button>
        <button class="toggle-open" v-else @click="onRightToggle"><Icon name="arrow-left" /></button>
      </div>
    </SidebarLayout>
  </div>
</template>

<script>
  import { TOGGLE_RIGHT_SIDEBAR, TOGGLE_LEFT_SIDEBAR } from '../constants';

  import MainLayout from "./main/MainLayout.vue";
  import SidebarLayout from "./sidebar/SidebarLayout.vue";

  export default {
    props: ['mainWidget', 'leftWidgets', 'rightWidgets'],
    components: { MainLayout, SidebarLayout },
    data() {
      return {
        editing: false,
      }
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
    computed: {
      sidebarClasses() {
        return [
          this.leftOpen ? 'sidebar-left--open' : 'sidebar-left--closed',
          this.rightOpen ? 'sidebar-right--open' : 'sidebar-right--closed',
        ];
      },
      leftOpen() {
        return this.$store.state.leftOpen;
      },
      rightOpen() {
        return this.$store.state.rightOpen;
      },
    }
  };
</script>

<style lang="scss">
  @import "../variables.scss";

  .skeleton {
    display: flex;
    height: 100vh;
    background: $gray-200;
    position: relative;
  }
</style>
