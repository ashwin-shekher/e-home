import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  cart: service(),

  actions: {
    clearCart() {
      alert("Clearing Cart");
      this.cart.clearCart();
    },
  },
  model() {
    return this.cart.getItems();
  },
});
