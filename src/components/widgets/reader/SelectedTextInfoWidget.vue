<template>
    <div class="word-info-body" v-if="word">
        <div class="norm" @click="handleNormSelect(word)">{{ word.norm }}&nbsp;</div>
        <div class="analysis">
            <span class="pos">{{ word.pos }}</span><span v-if="word.mood">.{{ word.tense }}{{ word.voice }}{{ word.mood }}</span><span v-if="word.number">.{{ word.person }}{{ word.case }}{{ word.number }}{{ word.gender }}</span>
        </div>
        <div class="lemma">{{ word.lemma }}</div>
    </div>
</template>
<script>
  export default {
    scaifeConfig: {
      displayName: 'Word Info',
      location: 'sidebar',
      singleton: true,
    },
    computed: {
      word() {
        return this.$store.state.word;
      }
    },
    methods: {
      handleNormSelect() {
      }
    }
  }
</script>
