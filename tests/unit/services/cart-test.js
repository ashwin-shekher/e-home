// tests/unit/services/cart-test.js

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupRenderingTest } from '@ember/test-helpers';
import Service from '@ember/service';

module('Unit | Service | cart', function(hooks) {
  setupTest(hooks);

  // Stubbing the cart service
  hooks.beforeEach(function() {
    this.owner.register('service:cart', Service.extend({
      items: [],
      addItem(item) {
        this.items.push(item);
      },
      getItems() {
        return this.items;
      },
      clearItems() {
        this.items = [];
      }
    }));
  });

  test('adding items to cart', function(assert) {
    let service = this.owner.lookup('service:cart');

    service.addItem('product1');
    service.addItem('product2');

    assert.deepEqual(service.getItems(), ['product1', 'product2'], 'Items are added correctly');
  });

  test('clearing items from cart', function(assert) {
    let service = this.owner.lookup('service:cart');

    service.addItem('product1');
    service.addItem('product2');

    service.clearItems();

    assert.deepEqual(service.getItems(), [], 'Cart is cleared');
  });
});
