<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    AppHeader: Header
  }
};
</script>

<style>
</style>
