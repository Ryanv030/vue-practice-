<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mt-5">
    <div class="card mt-5">
      <div class="card-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  props: ["quotes"]
};
</script>

<style scoped >
.card-body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  color: #6e6e6e;
}
.quote {
  cursor: pointer;
}
.quote:hover {
  background-color: pink;
}
</style>
  