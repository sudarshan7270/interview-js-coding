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
    let set=new Set()
    let left=0
    let maxLen=0
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
    let insetPos=arr.length-1
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]!==0){
            arr[insetPos]=arr[i]
            insetPos--
        }
    }
    while(insetPos>=0){
        arr[insetPos]=0
        insetPos--
    }
    return arr

    

}

console.log(moveZeros(arr1))

function customPromiseAll(promises){

  // WRITE LOGIC HERE

return new Promise((resolve,reject)=>{
    let resArr=[]
    let completed=0
     promises.forEach((p,i)=>{
        Promise.resolve(p)
        .then((res)=>{
            resArr[i]=res
            completed++
            if(completed===promises.length){
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

customPromiseAll([p1,p2,p3])
.then(res => console.log(res))

const obj = {
  name:"John",
  address:{
    city:"NY"
  }
}

function deepClone(obj){

  // WRITE LOGIC HERE
  return JSON.parse(JSON.stringify(obj))

}

console.log(deepClone(obj))


const str1 = "()[]{}"

function isValid(str){

  // WRITE LOGIC HERE

}

console.log(isValid(str1))

const arr2 = [-2,1,-3,4,-1,2,1,-5,4]

function maxSubArray(arr){

  // WRITE LOGIC HERE
//   let maxSum=arr[0]
//   let currSum=arr[0]
//   for(let num of arr){
//     currSum=Math.max(currSum+num,num)
//     maxSum=Math.max(currSum,maxSum)
//   }

//   return maxSum
// if array
let maxSum=arr[0]
let currSum=arr[0]
let start=0
let end=0
let tempStar=0
for(let i=0;i<arr.length;i++){
    if(currSum+arr[i]<arr[i]){
        currSum=arr[i]
        tempStar=i
    }else{
        currSum=currSum+arr[i]
    }
    if(currSum>maxSum){
        maxSum=currSum
        start=tempStar
        end=i
    }
}
return arr.slice(start,end+1)
}

console.log(maxSubArray(arr2))

const str3 = "hello";

function reverseString(str){

  // WRITE LOGIC HERE 
  let res=""
  for(let i=str.length-1;i>=0;i--){
    res=res+str[i]
  }
  return res

}

console.log(reverseString(str3));

const str2 = "madam";

function isPalindrome(str2){

  // WRITE LOGIC HERE
  return reverseString(str2)===str2

}

console.log(isPalindrome(str2));

const str4 = "apple";

function charFrequency(str3){

  // WRITE LOGIC HERE
  let map=new Map()
  for(let ch of str3){
    map.set(ch,(map.get(ch)||0)+1)
  }
  return Object.fromEntries(map)

}

console.log(charFrequency(str4));

const str5 = "swiss";

function firstUniqueChar(str4){

  // WRITE LOGIC HEREl
  let map=new Map()
  for(let ch of str4){
        map.set(ch,(map.get(ch)||0)+1)

  }
  for(let ch of str4){
    if(map.get(ch)===1){
        return ch
    }
  }
  return -1

}

console.log(firstUniqueChar(str5));

const str7 = "listen";
const str6 = "silent";

function isAnagram(str5,str6){

  // WRITE LOGIC HERE
  function extractkey(str){
    return str.split("").sort().join("")
  }
  return extractkey(str5)===extractkey(str6)

}

console.log(isAnagram(str7,str6));



function longestSubstringNew(str7){

  // WRITE LOGIC HERE
  let set=new Set()
  let left=0
  let maxlen=0
  
  for(let right=0;right<str7.length;right++){
    while(set.has(str7[right])){
        set.delete(str7[left])
        left++
    }
    set.add(str7[right])
    maxlen=Math.max(maxlen,right-left+1)
  }
  return maxlen

}

console.log(longestSubstringNew(str));

const str8 = "programming";

function removeDuplicates(str){

  // WRITE LOGIC HERE
  let uniq=new Set(str)
  let arr=[...uniq]
  return arr.join("")

}

console.log(removeDuplicates(str8));
const str9 = "hello world javascript";

function capitalizeWords(str){

  // WRITE LOGIC HERE
  return str.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1)).join(" ")



}

console.log(capitalizeWords(str9));

const str10 = "123456";

// 0-9 48-57

function isNumeric(str10){

  // WRITE LOGIC HERE
  for(let ch of str10){
    let asciiCode=ch.charCodeAt(0)
    console.log(asciiCode)
    if(asciiCode >57 || asciiCode <48){
        return false
    }
  }
  return true

}

console.log(isNumeric(str10));

const str11 = "javascript";

let arrVowels=["a","e","i","o","u"]

function countVowels(str11){

  // WRITE LOGIC HERE
  let set=new Set(arrVowels)
  let count=0

  for(let ch of str11){
    if(set.has(ch)){
        count++
    }
  }
  return count

}

console.log(countVowels(str11));

const arrA = [1,2,3,2,4,1,5];

function findDuplicates(arrA){

  // WRITE LOGIC HERE
  let dupli=[]
  let map=new Map()
  for(let num of arrA){
    map.set(num,(map.get(num)||0)+1)
  }
  console.log(map)
  for(let num of arrA){
    if(map.get(num)>=2){
        dupli.push(num)
    }
  }
  return  [...new Set(dupli)]
  

}

console.log(findDuplicates(arrA));

const arrB = [1,2,3,4,5,6,7,8];
const k1 = 3;

function chunkArray(arrB,k1){

  // WRITE LOGIC HERE

}

console.log(chunkArray(arrB,k1));

const objA = {
  user:{
    name:"John",
    address:{
      city:"NY"
    }
  }
};

function flattenObject(objA){

  // WRITE LOGIC HERE
  return Object.entries(objA).reduce((acc,curr)=>{
    return acc
  },{})

}

console.log(flattenObject(objA));

const objB1 = {a:1,b:{c:2}};
const objB2 = {a:1,b:{c:2}};

function deepEqual(objB1,objB2){

  // WRITE LOGIC HERE

  if(objB1===objB2) return true

  if(typeof objB1 !=="object" || typeof objB2!=="object" || objB1===null || objB2 ===null){
    return false
  }
  let key1=Object.keys(objB1)
  let key2=Object.keys(objB2)
  if(key1.length!==key2.length) return false

  for(let key of key1){
    if(!deepEqual(objB1[key] , objB2[key])){
      return true
    }
  }


}

console.log(deepEqual(objB1,objB2));

function throttle(fn,delay){

  // WRITE LOGIC HERE

}

const logA = () => console.log("called");

const throttled = throttle(logA,1000);

throttled();
throttled();
throttled();