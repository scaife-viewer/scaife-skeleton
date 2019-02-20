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
      v-if="placeholderCount === 2"
    >
      <Placeholder :fixed="true" :widget-base="widgetBase" />
      <Placeholder :fixed="true" :widget-base="widgetBase" />
    </div>
    <div class="grid-container grid-single" v-else-if="placeholderCount === 1">
      <div>
        <Placeholder :fixed="true" :configured-component="configuredComponent" :widget-base="widgetBase" />

        <WidgetSelector v-if="editing" @select="changePlaceholder" />
        <button @click="editing = !editing">{{ editing ? 'Done' : 'Edit' }}</button>
      </div>
    </div>
    <div class="grid-container grid-quad" v-else>
      <Placeholder :fixed="true" :widget-base="widgetBase" />
      <Placeholder :fixed="true" :widget-base="widgetBase" />
      <Placeholder :fixed="true" :widget-base="widgetBase" />
      <Placeholder :fixed="true" :widget-base="widgetBase" />
    </div>
  </div>
</template>
<script>
import Placeholder from "./Placeholder.vue";
import MainWidget from './MainWidget.vue';
import WidgetSelector from './WidgetSelector.vue';

export default {
  components: {
    Placeholder,
    WidgetSelector,
  },
  computed: {
    widgetBase(){
      return MainWidget;
    },
    placeholderCount() {
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
    changePlaceholder(component) {
      this.configuredComponent = component;
      // this.$store.state.placeholders[this.name] = [
      //   ...this.$store.state.placeholders[this.name],
      //   {
      //     placeholder: Placeholder,
      //     widget: component
      //   }
      // ];
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
.grid-container .placeholder {
}
</style>
