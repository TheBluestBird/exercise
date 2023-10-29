<script setup lang="ts">
import {ref, watch} from 'vue'

import Select from './Select.vue'
import Text from './Text.vue'
import Button from './Button.vue'

interface FormLine {
  type: string,
  label: string,
  options?: Array<string>
  id: number
}
const form = ref<Array<FormLine>>([]);

const emit = defineEmits<{
  (e: 'submit', value: Array<FormLine>): void
}>()

const types = ['text', 'number', 'select'];

function onLabelChange (index:number, value:string) {
  form.value[index].label = value;
}
function onTypeChange (index:number, value:string) {
  form.value[index].type = value;
}
function onOptionsChange (index:number, value:string) {
  form.value[index].options = value.split(' ');
}

function onAdd () {
  form.value.push({
    type: 'text',
    label: '',
    id: Date.now()
  });
}

function onDelete (index:number) {
  form.value.splice(index, 1);
}
</script>

<template>
  <h2>The Constructor</h2>
  
  <form>
    <template v-for="(item, index) in form" :key="item.id">
      <div class="row">
        <Select :options="types" :value="item.type"
                @change="onTypeChange(index, $event)">Type</Select>
        <Text :value="item.label"
              @change="onLabelChange(index, $event)">Label</Text>
        <Text v-if="item.type==='select'"
              :value="item.options ? item.options.join(' ') : ''"
              @change="onOptionsChange(index, $event)"
        >Options (space separated)</Text>
        <Button @click="onDelete(index)">Delete</Button>
      </div>
    </template>
    <Button @click="onAdd">Add</Button>
    <Button @click="emit('submit', form)" style="float: right">Done</Button>
  </form>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
}

.row > div:nth-child(2) {
  grid-column-start: 2;
  grid-column-end: 4;
}

.row > div:nth-child(3) {
  grid-column-start: 1;
  grid-column-end: 4;
}

.row > button {
  grid-column-start: 3;
}

form > button {
  margin-top: 30px;
}
</style>