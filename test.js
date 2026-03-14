let arr = ["sudarshan", "sanjay", "bhosale"];
for (let name of arr) {
  console.log(name);
}

console.log("-----");

arr.push("Karmala"); // add at last position
for (let i = 0; i <= arr.length - 1; i++) {
  console.log("push", arr[i]);
}
console.log("-----");

arr.pop(); /// remove last element
for (let i = 0; i <= arr.length - 1; i++) {
  console.log("pop", arr[i]);
}
console.log("-----");

arr.shift(); // remove first element
for (let i = 0; i <= arr.length - 1; i++) {
  console.log("shift", arr[i]);
}

arr.unshift("Sudarshan", "Unshift"); // add at first position with value as arguremt here i passed 2 atfrom 0th index
console.log("-----");

// The 1 as the first argument tells splice() to start at index 1.
// The 1 as the second argument tells splice() to remove 1 (how many) element from that starting point.

arr.splice(1, 1);

for (let i = 0; i <= arr.length - 1; i++) {
  console.log("unshift", arr[i]);
}

const firstElement = arr.shift();
console.log("remove", firstElement);
arr.shift();

arr.unshift("Sudarshan", "Sanajay");

console.log("-----");

arr.map((name) => {
  console.log("map", name);
});

console.log("----- Removing upshiete with splice");
// arr.splice(1, 1); // remove 1 item from index 1

// The 1 as the first argument tells splice() to start at index 1.
// The 1 as the second argument tells splice() to remove 1 (how many) element from that starting point.

arr.map((name) => console.log("map after splice", name));

const firstName = arr.filter((name) => name === "Sudarshan");
console.log("fisrn name with filter", firstName);

const mulArr = [1, 2, 3, 4, 5];
const multipliedArray = mulArr.map((num) => num * 2);
console.log("multiplication of arry", multipliedArray);

const dividebyThree = multipliedArray.filter((item) => item % 3 === 0);
console.log("Divided of 3", dividebyThree);

// {arr.map((item, key)=>(
//     <div></div>
// ))}
const arrNum = [1, 2, 3, 4, 5];

function sumOfArray(arrNum) {
  let max = 0;
  for (let num of arrNum) {
    if (num > max) {

      max = num;
    }
  }

  return max;
}
console.log("maximus of arr", sumOfArray(arrNum));

const maxWithReduce = arrNum.reduce(function maxofArray(acc, num) {
  if (num > acc) {
    acc = num;
  }
  return acc;
}, 0);
console.log("max with reduce", maxWithReduce);

const objectArr = [
  {
    firstName: "Sudarshan",
    secondName: "Sanjay",
    lastName: "Bhosale",
    age: 24,
  },
  {
    firstName: "Sanjay",
    secondName: "",
    lastName: "Bhosale",
    age: 54,
  },
  {
    firstName: "Anjali",
    secondName: "Sanjay",
    lastName: "Bhosale",
    age: 48,
  },
  {
    firstName: "Vinayak",
    secondName: "Sanjay",
    lastName: "Bhosale",
    age: 26,
  },
];
const fullName = objectArr.map(
  (item) => item.firstName + " " + item.secondName + " " + item.lastName
);
console.log("Full Name Array", fullName);

// {26:1,25:1}

const ageWithCount = objectArr.reduce(function ageCountObject(acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log("finr age count", ageWithCount);

const ageabove30 = objectArr
  .filter((item) => item.age > 30)
  .map((item) => item.firstName);
console.log("age aboev 30", ageabove30);

const agebelow30 = objectArr.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log("age below 30", agebelow30);

const findFirstName = objectArr.find((name) => name.firstName === "Sudarshan");

if (findFirstName) {
  findFirstName.age = 24;
}
console.log("First name with find", findFirstName);

let letters = ["a", "b", "a", "c", "b"];

const letterCount = letters.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log("letter count with reduce", letterCount);

let products = [
  { id: 1, stock: 0 },
  { id: 2, stock: 5 },
];
let avl = products.filter((item) => item.stock > 0);
console.log("Availabe stock", avl);

let users = [{ id: 1 }, { id: 2 }];
const deepCopy = users.map((user) => ({ ...user }));
console.log("deep copy", deepCopy);

let cart = [
  { item: "Phone", price: 300 },
  { item: "Case", price: 20 },
  { item: "Charger", price: 50 },
];
const produtcPrice = cart.reduce((acc, curr) => {
  acc = acc + curr.price;
  return acc;
}, 0);
let priceSum = cart.reduce((sum, price) => sum + price.price, 0);
console.log("Price", priceSum);

let people = [
  { name: "A", age: 25 },
  { name: "B", age: 30 },
  { name: "C", age: 25 },
];
const groupedAge = people.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] || [];
  acc[curr.age].push(curr.name);
  return acc;
}, {});
console.log("Grouped age", groupedAge);

let nums = [1, 2, 2, 3, 4, 4, 7];
let unique = nums.filter((num, index) => nums.indexOf(num) === index);
console.log("Unique array", unique);

let tags = ["js", "react"];
let newTag = "js";
if (!tags.includes(newTag)) {
  tags.push(newTag);
}
console.log(tags);

let items = [
  { name: "Pen", qty: 2, price: 10 },
  { name: "Notebook", qty: 0, price: 50 },
  { name: "Pencil", qty: 5, price: 5 },
];
let totalBill = items
  .filter((item) => item.qty > 0)
  .map((item) => item.qty * item.price)
  .reduce((sum, curr) => (sum = sum + curr), 0);
console.log("Total bill", totalBill);

const numbers = [65, 44, 12, 4];
let sum = 0;
numbers.forEach((num, index) => {
  sum += num;
}, 0);
console.log("Sum with for each", sum);

let itemsOccr = ["a", "b", "a", "c"];

let occurent = itemsOccr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log("Occurenace", occurent);

// ["one", "two", "three"].map((item)=>item.toUpperCase());

let cartTotal = [
  { item: "Phone", price: 300 },
  { item: "Case", price: 20 },
  { item: "Charger", price: 50 },
];

let totalCart = cartTotal.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log("Toatl cart price", totalCart);
const sentence = "The quick brown fox jumps over the lazy dog";

console.log("Split", sentence.split(" "));

const str = "  This   is  a  string   with   extra    spaces  ";
const resulr = str.split(/\s+/).filter(Boolean);
console.log(resulr);
