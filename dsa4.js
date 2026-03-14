function outerMemoryLeak(){
    const arr= new Array(1000).fill(0);

    return function(){
        console.log(arr.length);
    }
}
const call=outerMemoryLeak()
call()

function outerFix(){
    const arr= new Array(1000).fill(0);

    return console.log(arr.length)
}
outerFix()


function one(a){
    return function (b){
        return function (c){
        return a+b+c
        }
    }
}
console.log(one(1)(2)(3))


function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(()=>fn(...args),delay)
    }
}
function called(name){
    console.log("callled",name)
}

const checkDebounce=debounce(called,500)
checkDebounce("Sudarshan")
checkDebounce("Deep")
checkDebounce("Jay")



const throttledFn = throttle(log, 1000);
throttledFn("sudarshan");
throttledFn("Sanjay");
throttledFn("Bhosale");
// only first call runs, next after 1s

function throttle(fn,delay){
    let lastCall=0
    return function(...args){
        let now=Date.now()
        if(now-lastCall>=delay){
            lastCall=now;
            fn(...args)
        }
    }
}
function log(name){
    console.log("hello",name)
}


let arr=[1, [2, [3, [[4]]]], 5]

function flatter(arr){
    let res=[]
    for(let num of arr){
        if(Array.isArray(num)){
            res.push(...flatter(num))
          
        }else{
            res.push(num)
        }
    }
    return res
}
console.log("Flatten array ",flatter(arr))

// [1, 2, 2, 3, 4, 4, 5]
function removeDuplicate(arr){
    // let res=[...new Set(arr)]
    // return res
    // anoteh approch we can use filter

    let withFilter=arr.filter((num,i)=>arr.indexOf(num)===i)
    return withFilter
}
console.log("remove duplicate",removeDuplicate([1, 2, 2, 3, 4, 4, 5]))


function revStr(str){
    let res=""
    for(let i=str.length-1;i>=0;i--){
        res=res+str[i]
    }
    return res

}
function checkPalidrom(str){
    let rev=str.split("").reverse().join("") // this cre extaroperation spliet rrev join extar opeteion so rev str is best opein  
    return rev===str
}
console.log("palindrome with rev str",revStr("madam")==="madam")
console.log("palindrome with split rev",checkPalidrom("madam"))

const users = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 22 }
];

let groupByage=users.reduce((acc,curr)=>{
    if(!acc[curr.age]){
        acc[curr.age]=[]
    }
    acc[curr.age].push(curr)
    return acc
},{})

console.log("groupe by age",groupByage)

const arr1 = [1, 2,3,4, 5, 6];

function  usingLoopMissing(arr) {
    let set=new Set(arr)
    for(let i=1;i<=arr.length+1;i++){
        if(!set.has(i)){
            return i
        }
    }
    
}
function findMissingSum(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;  // sum len*(len+1)
  const arrSum = arr.reduce((a, b) => a + b, 0); // entire array sum //imp
  return sum - arrSum; // sum-arrsum
}


console.log("missing using loop",findMissingSum(arr1))


function revArray(arr,left,right){
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp;
        left++
        right--
    }
    return arr
}
const arr2 = [1, 2, 3, 4, 5, 6];
const k = 2;
// [5, 6, 1, 2, 3, 4]
revArray(arr2,0,arr2.length-1)
revArray(arr2,0,k-1)
revArray(arr2,k,arr2.length-1)
console.log("Right SHift by k",arr2)

// "listen", "silent"   → true
// "hello", "world"     → false

function isAngram(str1,str2){
    
    const  key=(str)=>{return str.split("").sort().join("")}

    return key(str1)===key(str2)
}
console.log("Is anagram",isAngram("listen","silent"))
console.log("Is anagram",isAngram("hello","world"))


function maxSumSubArray(arr){
    let max=arr[0];
    let currMax=arr[0];

    for(let i=0;i<arr.length;i++){
        currMax=Math.max(arr[i],currMax+arr[i]);
        max=Math.max(currMax,max)
    }
    return max
}
console.log("max sum",maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

function maxSumArray(arr){
    let max=arr[0]
    let currMax=arr[0]

    let start=0;
    let end=0
    let tempStart=0
    
    for(let i=1;i<arr.length;i++){
        if(currMax+arr[i]<arr[i]){
            currMax=arr[i]
            tempStart=i
        }else{
            currMax=currMax+arr[i]
        }
        if(currMax>max){
            max=currMax
            start=tempStart
            end=i
        }
    }
    return arr.slice(start,end+1)
}
console.log("Sub array",maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



const obj3={
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
}

function flattenObj(obj, prefix = '') {
    let result = {};
    
    for (let key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        
        if (typeof obj[key] === 'object') {
            // Recurse into nested object
            Object.assign(result, flattenObj(obj[key], newKey));
        } else {
            // Add leaf value
            result[newKey] = obj[key];
        }
    }
    
    return result;
}

console.log(flattenObj(obj3))


function firstUniqueChar(str) {
  // write logic
  let map=new Map();
  for(let char of str){
    map.set(char,(map.get(char)||0)+1)
  }
  for(let char of str){
    if(map.get(char)===1){
        return char
    }
  }
  return null
}

console.log(firstUniqueChar("aabbccde")); // d
console.log(firstUniqueChar("aabb")); // null


function deepEqual(obj1, obj2) {
  // write logic
  if(obj1===obj2) return true
  if(typeof obj1 !="object"  || typeof obj2 != "object" || obj1===null || obj2===null){
    return false
  }
  let key1=Object.keys(obj1)
  let key2=Object.keys(obj2)
  if(key1.length != key2.length) return false

  for(let key of key1){
    if(!key2.includes(key) || !deepEqual(obj1[key], obj2[key])){
        return false
    
    }
  }
  return true
}

console.log(deepEqual({a:1,b:{c:2}}, {a:1,b:{c:2}})); // true
console.log(deepEqual({a:1,b:{c:2}}, {a:1,b:{c:3}})); // false


function removeFalsy(arr) {
  // write logic
//   here i can loop as well like empty array wne push only truty vale in that new arry
  return arr.filter(Boolean)
}

console.log(removeFalsy([0,1,false,2,"",3,null,undefined]));
// [1,2,3]

function countFreq(arr) {
  // write logic
//   if order matter then i need to use map if not i can use reduce
    // return arr.reduce((acc,curr)=>{
    //     acc[curr]=(acc[curr]||0)+1
    //     return acc
    // },{})
    let map=new Map();
    for(let ch of arr){
        map.set(ch,(map.get(ch)||0)+1)
    }
    return Object.fromEntries(map)

}

console.log(countFreq(["a","b","a","c","b","a"]));
// { a:3, b:2, c:1 }

// arr.map(num,i,arr) on this basis we wil; craete polyfill
Array.prototype.myMap = function(cb) {
  // write logic
  let res=[];
  for(let i=0;i<this.length;i++){
    res.push(cb(this[i],i,this))
  }
  return res

};

console.log([1,2,3].myMap(x => x*2)); // [2,4,6]



function reverseWords(str) {
  // write logic
  const arr=str.split(/\s+/).map((word)=>word.split("").reverse().join("")).join(" ")
  return arr
}

console.log(reverseWords("I love javascript"));
// "I evol tpircsavaj"

function secondLargest(arr) {
  // write logic
  let max=-Infinity
    let smax=-Infinity

    for(let num of arr){
        if(num>max){
            smax=max
            max=num
           
        } else if(num<max && num>smax){
            smax=num
        }
    }
    return smax

}

console.log(secondLargest([10, 5, 20, 8])); // 10
console.log(secondLargest([1, 2, 3, 4]));   // 3


function findMissing(arr, n) {
  // write logic
  let set=new Set(arr)
  for(let i=1;i<=n;i++){
    if(!set.has(i)){
        return i
    }
  }
}

console.log(findMissing([1,2,4,5], 5)); // 3


function capitalizeWords(str) {
  // write logic
  return str.split(/\s+/).map((word)=>word[0].toUpperCase()+word.slice(1)).join(" ")
}

console.log(capitalizeWords("i love javascript"));
// "I Love Javascript"


function deepFlatten(arr) {
  // write logic
  let res=[]
  for(let num of arr){
    if(Array.isArray(num)){
        res.push(...deepFlatten(num))
    }else{
        res.push(num)
    }
  }
  return res
}

console.log(deepFlatten([1,[2,[3,[4]],5]]));
// [1,2,3,4,5]

function allUnique(str) {
  // write logic
}

console.log(allUnique("abc"));   // true
console.log(allUnique("aabc"));  // false

function maxSumSubarry(arr){
    let currSum=arr[0]
    let maxSum=arr[0]
    for(let i=1;i<arr.length;i++){
        currSum=Math.max(arr[i],currSum+arr[i])
        maxSum=Math.max(maxSum,currSum)
    }
    return maxSum
}
console.log(maxSumSubarry([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSumSubarry([1])    )
console.log(maxSumSubarry([-1,-2])  )

function allUnique(str) {
  // write logic
  let orgLen=str.length
  let set=new Set(str)
  return set.size===orgLen
}

console.log(allUnique("abc"));   // true
console.log(allUnique("aabc"));  // false


function chunkArray(arr, size) {
  // write logic
   const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

console.log(chunkArray([1,2,3,4,5], 2));
// [[1,2],[3,4],[5]]


function nonRepeatingSubstring(s) {   //imp
  let left=0
  let maxlen=0
  let set =new Set()
  for(let right=0;right<s.length;right++){
    while(set.has(s[right])){
        set.delete(s[left])
        left++
    }
    set.add(s[right])
    maxlen=Math.max(maxlen,right-left+1)
  }
  return maxlen
}
console.log("longest non repeating substring:", nonRepeatingSubstring("abcabcbb"));
