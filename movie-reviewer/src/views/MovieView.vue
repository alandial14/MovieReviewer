<script setup lang="ts">
import { computed } from 'vue'
import StarRating from '@/components/StarRating.vue'
import { getMovie } from '@/data/movies'

const props = defineProps<{ id: string }>()

const movie = computed(() => getMovie(Number(props.id)))
</script>

<template>
  <main>
    <RouterLink to="/">← Back</RouterLink>
    <template v-if="movie">
      <h2>{{ movie.title }} ({{ movie.year }})</h2>
      <p>{{ movie.description }}</p>
      <StarRating v-model="movie.rating" />
    </template>
    <p v-else>Movie not found.</p>
  </main>
</template>
