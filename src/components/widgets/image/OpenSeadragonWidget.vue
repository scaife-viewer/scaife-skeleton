<template>
  <div class="open-seadragon-input-widget">
    <small><p>Enter an IIIF image URL or try one of the sample images.</p></small>
    <small>
      <ul>
        <li><span v-on:click="updateSampleImage(1)" class="link">Railroad Map</span></li>
        <li><span v-on:click="updateSampleImage(2)" class="link">Rosa Parks Paper</span></li>
      </ul>
    </small>
    <div class="search-input">
      <input type="text" :value="imageURL" @input="updateImageURL" class="form-control form-control-sm" />
    </div>
    <div id="image-toolbar" class="toolbar">
      <span><small>
        <a id="zoom-in" class="link" title="Zoom in">Zoom In</a>
        | <a id="zoom-out" class="link" title="Zoom out">Zoom Out</a>
        | <a id="home" class="link" title="Go home">Home</a>
        | <a id="full-page" class="link" title="Toggle full page">Full Page</a>
      </small></span>
    </div>
    <div id="image-viewer" class="viewer"></div>
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
        samples: [
          {
            id: 1,
            url: 'https://tile.loc.gov/image-services/iiif/service:gmd:gmd370:g3701:g3701p:rr000950/full/pct:12.5/0/default.jpg',
          },
          {
            id: 2,
            url: 'https://tile.loc.gov/image-services/iiif/service:mss:mss85943:0026:15:0002/1203,48,233,943/125,/90/default.jpg'
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
          tileSources: {
            type: 'image',
            url: this.imageURL
          },
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
        const image = this.samples.filter(sample => parseInt(sample.id, 10) === parseInt(id, 10))[0];
        this.$store.dispatch('setImageURL', { url: image.url });
        this.viewer.open({
          type: 'image',
          url: image.url,
        });
      },
      updateImageURL (e) {
        this.$store.dispatch('setImageURL', { url: e.target.value });
        this.viewer.open({
          type: 'image',
          url: e.target.value
        });
      },
      setup () {
        const _options = this.viewerOptions;
        this.viewer = OpenSeadragon(_options);
      },
    },
    mounted() {
      this.setup();
    }
  };
</script>

<style lang="scss">
  @import "../../../variables.scss";

  .open-seadragon-input-widget {
      margin: 0 2em;
      flex: 1;

    .search-input {
      padding: 20px 0;
    }

    .form-control {
      width: 100%;
      border: 1px solid #ced4da;
    }

    .form-control:focus {
      color: #495057;
      background-color: #fff;
      border-color: #dba39a;
      outline: 0;
      -webkit-box-shadow: 0 0 0 0.2rem rgba(180,81,65,.25);
      box-shadow: 0 0 0 0.2rem rgba(180,81,65,.25);
    }

    .form-control-sm {
      height: calc(1.7125rem + 2px);
      padding: .25rem .5rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
    }

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
      background-color: black;
    }
  }
</style>
