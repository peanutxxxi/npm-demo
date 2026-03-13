const assert = require("assert");
const { greet, add, isEven } = require("../src/index");

assert.strictEqual(greet("World"), "Hello, World!");
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(isEven(4), true);
assert.strictEqual(isEven(3), false);

console.log("All tests passed!");
