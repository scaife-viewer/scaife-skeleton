<template>
    <div class="book-info">
      <b>{{ book.name }}</b>:
      <router-link class="click" :to="$parent.passageLink(book.first_paragraph)">first paragraph</router-link>
      &bull;
      <router-link class="click" :to="$parent.passageLink(book.first_sentence)">first sentence</router-link>
      &bull;
      <router-link class="click" :to="$parent.passageLink(book.first_verse)">first verse</router-link>
    </div>
  </widget>
</template>

<script>
  export default {
    scaifeConfig: {
      displayName: 'Book Info',
      location: 'sidebar',
      singleton: true,
    },
    computed: {
      book() {
        return this.$store.state.book;
      }
    },
  };
</script>
