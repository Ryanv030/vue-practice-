<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  //using a single getter from the store to our component
  // computed: {
  //   counter() {
  //     return this.$store.getters.doubleCounter;
  //   }
  // }

  //mapping the getters object to our component
  computed: mapGetters({
    counter: types.DOUBLE_COUNTER,
    clicks: types.CLICK_COUNTER
  })
};
</script>