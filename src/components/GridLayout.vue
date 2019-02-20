<template>
  <div class="grid-layout" @mouseover="hovering = true" @mouseout="hovering = false">
    <!-- <div class="grid-config">
      <a href="#" @click="grid = '1x1'">1x1</a> |
      <a href="#" @click="grid = '1x2'">1x2</a> |
      <a href="#" @click="grid = '2x1'">2x1</a> |
      <a href="#" @click="grid = '2x2'">2x2</a>
    </div> -->
    <div
      class="grid-container grid-two"
      :class="grid === '1x2' ? 'grid-vertical': 'grid-horizontal'"
      v-if="widgetCount === 2"
    >
    </div>
    <div class="grid-container grid-single" v-else-if="widgetCount === 1">
      <div>
        <MainWidget
          v-if="configuredComponent !== null"
          :editing="editing"
          @remove="configuredComponent = null">
          <component slot="body" :is="configuredComponent" />
        </MainWidget>
        <div v-else>Click on edit to add a component</div>
      </div>
    </div>
    <div class="grid-container grid-quad" v-else>
    </div>
    <WidgetEditor :editing="editing" :hovering="hovering" @toggle-edit="editing = !editing" @change-widget="changeWidget" />
  </div>
</template>
<script>
import MainWidget from './MainWidget.vue';
import WidgetEditor from './WidgetEditor.vue';

export default {
  components: {
    MainWidget,
    WidgetEditor,
  },
  computed: {
    widgetCount() {
      if (this.grid === "1x1") {
        return 1;
      } else if (this.grid === "1x2" || this.grid === "2x1") {
        return 2;
      } else {
        return 4;
      }
    }
  },
  data() {
    return {
      grid: "1x1",
      editing: false,
      configuredComponent: null,
      hovering: false,
    };
  },
  methods: {
    changeWidget(component) {
      this.configuredComponent = component;
    }
  }
};
</script>
<style lang="scss">
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
</style>
