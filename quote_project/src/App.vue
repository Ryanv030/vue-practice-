<template>
    <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <div class="row">
        <div class="error text-center col-12">{{error}}</div>
      </div>
      <app-new-quote @quoteAdded="newQuote($event)"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row mt-5">
        <div class="col-6 offsetc-3 text-center">
          <div class="alert-info">Info: Click on a Quote to delete it</div>
        </div>
      </div>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  data() {
    return {
      maxQuotes: 10,
      quotes: ["Just a quote to see something"],
      error: ""
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length < 10) {
        this.quotes.push(quote);
      } else {
        this.error = "Max Quotes added!";
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
      if (this.quotes.length < 10) {
        this.error = "";
      }
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
};
</script>

<style scoped>
.error {
  font-size: 40px;
  color: red;
}
</style>
