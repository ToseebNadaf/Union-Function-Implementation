const union = require("./union");

test("union of primitive values", () => {
  expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(union(["a"], ["b"])).toEqual(["a", "b"]);
  expect(union([1], ["1", "1"])).toEqual([1, "1"]);
});

test("union of objects and nested objects", () => {
  const obj1 = { a: { b: 10 } };
  const obj2 = { a: { b: 20 } };
  const obj3 = { b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } };

  expect(union([obj1], [obj2])).toEqual([obj1, obj2]);
  expect(union([obj3, 2], [obj3, "2"])).toEqual([obj3, 2, "2"]);
});

test("union of empty arrays", () => {
  expect(union([], [])).toEqual([]);
  expect(union([1, 2, 3], [])).toEqual([1, 2, 3]);
  expect(union([], [4, 5, 6])).toEqual([4, 5, 6]);
});

test("union of mixed types", () => {
  expect(union([1, "1", true, null], [1, "1", false, undefined])).toEqual([
    1,
    "1",
    true,
    null,
    false,
    undefined,
  ]);
});
