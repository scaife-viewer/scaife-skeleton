<template>
  <div class="toggle-visibility-widget">
    <div class="toggle">
      <div class="toggle-label">Left Sidebar</div>
      <div class="toggle-toggle">
        <input class="tgl tgl-flat" id="toggle-right" type="checkbox" v-model="leftVisible"/>
        <label class="tgl-btn" for="toggle-right"></label>
      </div>
    </div>
    <div class="toggle">
      <div class="toggle-label">Right Sidebar</div>
      <div class="toggle-toggle">
        <input class="tgl tgl-flat" id="toggle-left" type="checkbox" v-model="rightVisible"/>
        <label class="tgl-btn" for="toggle-left"></label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    scaifeConfig: {
      displayName: 'Toggle Sidebar Visibility',
      singleton: true,
      location: 'main',  // Should be sidebar but just testing the 'both' option
    },
    computed: {
      leftVisible: {
        get() {
          return this.$store.state.leftVisible;
        },
        set() {
          this.$store.dispatch('changeSidebarVisibility', { side: 'left', bool: !this.leftVisible });
        }
      },
      rightVisible: {
        get() {
          return this.$store.state.rightVisible;
        },
        set() {
          this.$store.dispatch('changeSidebarVisibility', { side: 'right', bool: !this.rightVisible });
        }
      },
    },
  };
</script>

<style lang="scss">
  @import "../../variables.scss";

  .toggle-visibility-widget {
    text-align: left;
    flex: 1;
    padding-left: 50px;
  }

  .toggle-visibility-widget > div {
    display: flex;
    .toggle-label,
    .text-reuse-label {
      width: 120px;
      margin-top: auto;
      margin-bottom: auto;
    }
    .disabled {
      color: $gray-500;
    }
  }
  .tgl {
    display: none;
    // add default box-sizing for this scope
    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before,
    & + .tgl-btn {
      box-sizing: border-box;
      &::selection {
        background: none;
      }
    }
    + .tgl-btn {
      outline: 0;
      display: block;
      width: 4em;
      height: 2em;
      position: relative;
      cursor: pointer;
      user-select: none;
      &:after,
      &:before {
        position: relative;
        display: block;
        content: "";
        width: 50%;
        height: 100%;
      }
      &:after {
        left: 0;
      }
      &:before {
        display: none;
      }
    }
    &:checked + .tgl-btn:after {
      left: 50%;
    }
  }
  .tgl-flat {
    + .tgl-btn {
      padding: 2px;
      transition: all .2s ease;
      background: #fff;
      border: 4px solid #f2f2f2;
      border-radius: 2em;
      &:after {
        transition: all .2s ease;
        background: #f2f2f2;
        content: "";
        border-radius: 1em;
      }
    }
    &:checked + .tgl-btn {
      border: 4px solid #7FC6A6;
      &:after {
        left: 50%;
        background: #7FC6A6;
      }
    }
  }

</style>
