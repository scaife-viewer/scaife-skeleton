<template>
  <div class="main-layout" @mouseover="hovering = true" @mouseout="hovering = false">
    <WidgetEditor class="main-widget-editor"
        v-if="editing || widget === null" kind="main"
        :editing="editing || widget === null"
        :main-editor="true"
        @toggle-edit="editing = !editing"
        @change-widget="changeWidget" />

    <MainWidget :editing="editing" v-else>
      <h2 class="main-widget-heading" slot="heading">
        <span>{{ widget.scaifeConfig.displayName }}</span>
        <a href @click.prevent="editing =! editing" class="main-layout-edit"><Icon name="cog" /></a>
      </h2>

      <component slot="body" :is="widget" />
    </MainWidget>
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
        this.editing = false;
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
    min-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .main-layout:hover .main-layout-edit {
    display: inline-block;
  }
  .widget h2.main-widget-heading {
    padding: 15px 25px 5px;
  }
  .main-layout-edit {
    display: none;
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
