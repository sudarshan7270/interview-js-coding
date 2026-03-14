const input = {
  a: 1,
  b: () => 2,
  c: {
    d: () => 3,
    e: [4, () => 5]
  }
};
console.log(typeof input.c.d)

function recursive(obj) {
  console.log("ctype ", typeof obj.c)


  for (let key in obj) {
    console.log(typeof key)
    if (typeof obj[key] === "function") {
      console.log("function key", key)
      obj[key] = obj[key]()
    } else if (typeof obj[key] === "object") {
      recursive(obj[key])
    }
  }

  return obj
}

console.log(recursive(input))// Expected Output
// {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     e: [4, 5]
//   }
// }


console.log("1")
const p1 = new Promise((resolve, reject) => { resolve(3) })
p1.then(res => console.log(res))
console.log("4")


console.log("-----------------")
console.log("1");
Promise.resolve().then(() => console.log("2"));
setTimeout(() => console.log("3"), 0);
console.log("4");