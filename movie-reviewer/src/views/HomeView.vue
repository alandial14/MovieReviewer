<script setup lang="ts">
import MovieList from '@/components/MovieList.vue'
import { movies } from '@/data/movies'
</script>

<template>
  <main>
    <h2>Movies</h2>
    <MovieList :movies="movies" />
  </main>
</template>
