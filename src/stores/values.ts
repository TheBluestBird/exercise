import { defineStore } from 'pinia'

const arr : any[] = [];
export const useValues = defineStore("vaues", {
    state: () => ({values: arr}),
    getters: {
        get(state) {
            return (index: number) => state.values[index];
        }
    },
    actions: {
        set(index: number, data: any) {
            this.values[index] = data;
        },
        clear(index: number) {
            delete this.values[index];
        },
        reset() {
            this.values = [];
        }
    }
});