<script setup lang="ts">
import Form from './components/Form.vue'
import Results from './components/Results.vue'
import Constructor from './components/Constructor.vue'
import {useValues} from "@/stores/values";
import {ref} from "vue";
interface LayoutLine {
  type: string,
  label: string,
  options?: Array<string>
}
interface ResultLine {
  key: string
  value: string
}

const sValues = useValues();
let layout : Array<LayoutLine>;


const state = ref(0);
const values = ref<Array<ResultLine>>();

function onSubmit() : void {
  const vals = [];
  for (let i = 0; i < layout.length; ++i) {
    const value = sValues.get(i);
    vals.push({
      key: layout[i].label,
      value: value || "Not set"
    });
  }

  values.value = vals;
  state.value = 2;
}

function onReturn() : void {
  sValues.reset();
  state.value = 0;
}

function onConstructed(formLayout:Array<LayoutLine>) : void {
  layout = formLayout;
  state.value = 1;
}

</script>

<template>
<Constructor v-if="state === 0" @submit="onConstructed"></Constructor>
<Form v-if="state === 1" :layout="layout" @submit="onSubmit"></Form>
<Results v-if="state === 2 && values !== undefined" :results="values" @return="onReturn"></Results>
</template>

<style scoped>

</style>