<script setup lang="ts">
import Text from './Text.vue'
import Number from './Number.vue'
import Select from './Select.vue'
import Button from './Button.vue'
import {useValues} from "@/stores/values";

defineProps<{
  layout: Array<{
    type: string,
    label: string,
    options?: Array<string>
  }>
}>()

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const values = useValues();

function onChange (index:number, value:any) : void {
  values.set(index, value);
}
function onClear (index:number) : void {
  values.clear(index);
}
function onSubmit(e: Event) : boolean {
  e.preventDefault();
  submit();
  return false;
}
function onClick () {
  submit();
}

function submit () {
  //validation?
  emit("submit");
}

</script>

<template>
  <h2>The Form</h2>
  <form @submit="onSubmit" style="text-align: center">
    <template v-for="(item, index) in layout">
      <Text v-if="item.type === 'text'"
            @change="onChange(index, $event)"
            @clear="onClear(index)">
        {{ item.label }}
      </Text>
      <Number v-else-if="item.type === 'number'"
              @change="onChange(index, $event)"
              @clear="onClear(index)">
        {{ item.label }}
      </Number>
      <Select v-else-if="item.type === 'select'"
              :options="item.options || []"
              @change="onChange(index, $event)"
              @clear="onClear(index)">
        {{ item.label }}
      </Select>
    </template>
    <Button @click="onClick">Submit</Button>
  </form>
</template>

<style scoped>
form {
  text-align: center;
}
form > button {
  margin-top: 30px;
}
</style>