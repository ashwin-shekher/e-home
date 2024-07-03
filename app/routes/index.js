import Route from "@ember/routing/route";

import { inject as service } from "@ember/service";
export default Route.extend({
  login: service(),

  beforeModel : async function() {
    this.replaceWith("products");
  },
});
