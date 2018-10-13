// Import the mount() method from the test utils
// and the component you want to test
import { mount } from "@vue/test-utils";
import Counter from "./counter";

// const wrapper = mount(Counter);

// const vms = wrapper.vm;

// console.log(vms);

// console.log(wrapper);

describe("Counter", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  // it's also easy to check for the existence of elements
  it("has a button", () => {
    expect(wrapper.contains("button")).toBe(true);
  });

  it("button should increment the count", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});

"devDependencies": {
    "@vue/test-utils": "^1.0.0-beta.13",
    "babel-jest": "^21.2.0",
    "babel-preset-env": "^1.6.0",
    "jest": "^21.2.1",
    "regenerator-runtime": "^0.11.0",
    "vue-template-compiler": "^2.4.4"
  },