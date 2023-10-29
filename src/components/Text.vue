<script setup lang="ts">
import "../assets/line.css";
import {ref, watch} from 'vue'

const props = defineProps<{
  value?: string
}>();

const emit = defineEmits<{
  (e: 'change', value: string): void
  (e: 'clear'): void
}>();

const value = ref(props.value || "");
watch(value, function (value) {
  emit('change', value);
});
</script>

<template>
<div class="line">
  <input type="text" v-model="value" placeholder=" ">
  <label><slot></slot></label>
</div>
</template>