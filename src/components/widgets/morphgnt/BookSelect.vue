<template>
    <div class="book-select">
      <ul>
        <li v-for="book in books" :key="book['@id']">
          <router-link class="click" :to="{query: {book: book['@id']}}">{{ book.name }}</router-link>
        </li>
      </ul>
    </div>
  </widget>
</template>

<script>
  export default {
    scaifeConfig: {
      displayName: 'Book Select',
      location: 'sidebar',
      singleton: true,
    },
    props: ['books']
  };
</script>
