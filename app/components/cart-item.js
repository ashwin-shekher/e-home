import Component from "@ember/component";

import { inject as service } from "@ember/service";

export default Component.extend({
  cart: service(),

  actions: {
    removeFromCart(product) {
      this.cart.removeFromCart(product);
    },
  },
});
