const { add, isNull, returnValue, createUser } = require("./functions");

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
