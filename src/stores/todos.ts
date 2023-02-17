import { defineStore } from "pinia";
import { ref } from "vue";

export type ToDo = {
  title: string;
  memo: string;
};

export const useToDosStore = defineStore("todos", () => {
  const todos = ref<ToDo[]>([]);
  const createToDo = (todo: ToDo) => {
    todos.value.push(todo);
  };
  const deleteToDo = (index: number) => {
    todos.value.splice(index, 1);
  };

  return { todos, createToDo, deleteToDo };
});
