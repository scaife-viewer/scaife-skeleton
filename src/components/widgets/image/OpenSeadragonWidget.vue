<template>
  <div class="open-seadragon-input-widget">
    <section>
      <small>
        <p>Select an image to test:</p>
        <ul>
          <li>
            <span v-on:click="updateSampleImage(0)" class="link"
              >Railroad Map</span
            >
          </li>
          <li>
            <span v-on:click="updateSampleImage(1)" class="link"
              >Rosa Parks Paper</span
            >
          </li>
          <li>
            <span v-on:click="updateSampleImage(2)" class="link"
              >Invalid Image</span
            >
          </li>
        </ul>
      </small>
    </section>
    <section>
      <OpenSeadragon :image-url="imageURL" />
    </section>
  </div>
</template>

<script>
  import OpenSeadragon from './OpenSeadragon.vue';

  const SAMPLES = [
    'https://tile.loc.gov/image-services/iiif/service:gmd:gmd370:g3701:g3701p:rr000950/full/pct:12.5/0/default.jpg',
    'https://tile.loc.gov/image-services/iiif/service:mss:mss85943:0026:15:0002/1203,48,233,943/125,/90/default.jpg',
    'https://tile.loc.gov/image-services/iiif/service:mss:mss85943:0026:15:0002/1203,48,233,943/125,/90/foo.jpg',
  ];

  export default {
    scaifeConfig: {
      displayName: 'OpenSeadragon Viewer',
      location: 'main',
    },
    components: {
      OpenSeadragon,
    },
    computed: {
      imageURL() {
        return this.$store.state.imageURL;
      },
    },
    methods: {
      updateSampleImage(index) {
        const url = SAMPLES[index];
        this.$store.dispatch('setImageURL', { url });
      },
    },
  };
</script>

<style lang="scss">
  @import '../../../variables.scss';

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
  }
</style>
