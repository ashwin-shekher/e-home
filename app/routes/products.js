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
      // Optionally, you can provide feedback to the user that the product has been added to the cart
      // alert(`${product.title} has been added to your cart!`);
    },
  },


});
