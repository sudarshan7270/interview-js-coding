function reverseString(str) {
  // write logic
  let rev=""
  for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i]
  }
  return rev

}

console.log(reverseString("hello"));
console.log(reverseString("javascript"));


function isPalindrome(str) {
  // write logic
  return reverseString(str) ===str
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

let vowelArr=["a","e","i","o","u"]
function countVowels(str) {
  // write logic
  let count=0;
  let set=new Set(vowelArr)

  for (let ch of str){
    if(set.has(ch)){
        count++
    }
  }
  return count
}

console.log(countVowels("javascript")); // 3
console.log(countVowels("aeiou"));      // 5


function firstUniqueChar(str) {
  // write logic
  let map=new Map()
  for(let ch of str){
    map.set(ch,(map.get(ch)||0)+1)
  }
  for(let ch of str){
    if(map.get(ch)===1){
        return ch
    }
  }
  return null
}

console.log(firstUniqueChar("aabbcde")); // "c"
console.log(firstUniqueChar("aabb"));    // null


function isAnagram(str1, str2) {
  // write logic
  let map=new Map();
  for(let ch of str1){
    map.set(ch,(map.get(ch)||0)+1)
  }
  for(let ch of str2){
    map.set(ch,(map.get(ch))-1)
    if(map.get(ch)===0){
        map.delete(ch)
    }
  }
  return map.size===0 // here we can sort join but caus nlon compleicty
  

}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


function removeDuplicates(str) {
  // write logic
  return [...new Set(str)].join("")
}

console.log(removeDuplicates("aabbcc")); // "abc"
console.log(removeDuplicates("banana")); // "ban"

function longestWord(sentence) {
  // write logic
  let arr=sentence.split(" ")
  let wordMax=arr[0]
  for(let word of arr){
    if(wordMax.length<word.length){
        wordMax=word
    }
  }
  return wordMax
}

console.log(longestWord("I love javascript very much")); // "javascript"
console.log(longestWord("React is fast"));               // "React"

function capitalizeWords(str) {
  // write logic
  const captitalFirst=str.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1)).join(" ")
  return captitalFirst
}

console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("js is fun"));   // "Js Is Fun"
// console.log("s".charCodeAt()-26)


function compressString(str) {
  // write logic
  let map=new Map()
  for(let ch of str){
    map.set(ch,(map.get(ch)||0)+1)
  }
  let res=""
  for(ch of str){
    let val=map.get(ch)
    res=res+(res+val)
  }
  return res
}

console.log(compressString("aaabb"));   // "a3b2"
console.log(compressString("abcd"));    // "a1b1c1d1"


function isRotation(str1, str2) {
  // write logic
  if(str1.length !== str2.length) return false
  let set=new Set(str1)
  for(let ch of str2){
    if(!set.has(ch)){
        return false
    }
  }
  return true
}

console.log(isRotation("abcd", "cdab")); // true
console.log(isRotation("abcd", "acbd")); // false