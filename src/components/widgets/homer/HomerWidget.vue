<template>
  <div class="homer-widget">
    <div class="work" v-for="(work, index) in works" :key="index">
      <div
        class="book"
        :key="bIndex"
        v-for="(bookLength, bIndex) in work.bookLengths"
        :class="{ selected: isSelected(work.urn, bIndex + 1, bookLength) }"
      >
        <a
          href
          @click.prevent="selectBook(work.urn, bIndex + 1, bookLength)"
        >{{ work.displayName }} {{ bIndex + 1 }}.1&ndash;{{ bIndex + 1 }}.{{ bookLength }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  displayName: "Homer",
  data() {
    return {
      selected: {
        urn: "",
        book: null,
        start: null,
        end: null
      }
    };
  },
  methods: {
    isSelected(urn, book, bookLength) {
      return (
        this.selected.urn === urn &&
        this.selected.book === book &&
        this.selected.end === bookLength
      );
    },
    selectBook(urn, book, bookLength) {
      this.selected = {
        urn,
        book,
        start: 1,
        end: bookLength
      };
      axios
        .get(`https://homer-api.herokuapp.com/${this.selectedUrn}/`)
        .then(r => this.$store.dispatch("setPassageText", { lines: r.data} ));
    }
  },
  computed: {
    selectedUrn() {
      const { urn, book, start, end } = this.selected;
      return `${urn}:${book}.${start}-${book}.${end}`;
    },
    works() {
      return [
        {
          displayName: "Iliad",
          urn: "urn:cts:greekLit:tlg0012.tlg001.perseus-grc2",
          bookLengths: [
            611,
            877,
            461,
            544,
            909,
            529,
            482,
            565,
            713,
            579,
            848,
            471,
            837,
            522,
            746,
            867,
            761,
            616,
            424,
            503,
            611,
            515,
            897,
            804
          ]
        }
      ];
    }
  }
};
</script>
<style lang="scss">
  .homer-widget {
    .body {
      margin: 0 1em 1em;
      justify-content: left;
      .book {
        text-align: left;
        a {
          color: #666;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
