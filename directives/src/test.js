import { mount, shallowMount } from "@vue/test-utils";
import Counter from "./Counter.vue";
import Child from "./Child.vue";

describe("Counter", () => {
  const wrapper = mount(Counter);

  it("should render HTML correctly", () => {
    expect(wrapper.html()).toContain("<button>Count up!</button>");
  });

  it("should increment score", () => {
    expect(wrapper.vm.score).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.score).toBe(1);
  });
});

describe("Child", () => {
  const wrapper = mount(Child, {
    propsData: {
      score: 0
    }
  });

  it("should render html incorrectly", () => {
    expect(wrapper.html()).toContain("<h1>0</h1>");
  });
});
