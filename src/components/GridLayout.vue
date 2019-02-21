<template>
  <div class="grid-layout" @mouseover="hovering = true" @mouseout="hovering = false">
    <!-- <div class="grid-config">
      <a href="#" @click="grid = '1x1'">1x1</a> |
      <a href="#" @click="grid = '1x2'">1x2</a> |
      <a href="#" @click="grid = '2x1'">2x1</a> |
      <a href="#" @click="grid = '2x2'">2x2</a>
    </div> -->
    <div class="grid-container" :class="gridClass">
        <MainWidget
          v-for="(widget, index) in widgets"
          :key="index"
          @remove="removeWidget(index)"
          :editing="editing"
          :heading="widget.displayName">
          <component slot="body" :is="widget" />
        </MainWidget>
    </div>
    <WidgetEditor :editing="editing" :hovering="hovering" @toggle-edit="editing = !editing" @change-widget="addWidget" />
  </div>
</template>

<script>
  import MainWidget from './MainWidget.vue';
  import WidgetEditor from './WidgetEditor.vue';

  const GRID_CLASSES = {
    1: 'grid-single',
    2: 'grid-two grid-horizontal',
    3: 'grid-triple',
    4: 'grid-quad',
  }

  export default {
    components: {
      MainWidget,
      WidgetEditor,
   },
    computed: {
      gridClass() {
        return GRID_CLASSES[this.widgets.length];
      },
      widgets() {
        return this.$store.state.widgets.main;
      },
    },
    data() {
      return {
        grid: "1x1",
        editing: false,
        hovering: false,
      };
    },
    methods: {
      // These should really dispatch actions
      addWidget(component) {
        this.$store.state.widgets.main = [
          ...this.$store.state.widgets.main,
          component
        ];
      },
      removeWidget(index) {
        const widgets = [...this.$store.state.widgets.main];
        widgets.splice(index, 1);
        this.$store.state.widgets.main = widgets;
      }
    }
  };
</script>

<style lang="scss">
  @import "../variables.scss";

  .grid-layout {
    height: 100vh;
    position: relative;
    margin: 0 auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
       max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }

  .grid-layout .widget .body {
    overflow-y: scroll;
  }
  .grid-config {
    text-align: center;
  }
  .grid-container {
    display: grid;
    flex: 1;
    overflow-y: auto;
  }
  .grid-single {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
  .grid-quad {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  .grid-two.grid-vertical {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
  .grid-two.grid-horizontal {
    grid-template-columns: auto auto;
    grid-template-rows: auto;
  }

  .instructions {
    margin-top: 100px;
    text-align: center;
  }

  .grid-container .widget {
    border: 1px solid $gray-200;
  }
</style>
