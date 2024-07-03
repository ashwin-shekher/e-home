import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed, set } from "@ember/object";

export default Component.extend({
  cart: service(),
  router: service(),

  isPopupVisible: false,

  totalItems: computed("cart.items.@each.quantity", function () {
    return this.cart
      .getItems()
      .reduce((total, item) => total + item.quantity, 0);
  }),

  isEmpty: computed("totalItems", function () {
    return this.totalItems == 0;
  }),

  totalPrice: computed("cart.items.@each.quantity", function () {
    return this.cart
      .getItems()
      .reduce((total, item) => total + item.price * item.quantity, 0);
  }),

  actions: {
    openPopUpHandler: function () {
      set(this, "isPopupVisible", true);
    },

    closePopUpHandler: function () {
      set(this, "isPopupVisible", false);
      this.cart.clearCart();
      this.router.transitionTo("/products");
    },
  },
});
