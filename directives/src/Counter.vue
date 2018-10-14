<template>
  <div>
    <button @click="increment">Count up!</button>
    <app-child :score="score"></app-child>
  </div>
</template>
 
<script>
import Child from "./Child.vue";

export default {
  data() {
    return {
      score: 0
    };
  },
  methods: {
    increment() {
      this.score++;
    }
  },
  components: {
    appChild: Child
  }
};
</script>

