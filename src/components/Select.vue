<script setup lang="ts">
import "../assets/line.css";
import {ref, watch} from 'vue'

const props = defineProps<{
  options: Array<string>
  value?: string
}>()

const emit = defineEmits<{
  (e: 'change', value: string): void
  (e: 'clear'): void
}>()

const value = ref(props.value || "");
const select = ref<HTMLDivElement>();
watch(value, function (value:string) {
  emit("change", value);
})
</script>

<template>
  <div class="line">
    <select v-model="value" ref="select" :class="value === '' ? null : 'notEmpty'">
      <template v-for="option in options">
        <option :value="option">{{option}}</option>
      </template>
    </select>
    <label><slot></slot></label>
  </div>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  width: 100%;
  font-size: 1.2em;
  margin-bottom: 20px;
  padding: 10px 0;
  border: none;
  border-bottom: 3px solid var(--color-text-href);
  color: var(--color-text-input);
  background-color: transparent;
  cursor: pointer;
  transition:
      background-color var(--color-transition),
      color var(--color-transition);
}

select::before,
select::after {
  content: "";
  border: none;
  outline:0;
}

select option {
  background-color: var(--color-background);
  transition:
      background-color var(--color-transition),
      color var(--color-transition);
}
</style>