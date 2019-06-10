const axios = require("axios");
module.exports = {
  add(num1, num2) {
    return num1 + num2;
  },
  isNull() {
    return null;
  },
  returnValue(value) {
    return value;
  },
  createUser() {
    const user = {
      firstName: "Paul",
      lastName: "Wechuli"
    };
    return user;
  },
  addFunction(param, param2) {
    return param + param2;
  },
  fetchUser() {
    return axios.get("https://jsonplaceholder.typicode.com/users/1");
  }
};
