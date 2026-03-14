// -----------------------------------------------------------
// 1️⃣ Flatten a nested array without using flat()
// Logic: Recursively check if item is array → spread its flattened output
// Input: [[1,[2,[3]]]]  Output: [1,2,3]
// -----------------------------------------------------------
let arr = [[1, [2, [3, [4, [5]]]]]];

function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {  
      result.push(item);
    }
  }
  return result;
}
console.log(flattenArray(arr));


// -----------------------------------------------------------
// 2️⃣ First non-repeating character in a string
// Logic: Use Map to count frequency, then return first char with count=1
// Input: "leetcode"  Output: "l"
// -----------------------------------------------------------
function nonRepeatingChrinstr(str) {
  let map = new Map();
  for (let char of str) {
    let value = (map.get(char) || 0) + 1;
    map.set(char, value);
  }

  for (let char of str) {
    if (map.get(char) === 1) return char;
  }
  return -1;
}
console.log(nonRepeatingChrinstr("leetcode"));


// -----------------------------------------------------------
// 3️⃣ Reverse string without using reverse()
// Logic: Loop from last index & build string
// Input: "leetcode"  Output: "edocteel"
// -----------------------------------------------------------
function reversestr(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) reverseStr += str[i];
  return reverseStr;
}
console.log(reversestr("leetcode"));


// -----------------------------------------------------------
// 4️⃣ Remove duplicates from array
// Logic: Use Set OR filter(indexOf === current index)
// Input: [1,1,1,23,4,5]  Output: [1,23,4,5]
// -----------------------------------------------------------
let arrnew = [1, 1, 1, 23, 4, 5];
console.log("unique using Set:", [...new Set(arrnew)]);
console.log("unique using filter:", arrnew.filter((num, i) => arrnew.indexOf(num) === i));


// -----------------------------------------------------------
// 5️⃣ Array Intersection (common elements)
// Logic: Convert 2nd array to Set, filter items from first
// Input: [1,2,3,4],[3,4,5,6]  Output: [3,4]
// -----------------------------------------------------------
function intersectionusingSet(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));   //imp
}
console.log(intersectionusingSet([1,2,3,4], [3,4,5,6]));


// -----------------------------------------------------------
// 6️⃣ Top K frequent elements
// Logic: Frequency map → sort by value desc → pick first K keys
// Input: [1,1,1,2,2,3,3,3,3,3], k=2  Output: [3,1]
// -----------------------------------------------------------
function findFirstkElemet(arr, k) {
  let map = new Map();
  let res = [];

  for (let num of arr) {
    let value = (map.get(num) || 0) + 1;
    map.set(num, value);
  }

  let arrNew = Array.from(map);
  arrNew.sort((a, b) => b[1] - a[1]); // sort by freq desc

  let added=0; 
   for(let [i,j] of arrNew){ 
    if(added<k){ 
        res.push(i) 
        added++ } 
    }

    // siple loop approach
    // for(let [key] of arrNew){
    //     if(res.length<k){
    //         res.push(key)
    //     }
    // }


  return res;
}
console.log(findFirstkElemet([1,1,1,2,2,3,3,3,3,3], 2));


// -----------------------------------------------------------
// 7️⃣ Rotate array by N positions
// Logic: Reverse algorithm (reverse parts then whole)
// Input: [1,2,3,4,5,6], left=2 Output: [3,4,5,6,1,2]
// -----------------------------------------------------------
function reversal(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++; right--;
  }
  return arr;
}

let leftBy = 2;
let arrleft = [1,2,3,4,5,6];
reversal(arrleft, 0, leftBy-1);
reversal(arrleft, leftBy, arrleft.length-1);
reversal(arrleft, 0, arrleft.length-1);
console.log("left rotate by 2:", arrleft);


// -----------------------------------------------------------
// 8️⃣ Check if strings are anagrams
// Logic: Sort both strings and compare
// Input: "eat","tea"  Output: true
// -----------------------------------------------------------
function stranagram(str) {
  return str.split("").sort().join("");
}
console.log("is anagram:", stranagram("eat") === stranagram("tea"));


// -----------------------------------------------------------
// 9️⃣ Longest substring without repeating characters
// Logic: Sliding window + Set; expand right, shrink left when repeat found
// Input: "abcabcbb"  Output: 3 ("abc")
// -----------------------------------------------------------
function nonRepeatingSubstring(s) {   //imp
  let left = 0;
  let maxLength = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
console.log("longest non repeating substring:", nonRepeatingSubstring("abcabcbb"));



// -----------------------------------------------------------
// 1️⃣ Move all zeros to the end (in-place, no extra space)
// Logic: Two pointers → shift non-zero forward, fill rest with 0
// Input: [1,0,2,0,4,5,0,6]  Output: [1,2,4,5,6,0,0,0]
// -----------------------------------------------------------
let arr5=[1,0,2,0,4,5,0,6];

function moveZerosToend(arr){
    let insestpos=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !==0){
            arr[insestpos]=arr[i];
            insestpos++;
        }
    }
    while(insestpos<arr.length){
        arr[insestpos]=0;
        insestpos++;
    }
    return arr;
}
console.log("move zeros to end", moveZerosToend(arr5));


// -----------------------------------------------------------
// 2️⃣ Frequency map of array elements (count occurrences)
// Logic: Use Map or Reduce to count frequency
// Input: [1,1,1,2,2,3]  Output: {1:3, 2:2, 3:1}
// -----------------------------------------------------------
function freqMap(arr) {
    let map= new Map();
    for(let num of arr){
        let value = (map.get(num) || 0) + 1;
        map.set(num,value);
    }
    return map;
}
console.log("freqMap", freqMap([1,1,1,2,2,3]));

let arr6=[1,1,1,2,2,3];
let usingReduce = arr6.reduce((acc,curr)=>{
    acc[curr]=(acc[curr] || 0) + 1;
    return acc;
},{});
console.log("using reduce", usingReduce);


// -----------------------------------------------------------
// 3️⃣ Group array of objects by key
// Logic: Reduce by grouping values based on key
// Input: groupByKey(users,"dept") → {HR:[..], IT:[..]}
// -----------------------------------------------------------
const users = [
  {name: 'John', dept: 'HR'},
  {name: 'Jane', dept: 'IT'}, 
  {name: 'Bob', dept: 'HR'}
];

function groupByKey(arr, key) {
  return arr.reduce((acc,curr)=>{
    const group = curr[key];
    if(!acc[group]) acc[group] = [];  //imp
    acc[group].push(curr);
    return acc;
  },{});
}

let user = groupByKey(users, 'dept');
console.log(user);


// -----------------------------------------------------------
// 4️⃣ Deep vs Shallow copy
// Logic: Spread = shallow, JSON stringify = deep
// -----------------------------------------------------------
let deep = JSON.parse(JSON.stringify(user));
let shallow = { ...user };
console.log("deep copy", deep);
console.log("shallow copy", shallow);


// -----------------------------------------------------------
// 5️⃣ Deep comparison of objects
// Logic: Recursively check keys & values match
// Input: {a:1,b:{c:2}}, {a:1,b:{c:2}} → true
// -----------------------------------------------------------
const original = { a: 1, nested: { b: 2 } };

function deepEqual(obj1, obj2) {
    if(obj1 === obj2) return true;

    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1===null || obj2===null) {
        return false;
    }

    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if(key1.length !== key2.length) return false;

    for(let key of key1){
        if(!key2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false; // imp
    }
    return true;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log("deep equal?", deepEqual(obj1, obj2));


// -----------------------------------------------------------
// 6️⃣ Sort array of objects
// Logic: Compare based on numeric value
// -----------------------------------------------------------
const usersObj = [
  { name: 'John', age: 30, salary: 50000 },
  { name: 'Jane', age: 25, salary: 60000 },
  { name: 'Bob', age: 35, salary: 45000 }
];

let sortedObjeAsc = usersObj.sort((a,b)=>a.age-b.age);
console.log("asc age", sortedObjeAsc);

let ascSal = usersObj.sort((a,b)=>a.salary-b.salary);
console.log("asc sal", ascSal);

let descSal = usersObj.sort((a,b)=>b.salary-a.salary);
console.log("desc sal", descSal);


// -----------------------------------------------------------
// 7️⃣ Debounce function
// Logic: Only execute after user stops calling for a delay time
// Use case: Input search API optimization
// -----------------------------------------------------------
function debounce(fn, delay) {
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer=setTimeout(()=>fn.apply(this,args),delay);
  };
}

const callAPi = () => console.log("debounce called");
const debounceFun = debounce(callAPi, 2000);

debounceFun(); debounceFun(); debounceFun();


// -----------------------------------------------------------
// 8️⃣ Throttle function
// Logic: Run function every N ms ignoring extra calls
// Use case: scroll, resize, button spam prevent
// -----------------------------------------------------------
function throttle(fn, delay){
  let lastcall = 0;

  return function(...args){
    let now = Date.now();
    if(now-lastcall >= delay){ //imp
      fn.apply(this,args);
      lastcall = now;
    }
  };
}

const callDedupe = () => console.log("called dedupe");
const throttlecalled = throttle(callDedupe, 2000);
throttlecalled();




// Implement a memoization value and function.
// const momoizedValue=useMemo(()=>{
//     return 10;
// },[])
// const memoizedFuntion=useCallback(()=>{

// },[])

// if childComp is sperated file if added childComp in same file of parent donet use export

// const childComp=React.memo(({name,age})=>{
    
// })
// export default childComp


// =================== Custom Map Polyfill ===================
// Polyfill means: creating our own implementation of an existing method.
// Here we are creating custom map() method called sudarshaMap.

Array.prototype.sudarshaMap = function(callback){
    let res = [];
    for(let i=0; i < this.length; i++){
        // Apply callback to each element
        res.push(callback(this[i], i, this));
    }
    return res;
}

let arrsudarshan = [1,2,3].sudarshaMap(x => x * 2);
console.log("sudarshanMap", arrsudarshan);  // Output: [2,4,6]


// =================== Custom Filter Polyfill ===================
// Creating our own filter() called sudarshaFilter.

Array.prototype.sudarshaFilter = function(callback){
    let res = [];
    for(let i=0; i < this.length; i++){
        // Only push values that satisfy condition (callback returns true)
        if(callback(this[i], i, this)){
            res.push(this[i]);
        }
    }
    return res;
}

let arrsudarshanFilter = [1,2,3].sudarshaFilter(x => x % 2 === 0);
console.log("sudarshanFilter", arrsudarshanFilter); // Output: [2]


// =================== Closure ===================
// Closure means: inner function remembers outer function variable even after outer ends.

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log("count value", count);
    }
    return inner;
}

var counter = outer();
counter();  // 1
counter();  // 2


// =================== Currying ===================
// Converting sum(a,b,c) into sum(a)(b)(c)

function sum(a,b,c){
    return a + b + c;
}

function curring(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log("curring:", curring(1)(2)(3));  // Output: 6


// =================== Promise.all ===================
// Promise.all() runs multiple async operations together (parallel execution).
// It waits for ALL promises to resolve. If one fails -> entire Promise.all fails.

function promiseAllfunction(){
    const p1 = Promise.resolve("pizza");
    const p2 = Promise.resolve("coke");
    const p3 = Promise.resolve("icecream");

    Promise.all([p1, p2, p3])  //imp
    .then((res) => console.log(res))  // Output: ["pizza", "coke", "icecream"]
    .catch((error) => console.log("error", error)); // If any promise fails
}

promiseAllfunction();

let bArray=[1,2,3,44,67];
let target=2;

let left=0;
let right=bArray.length-1;
let mid;
while(left<=right){
     mid=Math.floor((left+right)/2)
    if(bArray[mid]===target){
        console.log("Found at index:", mid); 
        break;
    } else if(bArray[mid]>target){   //imp
        right=mid-1
    }else{
        left=mid+1;
    }
}
console.log("Binary Iterative",mid)


function binaryRecursive(arr,left,right,target){
    if(left>right){
        return -1
    }
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid;
    }else if(arr[mid]>target){
        return binaryRecursive(arr,left,mid-1,target)  //imp
    }else{
        return binaryRecursive(arr,mid+1,right,target)
    }
}
let recusrivearr=[1,2,3,44,67]
console.log("Binary Recursive",binaryRecursive(recusrivearr,0,recusrivearr.length-1,67))


let shiftPositiveArr = [-1, 23, 45, -1, 8];
let insertPos = 0;  // Fix typo

for (let i = 0; i < shiftPositiveArr.length; i++) {
    if (shiftPositiveArr[i] > 0) {
        let temp = shiftPositiveArr[i];
        for (let j = shiftPositiveArr.length - 1; j >= insertPos; j--) {
            shiftPositiveArr[j] = shiftPositiveArr[j - 1];
        }
        shiftPositiveArr[insertPos] = temp;
        insertPos++;
    }
}
console.log("shift left positive", shiftPositiveArr);
// [23, 45, 8, -1, -1] ✅

