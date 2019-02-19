<template>
  <div class="skeleton">
    <SidebarLayout name="left" class="left" :open="leftOpen" @toggle="onLeftToggle">
      <icon slot="open-close-button" name="arrow-left" />
      <icon slot="close-open-button" name="arrow-right" />
    </SidebarLayout>
    <GridLayout/>
    <SidebarLayout name="right" class="right" :open="rightOpen" @toggle="onRightToggle">
      <icon slot="open-close-button" name="arrow-right" />
      <icon slot="close-open-button" name="arrow-left" />
    </SidebarLayout>
  </div>
</template>

<script>
import { TOGGLE_RIGHT_SIDEBAR, TOGGLE_LEFT_SIDEBAR } from '../constants';

import GridLayout from "./GridLayout.vue";
import SidebarLayout from "./SidebarLayout.vue";
import Placeholder from "./Placeholder.vue";

export default {
  components: { GridLayout, Placeholder, SidebarLayout },
  methods: {
    onLeftToggle() {
      this.$store.dispatch(TOGGLE_LEFT_SIDEBAR);
    },
    onRightToggle() {
      this.$store.dispatch(TOGGLE_RIGHT_SIDEBAR);
    },
  },
  computed: {
    leftOpen() {
      return this.$store.state.leftOpen;
    },
    rightOpen() {
      return this.$store.state.rightOpen;
    },
  }
};
</script>

<style lang="scss">
.skeleton {
  display: flex;
  height: 100vh;
  .grid-layout {
    flex: 2;
    min-width: 600px;
    background: #eee;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  aside {
    flex: 1;
    background: #ddd;
    max-width: 600px;
    position: relative;
    overflow-y: auto;
  }
}


.skeleton {
  position: relative;
  aside.left {
    width: 0;
    button.toggle-open {
      position: absolute;
      top: 0;
      left: 0;
    }
    &.sidebar-left--open {
      width: 300px;

      button.toggle-open {
        position: inherit;
        top: inherit;
        left: inherit;
      }
    }
  }
  aside.right {
    width: 0;
    button.toggle-open {
      position: absolute;
      top: 0;
      right: 0;
    }
    &.sidebar-right--open {
      width: 300px;

      button.toggle-open {
        position: inherit;
        top: inherit;
        right: inherit;
      }
    }
  }
}
</style>
