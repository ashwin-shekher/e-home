import JSONAPISerializer from "@ember-data/serializer/json-api";

export default JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (requestType === "findAll" && payload.products) {
      return {
        data: payload.products.map((product) => ({
          type: "product",
          id: product.id,
          attributes: {
            title: product.title,
            description: product.description,
            category: product.category,
            price: product.price,
            discountPercentage: product.discountPercentage,
            rating: product.rating,
            stock: product.stock,
            tags: product.tags,
            brand: product.brand,
            sku: product.sku,
            weight: product.weight,
            dimensions: product.dimensions,
            warrantyInformation: product.warrantyInformation,
            shippingInformation: product.shippingInformation,
            availabilityStatus: product.availabilityStatus,
            returnPolicy: product.returnPolicy,
            minimumOrderQuantity: product.minimumOrderQuantity,
            meta: product.meta,
            images: product.images,
            thumbnail: product.thumbnail,
          },
          relationships: {},
        })),
      };
    }

    return this._super(...arguments);
  },
});
