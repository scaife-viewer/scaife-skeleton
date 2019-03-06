<template>
  <div class="word unit">
    <span class="verse-num" v-if="word.id.slice(8, 11) == '001'">{{ parseInt(word.id.slice(5, 8)) }}</span><!--
 --><span :key="word.id" :id="word.id" :class="['txt', ...word.classes]">{{ word.text }}</span><br>
    <Interlinear v-if="interlinear" :word="word" />
  </div>
</template>

<script>
  import Interlinear from './Interlinear.vue';

  export default {
    props: ['word', 'interlinear', 'selection'],
    components: {
      Interlinear,
    },
    watch: {
      isSelected: {
        immediate: true,
        handler() {
          this.$store.dispatch('setSelectedWord', {word: this.word, selected: this.isSelected});
        }
      }
    },
    computed: {
      region() {
        const range = document.createRange()
        range.selectNode(this.$el);
        return range;
      },
      isSelected() {
        if (this.selection !== null) {
          const range = this.selection.getRangeAt(0);
          return range.compareBoundaryPoints(Range.END_TO_START, this.region) < 0 &&
            range.compareBoundaryPoints(Range.START_TO_END, this.region) > 0;
        }
        return false;
      }
    }
  }
</script>
