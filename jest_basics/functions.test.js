const {
  add,
  isNull,
  returnValue,
  createUser,
  addFunction,
  fetchUser
} = require("./functions");

test("add 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5); //toBe is an example of a matcher
});

test("add 2 +2 to NOT equal 5", () => {
  expect(add(2, 2)).not.toBe(5);
});

//Check For Truthy and Falsy Values
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

//toBe Null
test("should be Null ", () => {
  expect(isNull()).toBeNull();
});

//toBe Falsy
test("should be falsy", () => {
  expect(returnValue(0)).toBeFalsy();
});

//User should be Paul Wechuli Object
test("user Should be Paul Wechuli Object", () => {
  //toBe is for primitve types, not objects and arrays
  expect(createUser()).toBe({ firstName: "Paul", lastName: "Wechuli" });
});

//toEqual
test("user Should be Paul Wechuli Object", () => {
  //toBe is for primitve types, not objects and arrays
  expect(createUser()).toEqual({ firstName: "Paul", lastName: "Wechuli" });
});

//Less than and greater than
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(addFunction(load1, load2)).toBeLessThan(1800);
});

//Regular expressions

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//Arrays
test("Admin should be in user name ", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//Working with async data - promises
test("User fetched name should be Leanne Graham ", () => {
  //If your code uses promises, there is a simpler way to handle asynchronous tests. Just return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail
  expect.assertions(1);
  return fetchUser().then(response => {
    expect(response.data.name).toEqual("Leanne Graham");
  });
});

//Async Await
test("User fetched name should be Leanne Graham ", async () => {
  //If your code uses promises, there is a simpler way to handle asynchronous tests. Just return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail
  expect.assertions(1);
  const response = await fetchUser();
  expect(response.data.name).toEqual("Leanne Graham");
});
