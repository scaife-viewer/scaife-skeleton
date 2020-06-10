<template>
  <div>
    <template v-if="passage">
      <Pagination :prev="linker(passage.prev)" :next="linker(passage.next)" :title="passage.title" />

      <div id="text" :class="['text', `text-${textSize}`, `text-width-${textWidth}`]" v-fragment="passage.fragment">
        <div v-for="word in passage.words" :key="word['@id']" class="word unit">
          <span class="verse-num" v-if="word.id.slice(8, 11) == '001'">{{ parseInt(word.id.slice(5, 8)) }}</span><!--
        --><span :key="word.id" :id="word.id" :class="['txt', ...word.classes]" @click="handleWordSelect(word)">{{ word.text }}</span><br>
          <Interlinear v-if="interlinear" :word="word" />
        </div>
      </div>

      <Pagination :prev="linker(passage.prev)" :next="linker(passage.next)" :title="passage.title" />

    </template>
    <div v-else  id="text" :class="['text', `text-${textSize}`, `text-width-${textWidth}`]">
      <p>
        DeepReader is a highly modular, Vue.js-based online reading
        environment designed for deep reading of texts with integrated
        learning tools.
      </p>
      <p>
        It is particulary intended for the study of classical languages
        such as Ancient Greek but could be applied to any texts with rich
        annotations. What is here is an early prototype using the MorphGNT
        API and the CTS protocol but we plan to support other text services
        as well.
      </p>
      <p>
        If you hover over the reader, you'll see various pluggable widgets
        on the left and right. Those on the left are used to choose what
        passage to read, and those on the right are used to present
        additional information about the passage and its individual words,
        and to control the appearance of the passage.
      </p>
      <p>
        You can expand or collapse any widget by clicking on its title. You
        can use the arrow keys on your keyboard to pagination between
        passages in a work.
      </p>
      <p>
        Each widget is a separate Vue.js component. We are working to make
        it as simple as possible to develop new widgets that interact and
        engage with the current passage, optionally calling out to external
        APIs.
      </p>
      <p>
        We are also experimenting with Firebase for persistence. Offline
        use is also planned as is packaging DeepReader up as an app for
        mobile use.
      </p>
    </div>
  </div>
</template>

<script>
  import WIDGETS_NS from '@scaife-viewer/scaife-widgets';
  import Pagination from '../reader/Pagination.vue';
  import Interlinear from './Interlinear.vue';

  export default {
    scaifeConfig: {
      displayName: 'Passage',
      location: 'main',
      singleton: true,
    },
    computed: {
      passage() {
        return this.$store.state.passage;
      },
      interlinear() {
        return this.$store.state.interlinear;
      },
      textSize() {
        return this.$store.state[WIDGETS_NS].readerTextSize;
      },
      textWidth() {
        return this.$store.state[WIDGETS_NS].readerTextWidth;
      }
    },
    mounted() {
      window.addEventListener('keyup', this.handleKeyUp);
    },
    beforeDestroy() {
      window.removeEventListener('keyup', this.handleKeyUp);
    },
    methods: {
      linker(passage) {
        return {name: 'morphgnt', query: { passage }};
      },
      handleWordSelect(word) {
        this.$store.dispatch('selectedWord', { word });
      },
      handleKeyUp(e) {
        if (e.key === 'ArrowLeft') {
          if (this.passage.prev) {
            this.$router.push(this.linker(this.passage.prev));
          }
        } else if (e.key === 'ArrowRight') {
          if (this.passage.next) {
            this.$router.push(this.linker(this.passage.next));
          }
        }
      },
    },
    components: {
      Interlinear,
      Pagination,
    },
    directives: {
      fragment(el, binding) {
        const fragment = binding.value;
        if (fragment && fragment.childElementCount > 0) {
          // eslint-disable-next-line no-param-reassign
          el.innerHTML = '';
          el.appendChild(fragment);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  #text {
    clear: both;
    color: #999;
    .word {
      cursor: pointer;
      .verse-num {
        color: teal;
        // font-family: $widget-font-family;
        font-size: 60%;
        margin-right: 0.5em;
      }
    }
    .unit {
      display: inline-block;
      margin-bottom: 0.5em;
      margin-right: 0.5em;
      user-select: text;
    }
    .txt {
      display: inline-block;
    }
    .gls {
      display: inline-block;
      font-size: 75%;
      color: orangered;
    }
  }

  .text-width-normal {
    max-width: 90%;
  }

  .text-width-narrow {
    max-width: 80%;
  }

  .text-width-wide {
    max-width: 100%;
  }
</style>
