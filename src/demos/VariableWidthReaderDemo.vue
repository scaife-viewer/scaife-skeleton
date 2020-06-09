<template>
  <FixedSkeleton
    :main-widget="mainWidget"
    :left-widgets="leftWidgets"
    :right-widgets="rightWidgets"
  >
  </FixedSkeleton>
</template>
<script>
  import {
    TextSizeWidget,
    TextWidthWidget,
  } from '@scaife-viewer/scaife-widgets';
  import FixedSkeleton from '../skeleton';

  import WidthWidget from './WidthWidget.vue';
  import PortalDemoWidget from './PortalDemoWidget.vue';
  import SelectablePassageWidget from '../components/widgets/morphgnt/SelectablePassageWidget.vue';

  export default {
    components: {
      FixedSkeleton,
    },
    methods: {},
    computed: {
      mainWidget() {
        return SelectablePassageWidget;
      },
      leftWidgets() {
        return [WidthWidget, PortalDemoWidget];
      },
      rightWidgets() {
        return [TextSizeWidget, TextWidthWidget];
      },
    },
  };
</script>

<style lang="scss">
  @import '../variables.scss';

  .text-size-control {
    cursor: pointer;
    font-family: 'Noto Serif';

    color: $gray-500;

    &.selected {
      color: $gray-800;
    }
  }

  .text-width-widget {
    margin: 0 2em;
    flex: 1;
    .text-width-control {
      font-family: 'Noto Serif';
      cursor: pointer;
      color: $gray-500;
      font-size: 14px;
      padding-right: 5px;
    }

    .text-width-control.active {
      color: $black;
    }
  }
</style>
