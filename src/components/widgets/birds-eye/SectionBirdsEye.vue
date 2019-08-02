<template>
  <div class="section-birds-eye">
    <svg v-if="valid" width="100%" :height="totalLines * lineHeight">
      <rect x="0" width="100%" class="section"
        v-for="(section, sectionIndex) in sections"
        :height="section.length * lineHeight"
        :y="calcSectionStart(sectionIndex)"
        :key="sectionIndex"
      />
      <template v-for="(section, sectionIndex) in sections">
        <rect x="0" width="100%"
          v-for="(subsection, subsectionIndex) in section"
          :class="subsection.highlight ? 'highlight' : 'regular'"
          :key="`${sectionIndex}-${subsectionIndex}`"
          :height="lineHeight"
          :y="calcSectionStart(sectionIndex) + (subsectionIndex * lineHeight)"
          @click="$emit('select', subsection.id)"
        />
      </template>
    </svg>
    <p v-else>The offset data is invalid.</p>
  </div>
</template>

<script>
import utils from './utils';

export default {
  props: {
    sections: {
      type: Array,
      required: true,
      validator: function(value) {
        return utils.areValidSections(value);
      }
    },
    lineHeight: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    totalLines() {
      return this.sections.reduce((prev, section) => {
          prev += section.length;
          return prev;
      }, 0);
    },
    valid() {
      return utils.areValidSections(this.sections);
    }
  },
  methods: {
    calcSectionStart(sectionIndex) {
      return this.sections.reduce((prev, section, index) => {
          if (index < sectionIndex) {
              prev += section.length * this.lineHeight;
          }
          return prev;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
  rect.section:nth-child(odd) {
    fill: #BBB;
  }
  rect.section:nth-child(even) {
    fill: #CCC;
  }
  rect.highlight {
    fill: #622;
    cursor: pointer;
    &:hover {
        fill: #EEE;
    }
    display: none;
  }
  rect.regular {
    fill: transparent;
    cursor: pointer;
    &:hover {
        fill: #EEE;
    }
    display: none;
  }
</style>
