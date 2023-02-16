import ToDoList from "@/views/todo/ToDoList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "ToDoList",
      component: ToDoList,
    },
    {
      path: "/new",
      name: "ToDoNew",
      component: () => import("@/views/todo/ToDoNew.vue"),
    },
  ],
});

export default router;
