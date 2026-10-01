<script setup lang="ts">
import type { Movie } from '@/data/movies'
import MovieCard from './MovieCard.vue'

defineProps<{ movies: Movie[] }>()
</script>

<template>
  <div class="movie-list">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
