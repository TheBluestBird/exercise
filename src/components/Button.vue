<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button type="button" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: var(--color-button);
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  color: var(--color-text-button);
  transition:
    color var(--color-transition),
    background-color var(--color-transition);
}

button:hover {
  background-color: var(--color-button-hover);
}
</style>