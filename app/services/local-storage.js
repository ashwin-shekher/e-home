// app/services/local-storage.js

import Service from '@ember/service';

export default Service.extend({
  // Method to set an item in local storage
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // Method to get an item from local storage
  getItem(key) {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  // Method to remove an item from local storage
  removeItem(key) {
    localStorage.removeItem(key);
  }
});
