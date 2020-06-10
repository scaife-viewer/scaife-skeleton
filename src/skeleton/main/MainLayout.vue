<template>
  <div class="main-layout" :class="flexSize">
    <MainWidget>
      <h2 class="main-widget-heading" slot="heading">
        <span>{{ widgetHeader }}</span>
        <EditLayoutButton
          v-if="isEditable && editing !== undefined"
          :editing="editing"
          @editToggle="$emit('editToggle')"
        />
      </h2>

      <WidgetEditor
        slot="body"
        v-if="editing"
        class="main-widget-editor"
        kind="main"
        :editing="editing"
        :main-widget="widget"
        :options="widgetOptions"
        @change-widget="(widget) => $emit('changeWidget', widget)"
      />
      <component
        slot="body"
        :is="widget"
        v-show="!editing"
        v-if="widget !== null"
      />
    </MainWidget>
  </div>
</template>

<script>
  import utils from '../utils';
  import EditLayoutButton from './EditLayoutButton.vue';
  import MainWidget from './MainWidget.vue';
  import WidgetEditor from '../editor/WidgetEditor.vue';
  import { SKELETON_NAMESPACE } from '../constants';

  export default {
    props: ['editing', 'widget', 'widgetOptions', 'fixed', 'isEditable'],
    components: {
      EditLayoutButton,
      MainWidget,
      WidgetEditor,
    },
    computed: {
      widgetHeader() {
        return this.widget
          ? utils.displayName(this.widget.scaifeConfig.displayName)
          : '';
      },
      flexSize() {
        return this.$store.state[SKELETON_NAMESPACE].mainLayoutFlexClass;
      },
    },
  };
</script>

<style lang="scss">
  @import '../../variables.scss';

  .main-layout-flex-2 {
    flex: 2;
  }
  .main-layout-flex-4 {
    flex: 4;
  }
  .main-layout-flex-6 {
    flex: 6;
  }

  .main-layout {
    height: 100vh;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .widget h2.main-widget-heading {
    padding: 15px 24px 15px;
  }
  .main-layout .widget {
    height: 100vh;
    overflow-y: scroll;
  }
</style>
