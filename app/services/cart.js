import Service from "@ember/service";

export default Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.items = []; // Initialize items as an empty array
  },

  addToCart(product) {
    let existingItem = this.items.findBy("id", product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.pushObject({
        id: product.id,
        productName: product.title,
        price: product.price,
        quantity: 1,
      });
    }
  },

  isExist(product) {
    return this.items.findBy("id", product.id) ? true : false;
  },

  removeFromCart(product) {
    let existingItem = this.items.findBy("id", product.id);

    this.items.removeObject(existingItem);
  },

  getItems() {
    return this.items;
  },

  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  clearCart() {
    this.items.clear();
  },
});
