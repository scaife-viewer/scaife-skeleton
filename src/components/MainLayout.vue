<template>
  <div class="main-layout">
    <MainWidget>
      <h2 class="main-widget-heading" slot="heading">
        <span>{{ widgetHeader }}</span>
        <a href @click.prevent="$emit('editToggle')" class="main-layout-edit"><Icon name="cog" /></a>
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
  import MainWidget from './MainWidget.vue';
  import WidgetEditor from './WidgetEditor.vue';

  export default {
    props: ['editing'],
    components: {
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
  .main-layout-edit {
    color: $gray-300;
    border: none;
    font-size: 14px;
    &:hover {
      color: $gray-700;
    }
  }
  .main-layout .widget {
    height: 100vh;
    overflow-y: scroll;
  }
</style>
