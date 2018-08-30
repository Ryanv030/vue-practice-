<template>
    <div class="row">
      <div class="col-12">
        <form>
          <div class="row">
          <div class="col-12 text-center form-group">
            <label>Quote</label>
            <textarea class="form-control" rows="3" v-model="quote"></textarea>
          </div>
          <div class="col-12 text-center form-group">
            <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
          </div>
          </div>
        </form>
      </div>
    </div>
</template>

 <script>
import Quote from "./Quote.vue";

export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew() {
      this.$emit("quoteAdded", this.quote);
      this.quote = "";
    }
  }
};
</script>

<style scoped >
</style>
  