<template>
  <Card :current="currentCard" :previous="previousCard" :next="nextCard" @prevClick="onPreviousCard" @nextClick="onNextCard">
    <Reader :passage-text="passageText" />
  </Card>
</template>

<script>
  import Card from './Card.vue';
  import Reader from './Reader.vue';

  export default {
    scaifeConfig: {
      displayName: 'Card Reader',
      location: 'main',
    },
    components: {
      Card,
      Reader,
    },
    methods: {
      onPreviousCard() {

      },
      onNextCard() {

      }
    },
    computed: {
      currentCard() {
        return 2;
      },
      previousCard() {
        return 1;
      },
      nextCard() {
          return 3;
      },
      passageText() {
        return this.$store.state.passageText;
      },
    }
  };
</script>

