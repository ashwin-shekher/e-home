import Component from "@ember/component";
import { get } from "@ember/object";

export default Component.extend({
  actions: {
    closeModal() {
      // console.log('this.args.closeModal', this);

      let actionHandler = this.get("closeModelFromParent");
      // console.log('actionHandler',actionHandler);
      if (actionHandler) {
        actionHandler(); // Invoke the function passed from parent
      } else {
        console.warn("Action handler is not defined in child component");
      }
    },
  },
});
