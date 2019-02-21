<template>
  <div class="main-layout" @mouseover="hovering = true" @mouseout="hovering = false">
    <MainWidget @remove="removeWidget" :editing="editing" v-if="widget !== null">
      <div slot="heading">{{ widget.displayName }}</div>
      <component slot="body" :is="widget" />
    </MainWidget>

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
      widget() {
        return this.$store.state.widgets.mainWidget;
      },
    },
    data() {
      return {
        editing: false,
        hovering: false,
      };
    },
    methods: {
      // These should really dispatch actions
      changeWidget(mainWidget) {
        this.$store.state.widgets = {
          ...this.$store.state.widgets,
          mainWidget,
        };
      },
      removeWidget() {
        this.$store.state.widgets = {
          ...this.$store.state.widgets,
          mainWidget: null,
        };
      }
    }
  };
</script>

<style lang="scss">
  @import "../variables.scss";

  .main-layout {
    height: 100vh;
    position: relative;
    margin: 0 auto;
    flex: 2;
    min-width: 600px;
    display: flex;
    flex-direction: column;

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

  .main-layout .widget .body {
    overflow-y: scroll;
  }
</style>
