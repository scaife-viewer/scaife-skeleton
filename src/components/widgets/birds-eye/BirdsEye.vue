<template>
  <div class="birds-eye">
    <svg width="100%" :height="totalLines" v-if="valid" :viewBox="viewBox">
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
    },
    precomputedLineCount: {
      type: Number
    },
    precomputedLineLength: {
      type: Number
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.lineLength} ${this.totalLines}`;
    },
    lineLength() {
      return this.precomputedLineLength || this.wordLength * this.wordsPerLine;
    },
    totalLines() {
      return this.precomputedLineCount || this.totalWords / this.wordsPerLine;
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
          console.log('lines', startLine, startOffset, endLine, endOffset);

          for (let line = startLine; line <= endLine; line += 1) {
            const y = line;
            const x1Offset = offset.length === 2 ? startOffset * this.wordLength : startOffset;
            const x2Offset = offset.length === 2 ? (1 + endOffset) * this.wordLength : endOffset;
            lines.push({
              x1: line === startLine ? x1Offset : 0,
              x2: line === endLine ? x2Offset : this.lineLength,
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
