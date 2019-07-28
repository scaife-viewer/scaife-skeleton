<template>
  <div class="birds-eye">
    <svg width="100%" :height="totalLines" v-if="valid">
      <rect :width="lineLength" :height="totalLines" x="0" y="0" />
      <template v-for="(collection, offsetIndex) in offsetCollection">
        <line
          v-for="(line, lineIndex) in lines(collection)" :key="`${offsetIndex}-${lineIndex}`"
          :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
        />
      </template>
    </svg>
    <p v-else>The offset data is invalid.</p>
  </div>
</template>

<script>
import utils from './utils';

// Polyfill needed for IE
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};

/*
 * Two Modes of BirdsEye:
 *
 * 1.
 */

export default {
  props: {
    offsetCollection: {
      type: Array,
      required: true,
      validator: function(value) {
        return utils.isValidCollection(value);
      }
    },
    totalWords: {
      type: Number,
      required: true,
    },
    wordsPerLine: {
      type: Number,
      default: 10,
    },
    wordLength: {
      type: Number,
      default: 20,
    }
  },
  computed: {
    lineLength() {
      return this.wordLength * this.wordsPerLine;
    },
    totalLines() {
      return this.totalWords / this.wordsPerLine;
    },
    valid() {
      return utils.isValidCollection(this.offsetCollection);
    }
  },
  methods: {
    extractOffset(offset) {
      if (offset.length === 2) {
        const [start, end] = offset;
        const [startLine, startOffset] = utils.divmod(start, this.wordsPerLine);
        const [endLine, endOffset] = utils.divmod(end, this.wordsPerLine);
        return {startLine, startOffset, endLine, endOffset};
      } else {
        const [startLine, startOffset, endLine, endOffset] = offset;
        return {startLine, startOffset, endLine, endOffset};
      }
    },
    lines(collection) {
      const lines = [];
      collection.offsets.forEach(offset => {
          const { startLine, startOffset, endLine, endOffset } = this.extractOffset(offset);

          for (let line = startLine; line <= endLine; line += 1) {
            const y = line;
            lines.push({
              x1: line === startLine ? (startOffset * this.wordLength) : 0,
              x2: line === endLine ? ((1 + endOffset) * this.wordLength) : this.lineLength,
              y1: y,
              y2: y,
            });
          }
      });
      return lines;
    },
  },
};
</script>

<style lang="scss">
  .birds-eye rect {
    fill: #EEE;
    &.not-selected {
      fill: transparent;
    }
  }
  .birds-eye line {
    stroke-width: 1px;
    stroke: #999;
  }
  .birds-eye {
    padding: 0 1em;
  }
</style>
