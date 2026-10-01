<script setup lang="ts">
import type { Movie } from '@/data/movies'
import StarRating from './StarRating.vue'

defineProps<{ movie: Movie }>()
</script>

<template>
  <RouterLink :to="{ name: 'movie', params: { id: movie.id } }" class="movie-card">
    <h3>{{ movie.title }} ({{ movie.year }})</h3>
    <StarRating :model-value="movie.rating" readonly />
  </RouterLink>
</template>

<style scoped>
.movie-card {
  display: block;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
}

.movie-card:hover {
  border-color: #999;
}
</style>
