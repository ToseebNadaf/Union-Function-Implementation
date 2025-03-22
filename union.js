function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

function union(arr1, arr2) {
  const combined = [...arr1, ...arr2];
  const result = [];
  const primitives = new Set();

  for (const item of combined) {
    if (typeof item !== "object" || item === null) {
      if (!primitives.has(item)) {
        primitives.add(item);
        result.push(item);
      }
    } else {
      if (!result.some((existingItem) => deepEqual(existingItem, item))) {
        result.push(item);
      }
    }
  }

  return result;
}

module.exports = union;
