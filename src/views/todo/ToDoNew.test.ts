import { useToDosStore } from "@/stores/todos";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ToDoNew from "./ToDoNew.vue";

const routerPushMock = vi.fn();
vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: routerPushMock,
  }),
}));

describe("ToDoNew", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("初期表示時は作成ボタンがdisabledであること", () => {
    const wrapper = mount(ToDoNew, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    expect(wrapper.find("button").attributes("disabled")).toBe("");
  });

  it("タイトルを入力して作成ボタンを押下すると、入力したタイトルでToDoが新規作成され、一覧ページに遷移すること", async () => {
    const wrapper = mount(ToDoNew, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const todosStore = useToDosStore();

    await wrapper.find("#title").setValue("test");
    expect(wrapper.find("button").attributes("disabled")).toBeUndefined;

    await wrapper.find("button").trigger("click");
    expect(todosStore.createToDo).toHaveBeenCalledTimes(1);
    expect(todosStore.createToDo).toHaveBeenLastCalledWith({
      title: "test",
      memo: "",
    });
    expect(routerPushMock).toHaveBeenCalledTimes(1);
    expect(routerPushMock).toHaveBeenCalledWith({ name: "ToDoList" });
  });
});
