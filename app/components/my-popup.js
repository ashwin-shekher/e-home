import Component from "@ember/component";

export default Component.extend({
  actions: {
    closeModal() {
      let actionHandler = this.get("closeModelFromParent");
   
      if (actionHandler) {
        actionHandler(); // Invoke the function passed from parent
      } else {
        // eslint-disable-next-line no-console
        console.warn("Action handler is not defined in child component");
      }
    },
  },
});
