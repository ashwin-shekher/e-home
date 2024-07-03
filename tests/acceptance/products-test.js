// tests/acceptance/products-test.js

import { module, test } from 'qunit';
import { visit, currentURL, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | products', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /products shows product list', async function(assert) {
    await visit('/products');

    assert.equal(currentURL(), '/products');
    assert.dom('.product-item').exists({ count: 30 }); // Assuming there are 3 products
    // Add more assertions as needed to verify individual product details
  });
});
