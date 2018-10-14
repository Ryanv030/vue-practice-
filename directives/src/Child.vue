<template>
  <h1>{{score}}</h1>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      required: true
    }
  }
};
</script>
