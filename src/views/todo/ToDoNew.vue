<script setup lang="ts">
import { useToDosStore, type ToDo } from "@/stores/todos";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const initialTodo: ToDo = {
  title: "",
  memo: "",
};
const todo = ref<ToDo>({ ...initialTodo });
const disabled = computed(() => {
  return todo.value.title === "";
});

const todosStore = useToDosStore();
const router = useRouter();
const handleClick = () => {
  todosStore.createToDo(todo.value);
  router.push({ name: "ToDoList" });
};
</script>

<template>
  <h1>新規作成</h1>
  <form>
    <div>
      <label for="title"> タイトル:&nbsp;</label>
      <input id="title" v-model="todo.title" />
    </div>
    <div>
      <label for="memo"> メモ:&nbsp;</label>
      <textarea id="memo" v-model="todo.memo" />
    </div>
    <button type="button" v-on:click="handleClick" :disabled="disabled">
      作成
    </button>
  </form>
</template>

<style scoped>
form div:not(:first-child),
form button {
  margin-top: 16px;
}

form div {
  display: flex;
  align-items: baseline;
}
</style>
