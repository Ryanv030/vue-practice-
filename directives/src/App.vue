<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">
                <h1>Directives</h1>
                <p v-html="'<h6>Random h3 Using html directive</h6>'"></p>
            </div>
        </div>
        <hr>
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'orangered'">Color This</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
