<template>
  <span class="gls">
    <span class="pos">{{ word.pos }}</span><!--
 --><span v-if="word.mood">.{{ word.tense }}{{ word.voice }}{{ word.mood }}</span><!--
 --><span v-if="word.number">.{{ word.person }}{{ word.case }}{{ word.number }}{{ word.gender }}</span><!--
 --><br>{{ word.lemma }}<br>
  </span>
</template>

<script>
  export default {
    props: ['word'],
  }
</script>
