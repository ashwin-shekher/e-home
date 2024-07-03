import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";
import { set } from "@ember/object";

export default Component.extend({
  login: service(),
  isLoading: true, // Initial loading state

  async init() {
    this._super(...arguments);
    try {
      await this.login.getAuth();
    } catch (error) {
      // Handle authentication error
      console.error("Authentication error:", error);
    }

    set(this, "isLoading", false);
  },

  // Computed property to check if user is authenticated
  isAuthenticated: computed("login.userData.firstName", function () {
    console.log("this.login.userData", this.login.userData);
    return !!this.login.userData;
  }),

  handleUsernameInput(event) {
    this.username = event.target.value;
    console.log("Username:", this.username);
    // Optionally, you can perform validation or other logic here
  },

  handlePasswordInput(event) {
    this.password = event.target.value;
    console.log("Password:", this.password);
    // Optionally, you can perform validation or other logic here
  },

  actions: {
    async logIn() {
      await this.login.login(this.username, this.password); // Assuming login() returns a promise
    },

    logOut() {
      this.login.logout();
    },
  },
});
