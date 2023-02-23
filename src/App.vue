<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>ToDo</div>
    <nav>
      <RouterLink :to="{ name: 'ToDoList' }">一覧</RouterLink>
      <RouterLink :to="{ name: 'ToDoNew' }">新規作成</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 16px;
}

header nav a:not(:first-child) {
  margin-left: 16px;
}

main {
  padding: 0 16px 0;
}
</style>
