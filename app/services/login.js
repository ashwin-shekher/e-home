import Service from "@ember/service";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";
import { isEmpty } from "@ember/utils";

export default Service.extend({
  ajax: service(), // Inject Ember AJAX service
  localStorage: service(),
  accessToken: null,
  userData: null,

  async login(username, password) {
    try {
      let loginData = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      });

      let data = await loginData.json();

      if (data.id) {
        this.localStorage.setItem("userData", data);
        set(this, "accessToken", data.token);
        set(this, "userData", data);
      } else {
        this.localStorage.removeItem("userData");
        set(this, "accessToken", null);
        set(this, "userData", null);
        alert("Issue with your userid or password");
      }
    } catch (error) {
      this.localStorage.removeItem("userData");
      set(this, "accessToken", null);
      set(this, "userData", null);
    }
  },

  logout() {
    // Implement logout functionality if necessary
    // Clear stored token or session data
    set(this, "accessToken", null);
    set(this, "userData", null);
    this.localStorage.removeItem("userData");
  },

  isAuthenticated() {
    // Implement logic to check if user is authenticated
    return !isEmpty(this.accessToken);
  },

  async getAuth() {
    /* providing token in bearer */

    let userData = this.localStorage.getItem("userData");
    if (!userData) {
      return null;
    }
    let token = userData["token"];
    try {
      let meCall = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (meCall.status === 200) {
        set(this, "accessToken", token);
        set(this, "userData", userData);
      }

      // return !!token;
    } catch (error) {
      console.error(error);
    }
    return null;
  },
});
