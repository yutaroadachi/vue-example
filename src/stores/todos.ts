import { defineStore } from "pinia";
import { ref } from "vue";

export type ToDo = {
  title: string;
  memo?: string;
};

export const useToDosStore = defineStore("todos", () => {
  const todos = ref<ToDo[]>([]);

  return { todos };
});
