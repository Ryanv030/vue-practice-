<template>
<div class="container">
  <div class="row">
    <div class="col-12">
       <div>
    <label class="typo__label">Simple select / dropdown</label>
    <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :hide-selected="true" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
      <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.language }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
    </multiselect>
    <div>{{value}}</div>
  </div>
    </div>
  </div>


   <div class="product-response mt-4">
      <h6 class="d-inline">Product: </h6>
      <i class="fas fa-star text-warning" v-for="(n, index) in 3" :key="index"></i>
      <i class="far fa-star text-warning" style="margin-left: -5px; padding-right: .5rem;" v-for="(n, index) in 2" :key="index"></i>
    </div>


</div>


</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      value: null,
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" }
      ]
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style >
.custom__tag {
  display: inline-block;
  padding: 3px 12px;
  background: #d2d7ff;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 10px;
  cursor: pointer;
}
/* .multiselect__option--highlight {
  background: red;
  outline: none;
  color: #fff;
} */
/* .v-select {
  position: relative;
  box-sizing: border-box;
}

.close {
  margin-left: 2px;
  font-size: 1.25em;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  font-weight: 700;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
}

.selected-tag {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  line-height: 1.4;
  margin: 4px 2px 0;
  padding: 0 0.25em;
}

.my-form {
  line-height: 1.4;
  font-size: 1em;
  display: inline-block;
  border: 1px solid transparent;
  outline: none;
  margin: 4px 0 0;
  padding: 0 0.5em;
  max-width: 100%;
  background: none;
  box-shadow: none;
  flex-grow: 1;
  width: 4em;
}

.dropdown-toggle {
  display: flex;
  padding: 0 0 4px;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 4px;
}

.dropdown-toggle::after {
  display: none !important;
}

.selected-options {
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 2px;
} */
</style>

<!--  <div class="container mt-5">
    <div class="row mt-5">
      <div class="col-6 offset-3 text-center mt-5">
        <div class="v-select">
          <div class="dropdown-toggle">
            <div class="selected-options">
              <span class="selected-tag">Foo<button class="close"><span>x</span></button></span>
              <span class="selected-tag">Bar<button class="close"><span>x</span></button></span>
              <span class="selected-tag">Roar<button class="close"><span>x</span></button></span>
              <input type="search" class="my-form">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

-->