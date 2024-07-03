import Component from "@ember/component";
import { computed } from "@ember/object";

import { inject as service } from "@ember/service";

export default Component.extend({
  cart: service(),

  alreadyAdded: computed("cart.items.@each.id", function () {
    return !!this.cart.items.find((item) => item.id === this.product.id);
  }),

  actions: {
    toggleCart(product) {
      if (this.cart.isExist(product)) {
        this.cart.removeFromCart(product);
      } else {
        this.cart.addToCart(product);
      }

      // Optionally, you can provide feedback to the user that the product has been added to the cart
      // alert(`${product.title} has been added to your cart!`);
    },
  },
});
