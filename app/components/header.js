import Component from "@ember/component";

import { inject as service } from "@ember/service";
import { computed } from "@ember/object";
export default Component.extend({
  cart: service(),

  cartCount: computed("cart.items.@each.id", function () {
    return this.cart.items.length;
  }),
});
