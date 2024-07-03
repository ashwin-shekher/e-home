// app/models/product.js
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  price: DS.attr('number'),
  discountPercentage: DS.attr('number'),
  rating: DS.attr('number'),
  stock: DS.attr('number'),
  tags: DS.attr(),
  brand: DS.attr('string'),
  sku: DS.attr('string'),
  weight: DS.attr('number'),
  dimensions: DS.attr(),
  warrantyInformation: DS.attr('string'),
  shippingInformation: DS.attr('string'),
  availabilityStatus: DS.attr('string'),
  reviews: DS.attr(),
  returnPolicy: DS.attr('string'),
  minimumOrderQuantity: DS.attr('number'),
  meta: DS.attr(),
  images: DS.attr(),
  thumbnail: DS.attr('string')
});
