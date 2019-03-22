<template>
  <div class="homer-card-widget">
    <div class="work">
      <div
        class="card"
        v-for="card in cards"
        :key="card"
        :class="{ selected: selectedCard === card }"
      >
        <a
          href
          @click.prevent="selectCard(card)"
        >Iliad {{ card }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    scaifeConfig: {
      displayName: 'Homer Cards',
      singleton: true,
      location: 'sidebar',
    },
    methods: {
      selectCard(card) {
        this.$store.dispatch('homerSelectCard', { card });
      }
    },
    computed: {
        selectedCard() {
            return this.$store.state.selectedCard;
        },
        cards() {
            return this.$store.state.cards;
        }
    }
}
</script>

<style lang="scss">
  @import "../../../variables.scss";

  .homer-card-widget {
    margin: 0 2em;
    flex: 1;

    .card {
      // font-family: 'Noto Serif';
      font-size: 14px;
      a {
        color: $gray-600;
        text-decoration: none;
        &:hover {
          color: $gray-800;
        }
      }
      &.selected a {
        font-weight: bold;
        color: $gray-700;
      }
    }

  }
</style>
