<template>
<div>
  <p>Counter is: {{ counter }}</p>
  <p>Number of clicks: {{ clicks }}</p>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  //mapping the getters object to our component
  computed: mapGetters({
    counter: types.DOUBLE_COUNTER,
    clicks: types.CLICK_COUNTER
  })
};
</script>