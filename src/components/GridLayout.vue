<template>
  <div class="grid-layout">
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
    <div class="edit-mode">
      <WidgetSelector v-if="editing" @select="changeWidget" />
      <button @click="editing = !editing">{{ editing ? 'Done' : 'Edit' }}</button>
    </div>
  </div>
</template>
<script>
import MainWidget from './MainWidget.vue';
import WidgetSelector from './WidgetSelector.vue';

export default {
  components: {
    MainWidget,
    WidgetSelector,
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
    };
  },
  methods: {
    changeWidget(component) {
      this.configuredComponent = component;
    }
  }
};
</script>
<style>
.grid-layout {
  height: 100vh;
  position: relative;
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
