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
  }
};
