<script setup lang="ts">
import { useToDosStore } from "@/stores/todos";
import { computed } from "vue";

const todosStore = useToDosStore();
const todos = computed(() => {
  return todosStore.todos;
});
</script>

<template>
  <h1>一覧</h1>
  <p v-if="todos.length === 0">ToDoがありません。</p>
  <div
    v-else
    v-for="(todo, index) in todos"
    v-bind:key="`${todo.title}-${index}`"
  >
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.memo ?? "--" }}</p>
  </div>
</template>
