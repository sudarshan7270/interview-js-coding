/*************************************************
 * JAVASCRIPT OBJECT BASICS – INTERVIEW REVISION
 *************************************************/

/* 1️⃣ Count occurrences using reduce */
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

const occurrence = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1; // if key exists increment else start from 1
  return acc;
}, {});

console.log("1️⃣ Occurrence count:", occurrence);
// Objects are commonly used as frequency maps


/* 2️⃣ Convert Array → Object using id as key */
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "c" }
];

const arrayToObj = users.reduce((acc, curr) => {
  acc[curr.id] = curr; // id becomes object key
  return acc;
}, {});
const arrayValObj = users.reduce((acc, {id,...curr}) => {
    if(!acc[id]){
        acc[id]=[]
    }
    acc[id].push(curr)
  return acc;
}, {});
console.log("2️⃣ Array to arrayValObj:", arrayValObj);



console.log("2️⃣ Array to Object:", arrayToObj);
// Faster lookup using object instead of array


/* 3️⃣ Computed property names + delete */
const firstNameKey = "firstName";
const lastNameKey = "lastName";

const objName = {
  [firstNameKey]: "Sudarshan", // dynamic key
  [lastNameKey]: "Bhosale",
  age: 24,
  address: "Pune"
};

delete objName.age; // delete removes key from object
console.log("3️⃣ After delete:", objName);


/* 4️⃣ Loop over object using for...in */
console.log("4️⃣ Looping object values:");
for (let key in objName) {
  console.log(key, "=>", objName[key]);
}
// for...in gives keys, use obj[key] for value


/* 5️⃣ Duplicate keys → last value wins */
const obj1 = { a: 10, b: 20, a: 30 };
console.log("5️⃣ Duplicate keys result:", obj1);
// a becomes 30 (overwritten)


/* 6️⃣ Modify only numeric values in object */
let nums = {
  a: 100,
  b: 200,
  c: "sudarshan"
};

for (let key in nums) {
  if (typeof nums[key] === "number") {
    nums[key] = nums[key] * 2;
  }
}

console.log("6️⃣ Numbers multiplied:", nums);
// typeof is commonly used in object logic


/* 7️⃣ Object keys are ALWAYS strings */
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // key becomes "[object Object]"
a[c] = 456; // overwrites previous value

console.log("7️⃣ Object as key issue:", a);
console.log("Accessing a[b]:", a[b]);
// Use Map instead of object when keys are objects


/* 8️⃣ JSON.stringify & JSON.parse */
const user = { name: "sudarshan", age: "23" };

const jsonString = JSON.stringify(user);
console.log("8️⃣ JSON string:", jsonString);
console.log("Access string like object:", jsonString.name); // undefined

const parsedUser = JSON.parse(jsonString);
console.log("Parsed object:", parsedUser);
console.log("Parsed name:", parsedUser.name);
// stringify → object to string
// parse → string to object


/* 9️⃣ Spread operator (shallow copy) */
const user1 = { name: "sudarshan", age: "24" };
const admin = { admin: true, ...user1 };

console.log("9️⃣ Spread result:", admin);
// Spread copies only first level (shallow copy)


/* 🔟 JSON.stringify with filter */
const filtered = JSON.stringify(admin, ["name", "age"]);
console.log("🔟 Filtered JSON:", filtered);
// Only selected keys included


/* 1️⃣1️⃣ Object destructuring (nested + rename) */
const obj2 = {
  x: 10,
  y: 20,
  a: 30,
  fullName: { name: "sudarshan", age: 24 }
};

const {
  x,
  y,
  a: renamedA,
  fullName: { name: newName, age }
} = obj2;

console.log("1️⃣1️⃣ Destructured:", renamedA, x, y, newName, age);
// Used heavily in React props & state


/* 1️⃣2️⃣ Shallow vs Deep copy */
let greetA = { greeting: "hey" };

let greetB = greetA; // shallow (reference)
let greetBDeep = JSON.parse(JSON.stringify(greetA)); // deep copy

greetA.greeting = "hello";

console.log("1️⃣2️⃣ Shallow copy:", greetB.greeting);     // hello
console.log("Deep copy:", greetBDeep.greeting);           // hey


/* 1️⃣3️⃣ Object comparison */
console.log("1️⃣3️⃣ Object comparison:");
console.log({ a: 1 } == { a: 1 });   // false
console.log({ a: 1 } === { a: 1 });  // false
// Objects are compared by reference, not value


/* 1️⃣4️⃣ Same reference comparison */
const chk = { a: 10 };
const chk2 = chk;

console.log("1️⃣4️⃣ Same reference == :", chk == chk2);   // true
console.log("Same reference === :", chk === chk2);        // true
// Same memory reference → equal


// guess output question