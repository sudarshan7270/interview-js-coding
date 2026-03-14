// Input: nums = [11, 15 ,2, 7, ], target = 9
// Output: [0, 1]

let arr = [11, 15, 2, 7]
// if array sorted use two pointer work for sorted 
function pairSumTwoPointer(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let sum = arr[left] + arr[right]
        if (sum === target) {
            return [left, right]
        } else if (target > sum) {
            left++
        } else {
            right--
        }
    }
    return -1 // not found
}
let target = 9
console.log(pairSumTwoPointer(arr, target))

// if not sorted then combination required

function pairSumCombination(arr, target) {
    let map = new Map()

    // for(let i=0;i<arr.length;i++){
    //     map.set(arr[i],i)
    // }
    // console.log(map)
    // for(let i=0;i<arr.length;i++){
    //     let required=target-arr[i];
    //     if(map.has(required)){
    //         return [i,map.get(required)]
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        let required = target - arr[i];
        if (map.has(required)) {
            return [map.get(required), i]
        }
        map.set(arr[i], i)
    }
    return -1 //not found

}
console.log(pairSumCombination(arr, target))


// 2️⃣ Valid Anagram
// (Frequency Map Core)
// Problem
// Check if two strings are anagrams.
// "anagram", "nagaram" → true
// "rat", "car" → false

function checkAnagram(str1, str2) {

    return str1.split("").sort().join("") === str2.split("").sort().join("")

}
// Time: O(n log n) (because of sort)

// Space: O(n)
console.log(checkAnagram("anagram", "nagaram"));
console.log(checkAnagram("tar", "car"));

function checkAnagramOptimal(str1, str2) {

    if (str1.length !== str2.length) return false
    let map = new Map();


    for (let char of str1) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let char of str2) {
        if (!map.has(char)) return false
        map.set(char, map.get(char) - 1)
        if (map.get(char) === 0) {
            map.delete(char)
        }
    }
    return map.size === 0

}
console.log(checkAnagramOptimal("anagram", "nagaram"));
console.log(checkAnagramOptimal("tar", "car"));


// “Sorting works but costs O(n log n).
// To optimize, I use a frequency map where I count characters of the first string and decrement using the second.
// If at any point a character doesn’t exist or count goes negative, it’s not an anagram.”4️⃣ Reverse String

// (Two-pointer foundation)

// Problem

// Reverse a string in-place.
function revStrtwoPinter(str) {
    let arr = str.split("")
    let left = 0;
    let right = arr.length - 1
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--

    }
    return arr.join("")
}
console.log(revStrtwoPinter("hii"))

// 5️⃣ First Unique Character in String

// (Map + traversal)

// Problem

// Return index of first non-repeating character.

// "leetcode" → 0
// "loveleetcode" → 2
function firtsUniqueChar(str) {
    // let map=new Map();
    let map = new Map()
    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) {
            return i
        }
    }
}
console.log(firtsUniqueChar("loveleetcode"))

function moveZeroes(arr) {
    let insertPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i]
            insertPos++
        }
    }
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }
    return arr
}
console.log(moveZeroes([0, 1, 0, 3, 12]))
let a1 = [1, 2, 2, 1]
let a2 = [2, 2]

let set = new Set(a1)
let res = []
for (let num of a2) {
    if (set.has(num)) {
        res.push(num)
    }
}
console.log([...new Set(res)])

// [20,20,18,20,7,9]
function secondLargets(arr) {
    // let unique = [...new Set(arr)]
    let max = -Infinity;
    let second = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            second = max
            max = arr[i]

        } else if (arr[i] < max && arr[i] > second) {//imp
            second = arr[i]
        }
    }
    return second;
}
console.log("second max", secondLargets([20, 20, 10]))

let arr2 = [3, 8, 3, 7, 8, 9, 4, 7, 7, 7]
const uniques = arr2.filter((num, index) => arr2.indexOf(num) === index)
console.log(uniques)

let arr3 = [3, 8, 3, [7, [[8]], 9, 4], 7, 7, 7]
function flatterArray(arr) {
    let res = []
    for (let num of arr) {
        if (Array.isArray(num)) {
            res.push(...flatterArray(num))
        } else {
            res.push(num)
        }

    }
    return res
}
console.log(flatterArray(arr3))
const orders = [
    { id: 1, customer: "John", city: "Pune", amount: 500 },
    { id: 2, customer: "Jane", city: "Mumbai", amount: 300 },
    { id: 3, customer: "John", city: "Pune", amount: 200 },
    { id: 4, customer: "Bob", city: "Delhi", amount: 800 },
    { id: 5, customer: "Jane", city: "Pune", amount: 150 }
];

const grpByCity = orders.reduce((acc, curr) => {
    if (!acc[curr.city]) {
        acc[curr.city] = []
    }
    acc[curr.city].push(curr)
    return acc
}, {})
console.log(grpByCity);

const user = {
    name: "John",
    age: 28,
    city: "Pune",
    skills: ["React", "JS"],
    salary: 80000
};

for (let key in user) {
    console.log(key)


}

console.log(Object.keys(user));
console.log(Object.values(user));


const doubleNo = Object.entries(user).map(([key, val]) => [key, typeof val === "number" ? val * 2 : val])
const doubleUser = Object.fromEntries(doubleNo)
console.log(doubleUser)


function deepCompare(obj1, obj2) {
    if (obj1 === obj2) return true
    if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") {
        return obj1 === obj2
    }
    let key1 = Object.keys(obj1)
    let key2 = Object.keys(obj2)
    if (key1.length !== key2.length) return false

    for (let key of key1) {
        if (!key2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
            return false
        }
    }
    return true

}

function maxSum(arr) {
    let max = arr[0];
    let currMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currMax = Math.max(arr[i], currMax + arr[i]);
        max = Math.max(currMax, max)
    }
    return max
}
console.log(maxSum([-2, -2, 3, 8, -8, 0, 9, 10, 28]))



// 

function findTargetPair(numbers, targetSum) {
    // write logic here
    if (numbers.length <= 0) return -1
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let required = targetSum - numbers[i];
        if (map.has(required)) {
            return [i, map.get(required)]
        }
        map.set(numbers[i], i)

    }
    return -1
}

console.log(findTargetPair([2, 7, 11, 15], 9)); // [0,1]
console.log(findTargetPair([3, 2, 4], 6));     // [1,2]

function getSecondMax(values) {
    // write logic here
    let max = -Infinity;
    let smax = -Infinity
    for (let i = 0; i < values.length; i++) {
        if (values[i] > max) {
            smax = max;
            max = values[i];
        } else if (values[i] < max && values[i] > smax) {
            smax = values[i]
        }
    }

    return smax
}

console.log(getSecondMax([10, 20, 20, 5])); // 10
console.log(getSecondMax([5, 5, 5]));      // null




function isValidShuffle(strA, strB) {
  // write logic here
  if(strA.length !== strB.length) return false
  let map=new Map();
  for(let i=0;i<strA.length;i++){
    if(!map.has(strA[i])){
        map.set(strA[i],0)
    }
    let val=map.get(strA[i])+1
    map.set(strA[i],val)
  }
  for(let i=0;i<strB.length;i++){
    if(!map.has(strB[i])) return false
    map.set(strB[i],map.get(strB[i])-1)
    if(map.get(strB[i])===0){
        map.delete(strB[i])
    }
  }
  return map.size===0
//   return map
}

console.log(isValidShuffle("anagram", "nagaram")); // true
console.log(isValidShuffle("rat", "car"));         // false


function pushZerosBack(arrData) {
  // write logic here
  let insertPos=0;
  for (let i = 0; i < arrData.length; i++) {
    if(arrData[i] !==0){
        arrData[insertPos]=arrData[i]
        insertPos++
    }
    
  }
  while(insertPos<arrData.length){
    arrData[insertPos]=0;
    insertPos++
  }
  return arrData
}

console.log(pushZerosBack([0,1,0,3,12]));


// 3 canditate current ele currmax+current ele 
function maxContinuousSum(series) {
  // write logic here
  let currSum=series[0];
  let maxSum=series[0];
  for(let i=1;i<series.length;i++){
    currSum=Math.max(series[i],currSum+series[i]);
    maxSum=Math.max(currSum,maxSum)
  }
  return maxSum
}

console.log(maxContinuousSum([-2,1,-3,4,-1,2,1,-5,4])); // 6

function compressSortedList(numsArr) {
  // write logic here
  return [...new Set(numsArr)].length
}

console.log(compressSortedList([1,1,2])); // 2


function firstUniqueChar(word) {
  // write logic here
  let map=new Map();
  for(let i=0;i<word.length;i++){
    map.set(word[i],(map.get(word[i])||0)+1)
  }
  for (let char of word){
    if(map.get(char)===1){
        return char
    }
  }
}

console.log(firstUniqueChar("aabbcdde")); // c


function debounceAction(callbackFn, delayTime) {
  // write logic here
  let timer;
  return function(...args){
    clearTimeout(timer)
    timer=setTimeout(()=>callbackFn(...args),delayTime)
  }
}

const logMessage = debounceAction(() => {
  console.log("API called");
}, 500);
logMessage();
logMessage();
logMessage();
logMessage();


function nonRepeatingSubstring(s) {   //imp
    let maxLength=0;
    let set =new Set();
    let left=0;
    for(let i=0;i<s.length;i++){ // i is right
        while(set.has(s[i])){
            set.delete(s[left])
            left++
        }
        set.add(s[i])
        maxLength=Math.max(maxLength,i-left+1)
         
    }
    return maxLength
}
console.log("longest non repeating substring:", nonRepeatingSubstring("abcabcbb"));





