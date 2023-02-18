import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import ToDoList from "./ToDoList.vue";

describe("ToDoList", () => {
  it("一覧が存在しない場合はその旨が表示されること", () => {
    const wrapper = mount(ToDoList, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    expect(wrapper.find(`[data-testid="no-todo-list"]`).exists()).toBe(true);
  });
});
