<template>
  <div class="main-layout">
    <MainWidget>
      <h2 class="main-widget-heading" slot="heading">
        <span>{{ widgetHeader }}</span>
        <EditLayoutButton :editing="editing" @editToggle="$emit('editToggle')" />
      </h2>

      <WidgetEditor slot="body" v-if="editing" class="main-widget-editor"
        kind="main"
        :editing="editing"
        :main-editor="true"
        @change-widget="changeWidget" />
      <component slot="body" :is="widget" v-else-if="widget !== null" />
    </MainWidget>
  </div>
</template>

<script>
  import EditLayoutButton from './EditLayoutButton.vue';
  import MainWidget from './MainWidget.vue';
  import WidgetEditor from './WidgetEditor.vue';

  export default {
    props: ['editing'],
    components: {
      EditLayoutButton,
      MainWidget,
      WidgetEditor,
    },
    computed: {
      widgetHeader() {
        return this.widget ? this.widget.scaifeConfig.displayName : '';
      },
      widget() {
        return this.$store.state.widgets.mainWidget;
      },
    },
    methods: {
      // These should really dispatch actions
      changeWidget(mainWidget) {
        this.$store.state.widgets = {
          ...this.$store.state.widgets,
          mainWidget,
        };
      },
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .widget h2.main-widget-heading {
    padding: 15px 25px 5px;
  }
  .main-layout .widget {
    height: 100vh;
    overflow-y: scroll;
  }
</style>
