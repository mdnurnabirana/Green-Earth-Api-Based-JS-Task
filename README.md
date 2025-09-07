# Answering Questions

### 1. Difference between `var`, `let`, and `const`

* `var` is global/function scoped and can “leak” outside blocks.
* `let` is block scoped and can be reassigned.
* `const` is block scoped but cannot be reassigned once defined.

```js
if (true) {
  var a = 5;
  let b = 10;
  const c = 15;
}
console.log(a); // 5
// console.log(b); // Error (block scoped)
// console.log(c); // Error (block scoped)
```

---

### 2. Difference between `map()`, `forEach()`, and `filter()`

* `map()` transforms each item and returns a new array.
* `forEach()` loops through items but doesn’t return a new array.
* `filter()` returns only items that pass a condition.

```js
const fruits = ["apple", "banana", "mango"];

const upper = fruits.map(f => f.toUpperCase()); // ["APPLE", "BANANA", "MANGO"]
fruits.forEach(f => console.log("Fruit:", f)); // prints each fruit
const longNames = fruits.filter(f => f.length > 5); // ["banana"]
```

---

### 3. Arrow Functions in ES6

* Shorter syntax using `() =>`.
* They inherit `this` from surrounding scope.

```js
const square = n => n * n;
console.log(square(6)); // 36

const greet = name => `Hello, ${name}!`;
console.log(greet("Nur")); // Hello, Nur!
```

---

### 4. Destructuring Assignment in ES6

* Pulls values directly from arrays or objects.

```js
// Array
const colors = ["red", "green", "blue"];
const [first, , third] = colors;
console.log(first, third); // red blue

// Object
const car = { brand: "Toyota", model: "Corolla" };
const { brand, model } = car;
console.log(brand, model); // Toyota Corolla
```

---

### 5. Template Literals in ES6

* Backticks (\``) allow variables with `\${}\` and multi-line strings.

```js
const food = "pizza";
const drink = "coffee";

const order = `I would like ${food} and ${drink}.`;
console.log(order); // I would like pizza and coffee.

const multi = `Line 1
Line 2
Line 3`;
console.log(multi);
```