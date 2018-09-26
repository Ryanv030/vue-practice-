export const fruitMixin = {
  data() {
    return {
      fruits: ["banana", "Orange ", "Blueberry", "apple"],
      filteredText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(item => {
        return item.match(this.filteredText);
      });
    }
  }
};
