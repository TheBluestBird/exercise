<script setup lang="ts">
import "../assets/line.css";
import {ref, watch} from 'vue'

const emit = defineEmits<{
  (e: 'change', value: number): void
  (e: 'clear'): void
}>()

const value = ref("");
const numReg = /^-?(?:0|[1-9]*)\.?\d*$/
watch(value, function (value) {
  if (numReg.test(value))
    emit("change", parseFloat(value));
  else
    emit("clear");
})

</script>

<template>
  <div class="line">
    <input type="number" v-model="value" placeholder=" ">
    <label><slot></slot></label>
  </div>
</template>

<style scoped>
input {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>