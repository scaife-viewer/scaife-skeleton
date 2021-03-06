<template>
  <div class="open-seadragon">
    <div id="image-toolbar" class="toolbar">
      <span v-show="displayViewer">
        <small>
          <a id="zoom-in" class="link" title="Zoom in">Zoom In</a>
          <span>&vert;&nbsp;</span>
          <a id="zoom-out" class="link" title="Zoom out">Zoom Out</a>
          <span>&vert;&nbsp;</span>
          <a id="home" class="link" title="Go home">Home</a>
          <span>&vert;&nbsp;</span>
          <a id="full-page" class="link" title="Toggle full page">Full Page</a>
        </small>
      </span>
      <div v-show="displayViewer" id="image-viewer" class="viewer"></div>
      <div v-show="errorMessage" class="error">
        <i class="fa fa-times-circle"></i>
        <span>&nbsp;<strong>Error:</strong></span>
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  // eslint-disable-next-line import/no-extraneous-dependencies
  import OpenSeadragon from 'openseadragon';

  export default {
    props: ['imageUrl'],
    data() {
      return {
        viewer: null,
        displayViewer: false,
        errorMessage: null,
      };
    },
    watch: {
      imageUrl: {
        immediate: true,
        handler() {
          this.updateImage();
        },
      },
      viewer: {
        immediate: true,
        handler() {
          this.updateImage();
        },
      },
    },
    computed: {
      viewerOptions() {
        return {
          // options: http://openseadragon.github.io/docs/OpenSeadragon.Viewer.html#Viewer
          maxZoomLevel: 5,
          showNavigator: true,
          homeFillsViewer: true,
          zoomInButton: 'zoom-in',
          zoomOutButton: 'zoom-out',
          homeButton: 'home',
          fullPageButton: 'full-page',
          id: 'image-viewer',
        };
      },
    },
    methods: {
      updateImage() {
        if (this.imageUrl && this.viewer) {
          this.viewer.open({ type: 'image', url: this.imageUrl });
        }
      },
      initViewer() {
        if (!this.viewer) {
          this.viewer = OpenSeadragon(this.viewerOptions);
        }
        this.viewer.addHandler(
          'open',
          // eslint-disable-next-line func-names
          function () {
            this.errorMessage = null;
            this.displayViewer = true;
          }.bind(this),
          false,
        );
        this.viewer.addHandler(
          'open-failed',
          // eslint-disable-next-line func-names
          function (err) {
            this.errorMessage = err.message;
            this.displayViewer = false;
          }.bind(this),
          false,
        );
      },
    },
    mounted() {
      this.initViewer();
      this.displayViewer = false;
    },
  };
</script>

<style lang="scss">
  @import '../../../variables.scss';

  .open-seadragon {
    .viewer {
      width: 800px;
      height: 600px;
    }

    .error {
      margin: 10px 0px;
      padding: 12px;
      color: #d8000c;
      background-color: #ffd2d2;
      vertical-align: middle;
      max-width: 40em;
    }
  }
</style>
