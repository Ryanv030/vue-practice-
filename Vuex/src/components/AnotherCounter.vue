<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement(5000)">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement(2)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"])
    //this method changes state through a mutation
    // increment() {
    //   this.$store.commit("increment");
    // },
    //this method MUTATES state, this is bad form.
    // decrement() {
    //   this.$store.state.counter--;
    // }
  }
};
</script>