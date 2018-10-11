<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    //mapping the mutations object to this component.
    ...mapActions(["increment", "decrement"])
  }
};
</script>