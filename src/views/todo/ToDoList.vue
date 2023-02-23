<script setup lang="ts">
import { useToDosStore } from "@/stores/todos";
import { computed } from "vue";

const todosStore = useToDosStore();
const todos = computed(() => {
  return todosStore.todos;
});
const handleClick = (index: number) => {
  todosStore.deleteToDo(index);
};
</script>

<template>
  <h1>一覧</h1>
  <p v-if="todos.length === 0" data-testid="no-todo-list">ToDoがありません。</p>
  <div
    v-else
    v-for="(todo, index) in todos"
    :key="`${todo.title}-${index}`"
    class="todo"
  >
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.memo === "" ? "--" : todo.memo }}</p>
    <button @click="() => handleClick(index)">削除</button>
  </div>
</template>

<style scoped>
.todo ~ .todo {
  margin-top: 16px;
}

.todo {
  padding: 16px;
  border: 1px solid;
}

.todo *:not(:first-child) {
  margin-top: 16px;
}

.todo h2 {
  margin: 0;
}

.todo p {
  white-space: pre-wrap;
}
</style>
