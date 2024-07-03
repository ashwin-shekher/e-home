// app/routes/products.js
import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  cart: service(),

  model() {
    return this.store.findAll("product");
  },

  actions: {
    addToCart(product) {
      this.cart.addToCart(product);
    },
  },
});
