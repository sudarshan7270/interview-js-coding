function removeDuplicates(arr) {
    // write code
    //   return [...new Set(arr)]
    const unique = arr.filter((num, i) => arr.indexOf(num) === i)
    return unique

}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Expected: [1, 2, 3, 4, 5]


function countItems(arr) {
    // write code
    //   let map=new Map();
    //   for(let char of arr){
    //     map.set(char,(map.get(char)||0)+1)
    //   }
    //   return map
    const usingReduce = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc

    }, {})
    return usingReduce
}

console.log(countItems(["a", "b", "a", "c", "b", "a"]));
// Expected: { a: 3, b: 2, c: 1 }


function findMax(arr) {
    // write code
    let max = arr[0]
    for (let num of arr) {
        if (num > max) {
            max = num
        }

    }
    return max
}

console.log(findMax([10, 5, 20, 8]));
// Expected: 20

function secondLargest(arr) {
    // write code
    let max = -Infinity;
    let sMax = -Infinity
    for (let num of arr) {
        if (num > max) {
            sMax = max
            max = num
        } else if (num < max && num > sMax) {
            sMax = num
        }
    }
    return sMax
}

console.log(secondLargest([10, 5, 20, 8]));
// Expected: 10

function flattenArray(arr) {
    // write code
    let res = [];
    // single level
    //   for(let num of arr){
    //     if(Array.isArray(num)){
    //         for(let newNum of num){
    //             res.push(newNum)
    //         }
    //     }else{
    //         res.push(num)
    //     }
    //   }
    //   return res
    for (let num of arr) {
        if (Array.isArray(num)) {
            res.push(...flattenArray(num))
        } else {
            res.push(num)
        }
    }
    return res // recusion also we can use based on proble you ask

}

console.log(flattenArray([1, [2, 3], [4, 5], 6])); // you ask one love so i loop inside we can use recusrion if reuirqed 
// Expected: [1, 2, 3, 4, 5, 6]



function moveZeros(arr) {
    // write code
    let insertPos = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i]
            insertPos++
        }
    }
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++
    }
    return arr
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// Expected: [1,3,12,0,0]


function revArr(arr, left, right) {
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp
        left++
        right--
    }
    return arr
}

function rotateArray(arr, k) {
    // write code
    // k=k%arr.length

    revArr(arr, 0, arr.length - 1)
    revArr(arr, 0, k - 1)
    revArr(arr, k, arr.length - 1)
    return arr

}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// Expected: [5,6,7,1,2,3,4]

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

function mergeObjects(o1, o2) {
  // write code here
  return {...o1,...o2}
}

console.log(mergeObjects(obj1, obj2));
// Expected: { a: 1, b: 3, c: 4 }

const obj = { a: 1, b: { c: 2 } };

function deepClone(o) {
  // write code here
  return JSON.parse(JSON.stringify(o))
}

const copy = deepClone(obj);
copy.b.c = 10;

console.log(obj.b.c); // Expected: 2
console.log(copy.b.c); // Expected: 10

const user = { name: "John", age: 25, city: "Delhi" };

function countKeysValues(obj) {
  // write code here
  return {keys:Object.keys(obj).length,values:Object.values(obj).length}
}

console.log(countKeysValues(user));
// Expected: { keys: 3, values: 3 }


const car = { brand: "BMW", year: 2020, color: "Black" };

function removeProperty(obj, prop) {
  // write code here
//   delete obj[prop]
const{[prop]:_,...objRest}=obj
  return  objRest
}

console.log(removeProperty(car, "year"));
// Expected: { brand: "BMW", color: "Black" }

const product = { id: 101, name: "Laptop", price: 50000 };

function objectToArray(obj) {
  // write code here
  return Object.entries(obj)
}

console.log(objectToArray(product));
// Expected: [ ["id",101], ["name","Laptop"], ["price",50000] ]

const userNew = { name: "John", address: { city: "Delhi", zip: 110001 } };

function getCity(u) {
  // write code here
  if(Object.keys(u).length<=0) return
  return u.address.city
}

console.log(getCity(userNew)); // Expected: "Delhi"
console.log(getCity({}));   // Expected: undefined

const objnew1 = { a: 1, b: { x: 10 } };
const objnew2 = { b: { y: 20 }, c: 3 };

function deepMerge(o1, o2) {
  // write code 
  let merged= {...o1,...o2}
  return merged
}

console.log(deepMerge(objnew1, objnew2));
// Expected: { a:1, b: { x:10, y:20 }, c:3 }





