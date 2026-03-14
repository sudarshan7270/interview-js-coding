function countVowels(str) {
  // write logic here
  let arr=["a","e","i","o","u"]
  let set=new Set(arr)
  let count=0
  for(let ch of str){
    if(set.has(ch)){
        count++
    }
  }
  return count
}

console.log(countVowels("bajajfinserv")); // expected: 4


function reverseWords(sentence) {
  // write logic here
  return sentence.split(" ").map((word)=>word.split("").reverse().join("")).join(" ")
}

console.log(reverseWords("bajaj finserv interview"));
// expected: "jajab vresnif weivretni"

function firstUniqueChar(str) {
  // write logic here
  let map=new Map()
  for(let ch of str){
    map.set(ch,(map.get(ch)||0)+1)
  }
  for(let ch of str){
    if(map.get(ch)===1){
        return ch
    }
  }
}

console.log(firstUniqueChar("aabbccd")); // expected: "d"


function removeDuplicates(arr) {
  // write logic here
  return [...new Set(arr)]
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));
// expected: [1,2,3,4,5]

function flattenArray(arr) {
  // write logic here
  let res=[]
  for(let num of arr){
    if(Array.isArray(num)){
        for(let num1 of num){
            res.push(num1)
        }
    }else{
        res.push(num)
    }
  }
  return res
}

console.log(flattenArray([1, [2,3], [4,5], 6]));
// expected: [1,2,3,4,5,6]

function isPalindrome(str) {
  // write logic here
  let org=str.toLowerCase()
  let res=""
  for(let i=str.length-1;i>=0;i--){
    res=res+str[i].toLowerCase()
  }
  return res===org
}

console.log(isPalindrome("Madam")); // expected: true

function maxChar(str) {
  // write logic here
  let occur=str.split("").reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1
    return acc
  },{})
  let arrSort= Object.entries(occur).sort((a,b)=>b[1]-a[1]) // here if forst max wanted then i will use map forn frequcy and then sort found fisr max
  return arrSort[0][0]
}

console.log(maxChar("bajajfinserv"));
// expected: "a"

function sumNumbers(arr) {
  // write logic here
  let sum=0
  for(let num of arr){
    let temm=Number(num)
    if(temm && typeof temm==="number"){
        sum=temm+sum
    }
  }
  return sum
}

console.log(sumNumbers([1, "2", 3, "4", "a"]));
// expected: 10

function chunkArray(arr, size) {
  // write logic here
  let res=[]
  for(let i=0;i<arr.length;i=i+size){
    let temp=[]
    for(let j=i;j < i + size && j < arr.length;j++){
        temp.push(arr[j])
    }
    res.push(temp)
  }
  return res
}

console.log(chunkArray([1,2,3,4,5,6,7], 3));
// expected: [[1,2,3],[4,5,6],[7]]

function debounce(fn, delay) {
  // write logic here
  let timer;

  return function(...args){
    clearTimeout(timer)
    timer=setTimeout(()=>fn(...args),delay)
  }
}


// interviewer may ask logic, not execution

function longestSubStr(str){
  let set=new Set()
  let maxLen=0
  let left=0
  for(let i=0;i<str.length;i++){
    while(set.has(str[i])){
      set.delete(str[i])
      left++
    }
    set.add(str[i])
    maxLen=Math.max(maxLen,i-left+1)

  }
  return maxLen
}
console.log(longestSubStr("abcabcbb"))


let arr=[83,373,38,-444,828,-8888]

function longestSubSTrSum(arr){
  let maxSum=arr[0]
  let currSum=arr[0]
  for(let i=1;i<arr.length;i++){
    currSum=Math.max(arr[i],currSum+arr[i])
    maxSum=Math.max(currSum,maxSum)
  }
  return maxSum
}
console.log(longestSubSTrSum(arr))

function returnLongetsSubStrSum(arr){
  let max=arr[0]
  let currSum=arr[0]
  let tempStart=0
  let first=0
  let end=0
  for (let i=1;i<arr.length;i++){
    if(currSum+arr[i]<arr[i]){
      currSum=arr[i]
      tempStart=i
    }else{
      currSum=currSum+arr[i]
    }
    if(currSum>max){
      max=currSum
      first=tempStart
      end=i
    }

  }
  return arr.slice(first,end+1)

}
console.log(returnLongetsSubStrSum(arr))

function secondMax(arr){
  let fmax=-Infinity
  let smax=-Infinity
  for(let num of arr){
    if(num>fmax){
      smax=fmax
      fmax=num
    }else if(num<fmax && num>smax){
      smax=num
    }
  }
  return smax
}
console.log(secondMax(arr))

function anagram(arr){
  let map=new Map()
  for(let word of arr){
    let key=word.split("").sort().join("")
    if(!map.has(key)){
      map.set(key,[])
    }
    map.get(key).push(word)
  }
  let ang=Array.from(map.values())
  return ang
}
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]))

function isAngara(str,str2) {
  let map=new Map()
  if(str.length !== str2.length) return false

  for(let ch of str){
    map.set(ch,(map.get(ch)||0)+1)
  }
  for(let ch of str2){
    if(!map.has(ch)) return false
    if(map.has(ch)){
      map.set(ch,map.get(ch)-1)
      if(map.get(ch)===0){
        map.delete(ch)
      }
    }
  }
  return map.size===0
  
}
console.log(isAngara("eat", "tei"))

const apiCallWithre=async(url,retries=3)=>{
 
  try{
    const apiurl=await fetch(url)
    if(!apiurl.ok){
      throw new Error("retry")
    }
    const resp=await apiurl.json()
    console.log("state update with",resp)
    return resp
    
  }catch(err){
    if(retries===0){
      console.log("Something went wron")
      throw err
    }
    console.log(err)
    retries=retries+1
    return apiCallWithre(url,retries-1)
    
  }
}




function debounceFun(fn,delay){

  let timer;
  return function(...args){
    clearTimeout(timer)
    timer=setTimeout(()=>fn(...args),delay)
  }
}

function flattenObj(obj,prefix=""){
  let op={}
  for(let key in obj){
    let newKey=prefix===""?key:prefix+"."+key
    let val=obj[key]
    if(val && val!==null && typeof val==="object"){
      let recursiv=flattenObj(val,newKey)
       op={...op, ...recursiv}
    }else{
      op[newKey]=val
    }
  }
      return op

}

const nested = {
  user: {
    name: "John",
    address: {
      street: "123 Main St",
      city: "Mumbai"
    }
  },
  settings: {
    theme: "dark",
    count:[1,2]
  }
};


console.log(flattenObj(nested));

