<template>

</template>

<script>
export default {};
</script>

<style >
.v-select {
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
}
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