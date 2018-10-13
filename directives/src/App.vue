<template>
<div class="container">
  <h1 class="test">Testing tests test...</h1>
  <counter></counter>
</div>


</template>

<script>
import { mount } from "@vue/test-utils";
import testing from "@vue/test-utils";
import Counter from "./counter.js";

console.log(testing);

const wrapper = mount(Counter);

const vms = wrapper.vm;

console.log(vms);

console.log(wrapper);

const element = document.getElementsByClassName("test");
console.log(element);

export default {
  components: {
    Counter
  }
};
</script>

