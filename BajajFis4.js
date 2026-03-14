

// Array.prototype.sudarshanMap=function (callback){
//     let res=[]
//     for(let i=0;i<this.length;i++){
//         res.push(callback(this[i],i,this))
//     }
//     return res
// }
// let sudarshanMapEx=[1,2,3].sudarshanMap(x=>x*2)
// console.log(sudarshanMapEx)
// let obj1={a:10,b:20};
// let obj2={c:30};
// obj2.__proto__=obj1
// console.log(obj2.a)
// let str="Sudarshan";
// let revstr=""
// for(let i=str.length-1;i>=0;i--){
//     revstr=revstr+str[i]


// }
// console.log("rev",revstr)

// let newSTr=revstr.split("").map((char,i)=> i===0?"d":char).join("")

// console.log("revstrNew",newSTr)


// const apifetch=(url)=>{
//    return fetch(url)
//     .then(res=>res.json())

// }
// apifetch("https://dummyjson.com/products").then(data=>console.log(data)).catch(err=>console.log(err))



// const neFun=async()=>{
//     const apicall= await fetch("https://dummyjson.com/products");
//     const resp=await apicall.json();
//     return resp;

// }
// let apiresp=neFun().then(res=>console.log(res))

let map = new Map()
map.set("a", "b")
map.set("c", "d")
let strNew = "sudarshanc"
let res = ""
for (let i = 0; i < strNew.length; i++) {
  if (map.has(strNew[i])) {
    let val = map.get(strNew[i])
    res = res + val

  } else {
    res = res + strNew[i]
  }
}
console.log("Resulet", res)

/*
Problem:
Find the second largest unique number in an array.

Input:
[10, 5, 20, 8, 20]

Output:
10
*/

function secondLargest(arr) {
  // 👉 Write your logic here
  let arrnew = arr.sort((a, b) => b - a);
  let map = new Map();
  for (let i = 0; i < arrnew.length; i++) {
    let val = (map.get(arrnew[i]) || 0) + 1
    map.set(arrnew[i], val)
  }
  //    console.log(map)
  for (let num of arrnew) {
    if (map.get(num) === 1) {
      return num
    } else {
      -1
    }
  }
}

console.log(secondLargest([20, 10, 10, 8]));

/*
Problem:
Rotate the array to the right by k steps.

Input:
arr = [1,2,3,4,5], k = 2

Output:
[4,5,1,2,3]
*/


function rotateArray(arr, k) {
  // 👉 Write your logic here

  function reveArray(arr, left, right) {
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
  }

  reveArray(arr, 0, arr.length - 1);
  reveArray(arr, 0, k - 1)
  reveArray(arr, k, arr.length - 1)
  return arr

}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

/*
Problem:
Given an array containing n distinct numbers taken from 0 to n,
find the missing number.

Input:
[3,0,1]

Output:
2
*/

function findMissingNumber(nums) {
  // 👉 Write your logic here
  let sortedArr = nums.sort((a, b) => a - b)
  for (let i = 0; i < sortedArr.length; i++) {
    let sum = sortedArr[i] + 1
    if (sortedArr[i + 1] !== sum) {
      return sum
    }
  }
}

console.log(findMissingNumber([0, 1, 2]));


/*
Problem:
Find the length of the longest subarray whose sum equals k.

Input:
arr = [1,2,3,1,1,1,1], k = 3

Output:
3   // [1,1,1]
*/

function longestSubarraySum(arr, k) {
  let maxLen = 0;
  let currSum = 0;
  let left = 0;  // 👈 Start index tracker

  for (let right = 0; right < arr.length; right++) {
    currSum += arr[right];

    // Shrink from left if sum exceeds k
    while (currSum > k && left <= right) {
      currSum -= arr[left];
      left++;
    }

    // Check exact match
    if (currSum === k) {
      maxLen = Math.max(maxLen, right - left + 1);  // 👈 Now works!
    }
  }
  return maxLen;
}




console.log(longestSubarraySum([1, 2, 3, 1, 1, 1, 1], 3));


/*
Input: [3,0,1]
Output: 2
*/
function findMissing(nums) {
  // write logic
  let set = new Set(nums)
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i
    }
  }
  return -1
}
console.log(findMissing([3, 0, 1, 2]))

/*
Input: [1, 5, 3, 9, 2]
Output: 9
*/
function findMax(arr) {
  // write logic here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i]
      arr[i] = temp
    }
  }
  return { max: arr[arr.length - 1], min: arr[0] }
}

console.log(findMax([1, 5, 3, 9, 2]));


/*
Input: [1, 2, 3, 4]
Output: 10
*/
function sumArray(arr) {
  // write logic here
  let sum = arr.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  return sum
}

console.log(sumArray([1, 2, 3, 4]));

/*
Input: [5, 8, 1]
Output: 3
*/
function countElements(arr) {
  // write logic here
  return arr.length
}

console.log(countElements([5, 8, 1]));

/*
Input: []
Output: true
*/
function isEmpty(arr) {
  // write logic here
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
}

console.log(isEmpty([1]));

/*
Input: [1, 2, 3]
Output: [3, 2, 1]
*/
function reverseArray(arr) {
  // write logic here
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp
    left++
    right--
  }
  return arr
}

console.log(reverseArray([1, 2, 3]));

/*
Input: [10, 20, 30]
Output: 10
*/
function firstElement(arr) {
  // write logic here
  return { first: arr[0], last: arr[arr.length - 1] }
}

console.log(firstElement([10, 20, 30]));

/*
Input: [1, 2, 3], 2
Output: true
*/
function containsValue(arr, value) {
  // write logic here
  let set = new Set(arr)
  if (set.has(value)) {
    return true
  } else {
    return false
  }
}

console.log(containsValue([1, 2, 3], 2));

/*
Input: [5, 10, 15], 10
Output: 1
*/
function findIndex(arr, value) {
  // write logic here
  //   first willl find with linear search and after binary
  // for(let i=0;i<arr.length;i++){
  //     if(arr[i]===value){
  //         return i
  //     }
  // }

  // Binary serach

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] > value) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1

}

console.log(findIndex([5, 10, 15], 5));

// i can craeet custom filter method as well 
Array.prototype.sudarshanFilter = function (callback) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i])
    }
  }
  return res
}



/*
Input: [1, 2, 3]
Output: [2, 3]
*/
function removeFirst(arr) {

  // write logic here
  let filterFirst = arr.sudarshanFilter((num, i) => i > 0)
  return filterFirst
}

console.log(removeFirst([1, 2, 3]));

/*
Input: [1, 2, 3]
Output: [1, 2]
*/
function removeLast(arr) {
  // write logic here
  let filterLast = arr.filter((num, i) => i < arr.length - 1)
  return filterLast
}

console.log(removeLast([1, 2, 3]));


/*
Input: [1, 2], 3
Output: [1, 2, 3]
*/
function addAtEnd(arr, value) {
  // write logic here
  return [...arr, value]
}

console.log(addAtEnd([1, 2], 3));

/*
Input: [2, 3], 1
Output: [1, 2, 3]
*/
function addAtStart(arr, value) {
  // write logic here
  return [value, ...arr]
}

console.log(addAtStart([2, 3], 1));


/*
Input: [1, 2, 3, 4, 6]
Output: 3
*/
function countEven(arr) {
  // write logic here
  let countEven = 0;
  let counOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countEven++
    } else {
      counOdd++
    }
  }
  return { evenn: countEven, odd: counOdd }
}

console.log(countEven([1, 2, 3, 4, 6]));


// i can craeet Custom as well
Array.prototype.sudarshanMap = function (callback) {
  let res = [];
  for (i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}
/*
Input: [1, 2, 3]
Output: [2, 4, 6]
*/
function doubleElements(arr) {
  // write logic here

  //   in place
  //   for(let i=0;i,i<arr.length;i++){
  //     arr[i]=arr[i]*2
  //   }
  //   with map
  // let newArr=arr.sudarshanMap(num=>num*2)
  let newArr = arr.map(num => num * 2)

  return newArr
}

console.log(doubleElements([1, 2, 3]));

/*
Input: [3, 7, 1, 9]
Output: [7, 9]
*/
function greaterThanFive(arr) {
  // write logic here
  let filterArray = arr.filter(num => num > 5)
  return filterArray
}

console.log(greaterThanFive([3, 7, 1, 9]));


/*
Input: [3, 7, 1, 9]
Output: [7, 9]
*/
function greaterThanFive(arr) {
  // write logic 
  let filterArray = arr.filter(num => num < 10)
  return filterArray


}

console.log(greaterThanFive([3, 7, 1, 9, 11, 10]));

/*
Input: [1, 2, 3]
Output: "1,2,3"
*/
function arrayToString(arr) {
  // write logic here
  return String(arr)
}

console.log(arrayToString([1, 2, 3]));


/*
Input: [1, 2, 4, 5]
Output: 6
*/
function sumEven(arr) {
  // write logic here
  let sum = 0;
  let sumOfeven = arr.reduce((acc, curr) => {

    if (curr % 2 === 0) {
      acc = acc + curr
    }
    return acc

  }, 0)
  return sumOfeven
}

console.log(sumEven([1, 2, 4, 5]));

/*
Input: [1, 3, 5]
Output: true
*/
function allPositive(arr) {
  // write logic here
  let sumFlag = arr.every(num => num % 2 === 0)
  return sumFlag
}

console.log(allPositive([2, 6, 8]));

/*
Input: [2, 4, 6]
Output: 4
*/
function findAverage(arr) {
  // write logic here
  let sum = arr.reduce((acc, curr) => {
    acc = acc + curr
    return acc
  }
    , 0)
  return sum / arr.length
}

console.log(findAverage([2, 4, 6]));

/*
Input: [1, 2, 3]
Output: [1, 2, 3]
*/
function copyArray(arr) {
  // write logic here
  let copied = [...arr]
  return copied
}

console.log(copyArray([1, 2, 3]));

/*
Input: [1, 2, 3, 4, 5, 6]
Output: true
*/
function hasMoreThanFive(arr) {
  // write logic here
  if (arr.length > 5) {
    return true
  } else {
    return false
  }
}

console.log(hasMoreThanFive([1, 2, 3, 4, 5, 6]));


/*
Input: [4, 2, 9, 1]
Output: 1
*/
function findMin(arr) {
  // write logic here

  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}
console.log(findMin([4, 2, 9, 1]))


/*
Input: [1, 2, 2, 3, 3, 3]
Output: {1:1, 2:2, 3:3}
*/
function countFrequency(arr) {
  // write logic here
  let occu = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1
    } else {
      acc[curr] = 1
    }
    return acc
  }, {})
  return occu
}
console.log(countFrequency([1, 2, 2, 3, 3, 3]))

/*
Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]
*/
function removeDuplicates(arr) {
  // write logic here
  //   let usingFilter=arr.filter((num,i)=>arr.indexOf(num)===i)
  //   also i know 
  return [...new Set(arr)]
  return usingFilter
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))


/*
Input: [1, 2, 3, 5,4]
Output: true
*/
function isSorted(arr) {
  // write logic here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}
console.log(isSorted([1, 2, 3, 4]))


/*
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
*/
function moveZeros(arr) {
  // write logic here
  let insertPos = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++
    }
  }
  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++
  }
  return arr
}

console.log(moveZeros([0, 1, 0, 3, 12]))


/*
Input: [1,2,3,4,5], k = 2
Output: [3,4,5,1,2]
*/

function rotateLeft(arr, k) {
  // write logic here

  function revArray(arr, left, right) {
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp
      left++
      right--
    }
    return arr
  }
  revArray(arr, 0, k - 1);
  revArray(arr, k, arr.length - 1)
  revArray(arr, 0, arr.length - 1)
  return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5], 2))


/*
Input: [3, 0, 1]
Output: 2
*/
function findMissing(arr) {
  // write logic here
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(i)) {
      return i
    }

  }
}
console.log(findMissing([1, 2, 3]))


/*
Input: [1,2,3], [2,3,4]
Output: [2,3]
*/
function intersection(arr1, arr2) {
  // write logic here
  let res = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      res.push(arr1[i])
    }
  }
  return res
}
console.log(intersection([1, 2, 3], [2, 3, 4]))

//  11 t0 25

/*
Input: [1,2], [2,3,4]
Output: [1,2,3,4]
*/
function union(arr1, arr2) {
  // write logic here
  let res = [...new Set([...arr1, ...arr2])];
  return res

}
console.log(union([1, 2], [2, 3, 4]))

/*
Input: [1,2,3,4], [3,4,5]
Output: 2
*/
function commonCount(arr1, arr2) {
  // write logic here
  let set = new Set(arr2)
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (set.has(arr1[i])) {
      count++
    }
  }
  return count
}
console.log(commonCount([1, 2, 3, 4, 5], [3, 4, 5, 1]))


/*
Input: [1,2,3,2,4]
Output: 2
*/
function firstDuplicate(arr) {
  // write logic here
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let val = (map.get(arr[i]) || 0) + 1
    map.set(arr[i], val)
  }
  console.log("map", map)
  for (let [key, val] of map) {
    if (val >= 2) {
      return val
    }


  }
  return -1
}
console.log(firstDuplicate([1, 2, 3, 2, 4]))


/*
Input: [1,2,3]
Output: true
*/
function allUnique(arr) {
  // write logic here
  let arrset = [...new Set(arr)]
  return arrset.length === arr.length
}
console.log(allUnique([1, 2, 3]))


/*
Input: [2, 3, 10, 6, 4, 8, 1]
Output: 8
*/
function maxDifference(arr) {
  // write logic here
  //   tack minimum and maxDiff

  let minSofar = arr[0];
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - minSofar;
    if (diff > maxDiff) {
      maxDiff = diff
    }
    if (minSofar > arr[i]) {
      minSofar = arr[i]
    }

  }
  return maxDiff
}
console.log(maxDifference([2, 3, 10, 6, 4, 8, 1]))


/*
Input: [1,4,6,8], sum = 10
Output: true
*/
function hasPairWithSum(arr, target) {
  // write logic here
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let sum = arr[left] + arr[right]
    if (sum === target) {
      return true
    } else if (sum < target) {
      left++

    } else {
      right--
    }
  }
  return false
}

console.log(hasPairWithSum([1, 4, 6, 8], 12))


function majorityElement(arr) {
  // write logic here
  let map = new Map()
  for (let num of arr) {

    let val = (map.get(num) || 0) + 1
    map.set(num, val)
  }

  let arrNe = Array.from(map);
  arrNe.sort((a, b) => b[1] - a[1])
  console.log(arrNe)
  for (let [key, val] of arrNe) {
    return key
  }

}
console.log(majorityElement([1, 3, 3, 4, 2, 3, 3, 3]))


/*
Input: [1,2,3,4]
Output: { even:[2,4], odd:[1,3] }
*/
function splitEvenOdd(arr) {
  let res = { even: [], odd: [] }

  for (let num of arr) {
    if (num % 2 === 0) {
      res.even.push(num)
    } else {
      res.odd.push(num)

    }
  }
  return res
}
console.log(splitEvenOdd([1, 2, 3, 4]))


/*
Input: [1,2,3,1]
Output: 3
*/
function peakElement(arr) {
  // write logic here
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp
    }

  }

  //   return arr[arr.length-1]
  return Math.max(...arr)
}
console.log(peakElement([1, 2, 3, 1]))


/*
Input: [1,2,3,4], [3,4,1,2]
Output: true
*/
function isRotation(arr1, arr2) {
  // write logic here
  let str1 = arr1.join(",")
  let str2 = arr2.join(",") + "," + arr2.join(",")

  return str2.includes(str1)

}
console.log(isRotation([1, 2, 3, 4], [3, 4, 1, 2]))

console.log("this", this)

function thiCall() {
  console.log("this in fun", this)
}
thiCall()
const arrowThis = () => {
  console.log("this in arrow fun", this)
}
arrowThis()
let obj = {
  a: "10",
  b: function () {
    console.log("this fun obj", this.a)
  },

}
obj.b()
obj.c = () => {
  console.log("this arrow fun obj", obj.a)
}
let obj1 = { a: 10 }
let obj2 = { b: 20 }
obj1.__proto__ = obj2
console.log(" obj1 access obj2 property ", obj1.b)

console.log("proto", obj.__proto__)
console.log("proto 1", obj.__proto__.__proto__)

async function apiCallFlow() {

  try{
  let api1 = await fetch("url");
  let api1Resp = await api1.json()

  let api2 = await fetch("url", { method: "POST", body: JSON.stringify(api1Resp) })
  let api2Resp = await api2.json()

  let api3 = await fetch("url", { method: "POST", body: JSON.stringify(api2Resp) })
  let api3Resp=await api3.json()

  let api4=await fetch("url",{method:"POST",body:JSON.stringify(api3Resp)})
  let api5Resp=await api4.json()
  }catch(err){
    console.log(err)
  }

}

async function  callApiWithRetryLogic(url,option={},retries=3,delay=1000) {

  try{
    const response=await fetch(url,option);
    if(!response.ok){
      throw new Error("HTTP Error")
    }

    return await response.json()

  }catch(err){
    if(retries===0){
      throw err
    }
    await new Promise(res=>setTimeout(res,delay))
    return callApiWithRetryLogic(url,option,retries-1,delay)
  }
  
}
async function  apiCallWithRetry() {

  try{

  const api1=await callApiWithRetryLogic("url")

  const api2= await callApiWithRetryLogic("url",{method:"POST", headers:{"Content-type":"application/json"}, body:JSON.stringify(api1)})

  const api3= await callApiWithRetryLogic("url",{method:"POST", headers:{"Content-type":"application/json"},body:JSON.stringify(api2)})
  }catch(err){
    console.log(err)
  }
  
}

async function apiCallIndependent(params) {

  try{
const payload1={}
  const api1resp= await callApiWithRetryLogic("url",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(payload1)})


  const payload2={}
  const api2resp=await callApiWithRetryLogic("url",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(payload2)})
  }catch(err){
    console.log(err)
  }
  
}

async function apiCancellation(){
   const controller=new AbortController();
    const apiCall=await fetch("url",{signal:controller.signal})
// will cancel api that api call started when start typeing
    // in return cleanup
    controller.abort()

}


