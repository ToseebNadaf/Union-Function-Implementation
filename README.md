# **Union Function Implementation in JavaScript**

This repository contains an implementation of a **union function** in JavaScript that combines two arrays into a new array containing unique elements while preserving the order of their first occurrence. The function handles primitive values, objects, and nested structures, and avoids using `JSON.stringify()` for object comparison.

## **Overview**
The **union function** takes two arrays as input and returns a new array containing all unique elements from both arrays. The order of elements is preserved based on their first occurrence in either array. The function supports:

- **Primitive values** (numbers, strings, booleans, null, undefined)
- **Plain objects and arrays** (including nested objects/arrays)
- **Deep equality checks** for objects without using `JSON.stringify()`

## **Installation**
To use the **union function** in your project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ToseebNadaf/Union-Function-Implementation.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Union-Function-Implementation
   ```

3. **Install dependencies** (if any):
   ```bash
   npm install
   ```

## **Usage**

### **Importing the Function**
You can import the **union function** into your JavaScript project as follows:
```javascript
const union = require('./union');
```

### **Example Usage**
Here are some examples of how to use the **union function**:
```javascript
console.log(union([1, 2, 3], [2, 3, 4])); 
// Output: [1, 2, 3, 4]

console.log(union(['a'], ['b'])); 
// Output: ['a', 'b']

console.log(union([1], ['1', '1'])); 
// Output: [1, '1']

console.log(union([{ a: { b: 10 } }, [{ a: { b: 20 } }]])); 
// Output: [{ a: { b: 10 } }, { a: { b: 20 } }]

console.log(union([{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2],
    [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, '2']))
// Output: [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2, '2']
```

## **Tests**
The project includes test cases written using **Jest** to ensure the correctness of the **union function**.

### **Running Tests**
1. **Install Jest** (if not already installed):
   ```bash
   npm install --save-dev jest
   ```

2. **Run the tests**:
   ```bash
   npm test
   ```

### **Test Cases**
The test cases cover:
- **Primitive values**
- **Arrays with duplicate values**
- **Objects and nested objects**
- **Mixed types**
- **Edge cases** (e.g., empty arrays)
