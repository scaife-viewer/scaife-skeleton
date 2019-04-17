<template>
  <div class="open-seadragon-input-widget">
    <section>
      <small>
        <p>Select an image to test:</p>
        <ul>
          <li><span v-on:click="updateSampleImage(1)" class="link">Railroad Map</span></li>
          <li><span v-on:click="updateSampleImage(2)" class="link">Rosa Parks Paper</span></li>
          <li><span v-on:click="updateSampleImage(3)" class="link">Invalid Image</span></li>
        </ul>
      </small>
    </section>
    <section>
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
        <div  v-show="errorMessage" class="error">
          <i class="fa fa-times-circle"></i>
          <span>&nbsp;<strong>Error:</strong></span>
          <p>{{ errorMessage }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import OpenSeadragon from '../../../../node_modules/openseadragon/build/openseadragon/openseadragon.js';

  export default {
    scaifeConfig: {
      displayName: 'OpenSeadragon Viewer',
      location: 'main',
    },
    data () {
      return {
        viewer: null,
        displayViewer: false,
        errorMessage: null,
        sampleImages: [
          {
            id: 1,
            url: 'https://tile.loc.gov/image-services/iiif/service:gmd:gmd370:g3701:g3701p:rr000950/full/pct:12.5/0/default.jpg',
          },
          {
            id: 2,
            url: 'https://tile.loc.gov/image-services/iiif/service:mss:mss85943:0026:15:0002/1203,48,233,943/125,/90/default.jpg'
          },
          {
            id: 3,
            url: 'https://tile.loc.gov/image-services/iiif/service:mss:mss85943:0026:15:0002/1203,48,233,943/125,/90/foo.jpg'
          }
        ]
      }
    },
    computed: {
      imageURL() {
        return this.$store.state.imageURL;
      },
      viewerOptions() {
        return {
          // options: http://openseadragon.github.io/docs/OpenSeadragon.Viewer.html#Viewer
          maxZoomLevel: 5,
          showNavigator: true,
          homeFillsViewer: true,
          zoomInButton:   'zoom-in',
          zoomOutButton:  'zoom-out',
          homeButton:     'home',
          fullPageButton: 'full-page',
          id: "image-viewer"
        }
      }
    },
    methods: {
      updateSampleImage (id) {
        const image = this.sampleImages.filter(imageInfo => parseInt(imageInfo.id, 10) === parseInt(id, 10))[0];
        this.viewer.open({
          type: 'image',
          url: image.url,
        });
        this.$store.dispatch('setImageURL', { url: '' });
      },
      updateImageURL (e) {
        this.viewer.open({
          type: 'image',
          url: e.target.value
        });
        this.$store.dispatch('setImageURL', { url: e.target.value });
      },
      initViewer () {
        if (!this.viewer) {
          const _options = this.viewerOptions;
          this.viewer = OpenSeadragon(_options);
        }
        this.viewer.addHandler('open', function(event) {
          this.errorMessage = null;
          this.displayViewer = true;
        }.bind(this), false);
        this.viewer.addHandler('open-failed', function(err) {
          this.errorMessage = err.message
          this.displayViewer = false;
        }.bind(this), false);
      },
    },
    mounted () {
      this.initViewer()
      this.displayViewer = false;
    }
  };
</script>

<style lang="scss">
  @import "../../../variables.scss";

  .open-seadragon-input-widget {
      margin: 0 2em;
      flex: 1;

    .link {
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    }

    .toolbar {
      padding-top: 30px;
      padding-bottom: 10px;
    }

    .viewer {
      width: 800px;
      height: 600px;
    }
    .error {
      margin: 10px 0px;
      padding:12px;
      color: #D8000C;
      background-color: #FFD2D2;
      vertical-align:middle;
      max-width: 40em;
    }
  }
</style>
