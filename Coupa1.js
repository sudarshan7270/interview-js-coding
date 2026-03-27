function debounce(fn, delay) {

  // WRITE LOGIC HERE
  let timer;

  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }

}

const print = () => {
  console.log("API Called")
}

const debounced = debounce(print, 1000)

debounced()
debounced()
debounced()


const arr = [1, [2, [3, 4], 5]]

function flatten(arr) {

  // WRITE LOGIC HERE
  let res = []

  for (let num of arr) {
    if (Array.isArray(num)) {
      res.push(...flatten(num))
    } else {
      res.push(num)
    }
  }
  return res

}

console.log(flatten(arr))


const words = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAnagrams(words) {

  // WRITE LOGIC HERE
  let map = new Map()

  for (let word of words) {
    let key = word.split("").sort().join()
    if (!map.has(key)) {
      map.set(key, [])
    }
    map.get(key).push(word)
  }
  const arr = Array.from(map.values())
  return arr


}

console.log(groupAnagrams(words))

const nums = [2, 7, 11, 15]
const target = 9

function twoSum(nums, target) {

  // WRITE LOGIC HERE

  // if sorted
  // let left=0
  // let right=nums.length-1

  //   while(left<right){
  //     let sum=nums[left]+nums[right]
  //     if(sum===target){
  //         return [left,right]
  //     }else if(sum>target){
  //         right--
  //     }else{
  //         left++
  //     }
  //   }

  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let required = target - nums[i]
    if (map.has(required)) {
      return [map.get(required), i]
    }
    map.set(nums[i], i)
  }
  return null

}

const str = "abcaabcbb"

function longestSubstring(str) {

  // WRITE LOGIC HERE
  let set = new Set()
  let left = 0
  let maxLen = 0
  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left])
      left++
    }
    set.add(str[right])
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen

}

console.log(longestSubstring(str))

console.log(twoSum(nums, target))

const arr1 = [0, 1, 0, 3, 12]

function moveZeros(arr) {

  // WRITE LOGIC HERE
  //   let insetPos=0
  //   for(let i=0;i<arr.length;i++){
  //     if(arr[i]!==0){
  //         arr[insetPos]=arr[i]
  //         insetPos++
  //     }
  //   }
  //   while(insetPos<arr.length){
  //     arr[insetPos]=0
  //     insetPos++
  //   }
  //   return arr
  // front stable
  let insetPos = arr.length - 1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[insetPos] = arr[i]
      insetPos--
    }
  }
  while (insetPos >= 0) {
    arr[insetPos] = 0
    insetPos--
  }
  return arr



}

console.log(moveZeros(arr1))

function customPromiseAll(promises) {

  // WRITE LOGIC HERE

  return new Promise((resolve, reject) => {
    let resArr = []
    let completed = 0
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          resArr[i] = res
          completed++
          if (completed === promises.length) {
            resolve(resArr)
          }
        })
        .catch(reject)
    })
  })

}

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

customPromiseAll([p1, p2, p3])
  .then(res => console.log(res))

const obj = {
  name: "John",
  address: {
    city: "NY"
  }
}

function deepClone(obj) {

  // WRITE LOGIC HERE
  return JSON.parse(JSON.stringify(obj))

}

console.log(deepClone(obj))



const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSubArray(arr) {

  // WRITE LOGIC HERE
  //   let maxSum=arr[0]
  //   let currSum=arr[0]
  //   for(let num of arr){
  //     currSum=Math.max(currSum+num,num)
  //     maxSum=Math.max(currSum,maxSum)
  //   }

  //   return maxSum
  // if array
  let maxSum = arr[0]
  let currSum = arr[0]
  let start = 0
  let end = 0
  let tempStar = 0
  for (let i = 0; i < arr.length; i++) {
    if (currSum + arr[i] < arr[i]) {
      currSum = arr[i]
      tempStar = i
    } else {
      currSum = currSum + arr[i]
    }
    if (currSum > maxSum) {
      maxSum = currSum
      start = tempStar
      end = i
    }
  }
  return arr.slice(start, end + 1)
}

console.log(maxSubArray(arr2))

const str3 = "hello";

function reverseString(str) {

  // WRITE LOGIC HERE 
  let res = ""
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i]
  }
  return res

}

console.log(reverseString(str3));

const str2 = "madam";

function isPalindrome(str2) {

  // WRITE LOGIC HERE
  return reverseString(str2) === str2

}

console.log(isPalindrome(str2));

const str4 = "apple";

function charFrequency(str3) {

  // WRITE LOGIC HERE
  let map = new Map()
  for (let ch of str3) {
    map.set(ch, (map.get(ch) || 0) + 1)
  }
  return Object.fromEntries(map)

}

console.log(charFrequency(str4));

const str5 = "swiss";

function firstUniqueChar(str4) {

  // WRITE LOGIC HEREl
  let map = new Map()
  for (let ch of str4) {
    map.set(ch, (map.get(ch) || 0) + 1)

  }
  for (let ch of str4) {
    if (map.get(ch) === 1) {
      return ch
    }
  }
  return -1

}

console.log(firstUniqueChar(str5));

const str7 = "listen";
const str6 = "silent";

function isAnagram(str5, str6) {

  // WRITE LOGIC HERE
  function extractkey(str) {
    return str.split("").sort().join("")
  }
  return extractkey(str5) === extractkey(str6)

}

console.log(isAnagram(str7, str6));



function longestSubstringNew(str7) {

  // WRITE LOGIC HERE
  let set = new Set()
  let left = 0
  let maxlen = 0

  for (let right = 0; right < str7.length; right++) {
    while (set.has(str7[right])) {
      set.delete(str7[left])
      left++
    }
    set.add(str7[right])
    maxlen = Math.max(maxlen, right - left + 1)
  }
  return maxlen

}

console.log(longestSubstringNew(str));

const str8 = "programming";

function removeDuplicates(str) {

  // WRITE LOGIC HERE
  let uniq = new Set(str)
  let arr = [...uniq]
  return arr.join("")

}

console.log(removeDuplicates(str8));
const str9 = "hello world javascript";

function capitalizeWords(str) {

  // WRITE LOGIC HERE
  return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")



}

console.log(capitalizeWords(str9));

const str10 = "123456";

// 0-9 48-57

function isNumeric(str10) {

  // WRITE LOGIC HERE
  for (let ch of str10) {
    let asciiCode = ch.charCodeAt(0)
    console.log(asciiCode)
    if (asciiCode > 57 || asciiCode < 48) {
      return false
    }
  }
  return true

}

console.log(isNumeric(str10));

const str11 = "javascript";

let arrVowels = ["a", "e", "i", "o", "u"]

function countVowels(str11) {

  // WRITE LOGIC HERE
  let set = new Set(arrVowels)
  let count = 0

  for (let ch of str11) {
    if (set.has(ch)) {
      count++
    }
  }
  return count

}

console.log(countVowels(str11));

const arrA = [1, 2, 3, 2, 4, 1, 5];

function findDuplicates(arrA) {

  // WRITE LOGIC HERE
  let dupli = []
  let map = new Map()
  for (let num of arrA) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  console.log(map)
  for (let num of arrA) {
    if (map.get(num) >= 2) {
      dupli.push(num)
    }
  }
  return [...new Set(dupli)]


}

console.log(findDuplicates(arrA));




const objB1 = { a: 1, b: { c: 2 } };
const objB2 = { a: 1, b: { c: 2 } };

function deepEqual(objB1, objB2) {

  // WRITE LOGIC HERE

  if (objB1 === objB2) return true

  if (typeof objB1 !== "object" || typeof objB2 !== "object" || objB1 === null || objB2 === null) {
    return false
  }
  let key1 = Object.keys(objB1)
  let key2 = Object.keys(objB2)
  if (key1.length !== key2.length) return false

  for (let key of key1) {
    if (!deepEqual(objB1[key], objB2[key])) {
      return true
    }
  }


}

console.log(deepEqual(objB1, objB2));

function throttle(fn, delay) {

  // WRITE LOGIC HERE
  let lastCall = 0

  return function (...args) {
    let now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      fn(...args)
    }
  }

}

const logA = () => console.log("called");

const throttled = throttle(logA, 1000);

throttled();
throttled();
throttled();

const arrC1 = [1, 2, 3, 4];
const arrC2 = [3, 4, 5, 6];

function intersection(arrC1, arrC2) {

  // WRITE LOGIC HERE
  let set = new Set(arrC1)
  let res = []
  for (let num of arrC2) {
    if (set.has(num)) {
      res.push(num)
    }
  }
  return res

}

console.log(intersection(arrC1, arrC2));


const usersA = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

function sortByAge(usersA) {

  // WRITE LOGIC HERE
  return usersA.sort((a, b) => a.age - b.age)

}
const abc = sortByAge(usersA)

console.log(abc);


const arrD = [1, 3, 2, 3, 4, 3, 2];

function mostFrequent(arrD) {

  // WRITE LOGIC HERE


}

console.log(mostFrequent(arrD));

const objA = {
  user: {
    name: "John",
    address: {
      city: "NY"
    }
  }
};

function flattenObject(obj, prefix = "") {
  let result = {}
  for (let key in obj) {
    let newKey = prefix === "" ? key : prefix + "." + key
    let val = obj[key]
    if (val && val !== null && typeof val === "object") {
      let recursive = flattenObject(val, newKey)
      result = { ...result, ...recursive }
    } else {
      result[newKey] = val
    }
  }
  return result

}

console.log(flattenObject(objA)); //imp

const arrE = ["a", "b", "c"];

function arrayToObject(arrE) {

  // WRITE LOGIC HERE

  return arrE.reduce((acc, cuu, i) => {
    acc[cuu] = i
    return acc
  }, {})
}

console.log(arrayToObject(arrE));
// map(num,i,arr)

Array.prototype.customMap = function (callback) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}
console.log([1, 2, 3].customMap(x => x * 2))

// filter(num,i,arr)
Array.prototype.customFilet = function (callback) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i])
    }
  }
  return res
}

// reduce(acc,curr,i,arr)
console.log([1, 2, 3].customFilet(x => x % 2 === 0))

Array.prototype.customReduce = function (callback, initialVal) {

  let acc = initialVal

  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[i]
  }
  return acc

}


function isAnagramNew(s1, s2) {
  // logic
  let map = new Map()
  for (let ch of s1) {
    map.set(ch, (map.get(ch) || 0) + 1)
  }
  for (let ch of s2) {
    if (!map.has(ch)) return false
    map.set(ch, (map.get(ch) - 1))
    if (map.get(ch) === 0) {
      map.delete(ch)
    }
  }
  return map.size === 0
}
console.log(isAnagramNew("abc", "cba"))

function longestUniqueSubstring(str) {
  // logic
  let set = new Set()
  let left = 0
  let maxLen = 0

  for (let i = 0; i < str.length; i++) { // right
    while (set.has(str[i])) {
      set.delete(str[left])
      left++
    }
    set.add(str[i])
    maxLen = Math.max(maxLen, i - left + 1)
  }
  return maxLen
}
console.log(longestUniqueSubstring("abcabcbb"))

function removeDuplicateNwews(str) {
  // logic
  let arr = str.split("")
  return [...new Set(arr)].join("")
}
console.log(removeDuplicateNwews("programming"))


function capitalizeWordNews(str) {
  // logic
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
console.log(capitalizeWordNews("hello world"))


function isNumericNew(str) {
  // logic
  for (let ch of str) {
    let ascci = ch.charCodeAt(0)
    if (ascci <= 47 || ascci >= 58) {
      return false
    }
  }
  return true
}
console.log(isNumericNew("01112229["));


function chunkArray(arr, size) {
  // logic
  let res = []
  // for(let i=0;i<arr.length;i=i+size){
  //   let temp=[]
  //   for(let j=i;j<i+size && j<arr.length;j++){
  //     temp.push(arr[j])
  //   }
  //   res.push(temp)
  // }
  for (let i = 0; i < arr.length; i = i + size) {
    res.push(arr.slice(i, i + size))
  }
  return res

}


const arr7 = [1, 2, 3, 4, 5, 6, 7, 8];
const k1 = 3;

console.log(chunkArray(arr7, k1));


function mostFrequentNew(arr) {
  // logic
  let map = new Map()
  let max=0
  let res=null
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1)
    if(map.get(num)>max){
      max=map.get(num)
      res=num
    }
  }
  return res
  // let arrnewSorted = Array.from(map).sort((a, b) => b[1] - a[1])

  // for (let [key, val] of arrnewSorted) {
  //   return key
  // }
}
console.log(mostFrequentNew([1, 2, 2, 3, 6, 6, 6, 6, 6, 2]))


function deepEqualNew(obj1, obj2) {
  // logic
  if (obj1 === obj2) return true
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return false
  }
  let key1 = Object.keys(obj1)
  let key2 = Object.keys(obj2)
  if (key1.length !== key2.length) return false

  for (let key in obj1) {
    if (!key2.includes(key) || !deepEqualNew(obj1[key],obj2[key])) {
      return false
    }
  }

  return true
}
console.log(deepEqualNew(objB1, objB2));


function throttle(fn, delay) {
  // logic
  let lastCall = 0
  return function (...args) {
    let now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      fn(...args)
    }
  }
}

function customPromiseAll(promises) {
  // logic

  return new Promise((resolve,reject)=>{
    if(promises.length===0){
      return resolve([])
    }
    let result=[]
      let completed=0
    promises.forEach((p,i)=>{
       Promise.resolve(p).then((res)=>{
        result[i]=res
        completed++
        if(completed===promises.length){
          resolve(result)
        }
       }).catch(reject)
    })
  }) 
}

function fltObj(obj,prefix=""){
  let res={}
  for(let key in obj){
    let newKey=prefix===""?key:prefix+"."+key
    let val=obj[key]
    if(val && val !==null && typeof val==="object"){
      let recursive=fltObj(val,newKey)
      res={...res,...recursive}
    }else{
      res[newKey]=val
    }
  }
  return res
}
console.log(fltObj(objA))

function groupBy(arr, key){

  // WRITE LOGIC HERE
  const reduceFor=arr.reduce((acc,curr)=>{
    let groupedKey=curr[key]
    if(!acc[groupedKey]){
     
    acc[groupedKey]=[]
    }
    acc[groupedKey].push(curr)
    
    return acc
  },{})
  return reduceFor

}

const users = [
  {age:20, name:"John"},
  {age:30, name:"Alice"},
  {age:20, name:"Bob"},
  {age:40, name:"David"},
  {age:30, name:"Eve"}
];

console.log(groupBy(users,"age"));



function groupByAdvanced(arr, fn){

  // WRITE LOGIC HERE
  return arr.reduce((acc,curr)=>{
    let groupKey=fn(curr)
    if(!acc[groupKey]){
      acc[groupKey]=[]
    }
    acc[groupKey].push(curr)
    return acc
  },{})

}

const nums1 = [6.1, 4.2, 6.3];

console.log(groupByAdvanced(nums1, Math.floor));


// if not obj return as it
// if array retu array
// if obj crete new obj
// recuricsie copy

function deepClone(obj) {

  // WRITE LOGIC HERE
  if(obj===null || typeof obj!=="object"){
    return obj
  }
  let clone=Array.isArray(obj)?[]:{}

  for(let key in obj){
    clone[key]=deepClone(obj[key  ])
  }

  return clone
}

console.log(deepClone(obj))

function deepCloneNew1(obj){
  // your code

  if(obj===null || typeof obj!=="object"){
    return obj
  }
  let clone=Array.isArray(obj)?[]:{}
  for(let key in obj){
    clone[key]=deepCloneNew1(obj[key])
  }

  return clone
}

const original = {
  name:"John",
  address:{city:"NY"},
  arr:[1,2,{x:10}]
}

const copy = deepCloneNew1(original)

copy.address.city = "LA"

console.log(original.address.city)

function isValid(str){
  let stack=[]
  let map={
  ")":"(",
  "]":"[",
  "}":"{"
  }

  for(let ch of str){
    if(ch==="(" || ch==="[" || ch==="{"){
      stack.push(ch)
    }else{
      if(stack.pop()!==map[ch]){
        return false
      }

    }
  }
  return stack.length===0

}


const str1 = "[()]{[]{}}"



console.log(isValid(str1))

const initialize = once(() => console.log("init"))
const initialize1 = once(() => console.log("inita"))


initialize()
initialize()
initialize()
initialize1()
initialize1()


function once(fn){
  let called=false
  return function (...args){
    if(!called){
      called=true
      return fn.call(this,...args)
    }
  }
}


function performUltraDeepStructuredCloneOperationForNestedObjects(inputObject){
  

}

const deepCloneInputObjectExample = {
  name: "JS",
  address: {
    city: "Pune",
    meta: { zip: 411001 }
  }
}


console.log(
  performUltraDeepStructuredCloneOperationForNestedObjects(
    deepCloneInputObjectExample
  )
)

function cloneDeepObjX(inputObject){
  if(typeof inputObject !=="object" || inputObject===null){
    return inputObject
  }
  let clone=Array.isArray(inputObject)?[]:{}
  for(let key in inputObject){
    clone[key]=performUltraDeepStructuredCloneOperationForNestedObjects(inputObject[key])
  }
  return clone
    
}

console.log(
cloneDeepObjX(
{a:1,b:{c:2}}
,)
)

console.log(
cloneDeepObjX(
{user:{name:"JS",city:"Pune"}}
,)
)

function replicateStructure(inputObject){
 if(typeof inputObject !=="object" || inputObject===null){
    return inputObject
  }
  let clone=Array.isArray(inputObject)?[]:{}
  for(let key in inputObject){
    clone[key]=replicateStructure(inputObject[key])
  }
  return clone
}

const profile = {
  name: "Sudarshan",
  skills: ["JS","React"],
  address: {
    city: "Pune",
    pin: 411001
  }
}

const clonedProfile = replicateStructure(profile)

console.log("Original:", profile)
console.log("Cloned:", clonedProfile)


function synchronizePromises(promises){

  return new Promise((resolve,reject)=>{
    let result=[]
    let completed=0
    promises.forEach((p,i)=>{
      Promise.resolve(p).then((res)=>{
        result[i]=res
        completed++
        if(completed===promises.length){
          resolve(result)
        }
      }).catch(err=>reject(err))
    })
  })

}

const p11 = Promise.resolve(10)
const p22 = new Promise(res => setTimeout(()=>res(20),500))
const p33 = Promise.resolve(30)

synchronizePromises([p11,p22,p33])
.then(result=>{
  console.log("Promise results:", result)
})
.catch(err=>{
  console.log("Error:", err)
})

function compressObjectTree(obj, prefix=""){
  let res={}
  for(let key in obj){
    let newKey=prefix===""?key:prefix+"."+key
    let val=obj[key]
    if(val && val!==null && typeof val==="object"){
      let recursive=compressObjectTree(val,newKey)
      res={...res,...recursive}
    }else{
      res[newKey]=val
    }
  }
  return res

}

const nestedData = {
  user:{
    name:"Alex",
    contact:{
      email:"alex@mail.com"
    }
  }
}

const flatResult = compressObjectTree(nestedData)

console.log("Flattened Object:", flatResult)


function scanUniqueSubstring(str){

  let maxLen=0;
  let set =new Set()
  let left=0
  for(let right=0;right<str.length;right++){
    while(set.has(str[right])){
      set.delete(str[left])
      left++
    }
    set.add(str[right])
    maxLen=Math.max(maxLen,right-left+1)
  }
  return maxLen

}

const text = "abcabcbb"

const longest = scanUniqueSubstring(text)

console.log("Longest unique substring length:", longest)


function locateMaxSumWindow(arr){

  // let max=arr[0]
  // let currmax=arr[0]
  // let start=0
  // let end=0
  // let tempStart=0
// max sum
  // for(let num of arr){
  //   currmax=Math.max(currmax+num,num)
  //   max=Math.max(currmax,max)
  // }
  // return max


// max sum sub array
  // for(let i=1;i<arr.length;i++){
  //   if(currmax+arr[i]<arr[i]){
  //     currmax=arr[i]
  //     tempStart=i
  //   }else{
  //     currmax=currmax+arr[i]
  //   }
  //   if(currmax>max){
  //     max=currmax
  //     start=tempStart
  //     end=i
  //   }
  // }
  // return arr.slice(start,end+1)

  // secondMax
  // let fmax=-Infinity
  // let smax=-Infinity
  // for(let num of arr){
  //   if(num>fmax){
  //     smax=fmax
  //     fmax=num
  //   }else if(fmax>num && num>smax){
  //     smax=num

  //   }
  // }
  // return smax


}

const values = [-2,1,-3,4,-1,2,1,-5,4]

const maxSum = locateMaxSumWindow(values)

console.log("Maximum Subarray Sum:", maxSum)


function distillUniqueRecords(arr, key){

  return arr.reduce((acc,curr)=>{
    let groupedkey=curr[key]
    if(!acc[groupedkey]){
      acc[groupedkey]=[]
    }
    acc[groupedkey].push(curr)
    return acc
  },{})

}

const users1 = [
  {id:1,name:"A"},
  {id:2,name:"B"},
  {id:1,name:"A"},
  {id:3,name:"C"}
]

const uniqueUsers = distillUniqueRecords(users1,"id")

console.log("Unique Users:", uniqueUsers)


function clusterEntitiesBy(arr,key){
  return arr.reduce((acc,curr)=>{
    let group=curr[key]
    if(!acc[group]){
      acc[group]=[]
    }
    acc[group].push(curr)
    return acc
  },{})

}

const employees = [
  {dept:"IT",name:"A"},
  {dept:"HR",name:"B"},
  {dept:"IT",name:"C"}
]

const grouped = clusterEntitiesBy(employees,"dept")

console.log("Grouped:", grouped)


function spinSequence(arr, k){

  function revArr(arr,left,right){
    while(left<right){
      let temp=arr[left]
      arr[left]=arr[right]
      arr[right]=temp
      left++
      right--
    }
    return arr
  }
  revArr(arr,0,arr.length-1)
    revArr(arr,0,k-1)
  revArr(arr,k,arr.length-1)
  return arr


}

const list = [1,2,3,4,5,6,7]

const rotated = spinSequence(list,3)

console.log("Rotated Array:", rotated)



function outer(){
  let counter=0
  return function (){
    counter++
    console.log(counter)
  }
}
const counet=outer()
counet()
counet()
counet()

// Function.prototype.customCall=function(context={}){
//   if()
// }