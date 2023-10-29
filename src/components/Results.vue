<script setup lang="ts">
import Button from './Button.vue'
const props = defineProps<{
  results: Array<{
    key: string,
    value: string
  }>
}>()

const emit = defineEmits<{
  (e: 'return'): void
}>()
</script>

<template>
  <h2>The results are:</h2>
  <div class="results">
    <template v-for="result in results">
      <div>{{result.key}} :</div>
      <div>{{result.value}}</div>
    </template>
  </div>
  <div>
    <Button @click="emit('return')">Return</Button>
  </div>
</template>

<style scoped>
.results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
}

.results > div:nth-child(2n+1) {
  text-align: end;
}

.results ~ div {
  margin-top: 30px;
  text-align: center;
}
</style>