<template>
  <div class="book-info">
    <template v-if="book">
      <b>{{ book.name }}</b
      >:
      <router-link
        class="click"
        :to="{ name: 'morphgnt', query: { passage: book.first_paragraph } }"
      >
        first paragraph</router-link
      >
      &bull;
      <router-link
        class="click"
        :to="{ name: 'morphgnt', query: { passage: book.first_sentence } }"
      >
        first sentence</router-link
      >
      &bull;
      <router-link
        class="click"
        :to="{ name: 'morphgnt', query: { passage: book.first_verse } }"
      >
        first verse</router-link
      >
    </template>
    <template v-else>Select a book</template>
  </div>
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
      },
    },
  };
</script>
