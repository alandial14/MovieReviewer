<script setup lang="ts">
const props = withDefaults(defineProps<{ max?: number; readonly?: boolean }>(), {
  max: 5,
  readonly: false,
})

const rating = defineModel<number>({ default: 0 })

function setRating(value: number) {
  if (!props.readonly) rating.value = value
}
</script>

<template>
  <div class="star-rating" :class="{ readonly }">
    <button
      v-for="star in max"
      :key="star"
      type="button"
      :disabled="readonly"
      :aria-label="`${star} star${star > 1 ? 's' : ''}`"
      @click="setRating(star)"
    >
      {{ star <= rating ? '★' : '☆' }}
    </button>
  </div>
</template>

<style scoped>
.star-rating button {
  background: none;
  border: none;
  padding: 0;
  font-size: 1.25rem;
  color: #f5b301;
  cursor: pointer;
}

.star-rating.readonly button {
  cursor: default;
}
</style>
