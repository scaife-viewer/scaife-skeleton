<template>
  <div class="open-seadragon-input-widget">
    <p>Sample:</p>
    <small><a :href="imageURL">{{ imageURL }}</a></small>
    <!-- <div class="search-input">
      <input type="text" :value="imageURL" @input="updateImageURL" class="form-control form-control-sm" />
    </div> -->
    <div id="image-viewer" style="width: 800px; height: 600px; padding-top:30px;"></div>
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
            url: this.$store.state.imageURL
          },
          // maxZoomLevel: 5,
          // ajaxWithCredentials: true,
          // showNavigator: true,
          // homeFillsViewer: true,
          // navigatorId: 'image-navigator',
          // toolbar: 'image-toolbar',
          // zoomInButton: 'image-toolbar-zoomin',
          // zoomOutButton: 'image-toolbar-zoomout',
          // homeButton: 'image-toolbar-reset',
          // fullPageButton: 'image-toolbar-fullscreen',
          id: "image-viewer"
        }
      }
    },
    methods: {
      updateImageURL (e) {
        this.$store.dispatch('setImageURL', { url: e.target.value });
      },
      setup () {
        const _options = this.viewerOptions;
        this.viewer = OpenSeadragon(_options);
      },
    },
    created() {
      // set default state for testing purposes
      this.$store.dispatch('setImageURL', {
        url: 'https://tile.loc.gov/image-services/iiif/service:gmd:gmd370:g3701:g3701p:rr000950/full/pct:12.5/0/default.jpg'
      });
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
      padding: 4px 0 0;
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
  }
</style>
