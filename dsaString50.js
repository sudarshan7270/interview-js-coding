function reverseString(str) {
    let res="";
    for(let i=str.length-1;i>=0;i--){
        res=res+str[i]
    }
    // let revSTr=str.split("").reverse().join("")
    return res
}

console.log(reverseString("hello")); // "olleh"


function isPalindrome(str) {
  // write your code
  let org=str
  return reverseString(str)===org
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


function countVowels(str) {
  // write your code
  let vowelsArray=["a","e","i","o","u"]
  let set=new Set(vowelsArray)
  let count=0;
  for(let i=0;i<str.length;i++){
    // if(set.has(str[i].toLowerCase())) count++ // optimised 
    if(vowelsArray.includes(str[i].toLowerCase())){
        count++
    }
  }

  return count
}

console.log(countVowels("javascript")); // 3


function toUpper(str) {
  // write your code
  let res=""
  for(let i=0;i<str.length;i++){
    let charCodeVal=str[i].charCodeAt()
    if(charCodeVal >=97 && charCodeVal<=122){
        res=res+String.fromCharCode(charCodeVal-32)
    }else{
        res=res+str[i]
    }

  }
//   let upper=str.split("").map(char=>char.toUpperCase()).join("")
  return res
}


console.log(toUpper("hellHo")); // "HELLO"

let str="Sudarshan"

console.log(str.charCodeAt(0))

// to convert forn number to chate use FromCharCode

console.log(String.fromCharCode(65))


function firstUniqueChar(str) {
  // write your code
  let map=new Map();
  for(let i=0;i<str.length;i++){
    let val=(map.get(str[i])||0)+1
    map.set(str[i],val)
  }

  for(let char of str){
    if(map.get(char)===1){
        return char

    }
  }
}

console.log(firstUniqueChar("aabbccd")); // "d"

function charFrequency(str) {
  // write your code
//   here map also usable like above as map  logic alredy build now brush reduce as well
  let charCount=Array.from(str).reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1
    return acc
  },{})
  return charCount
}

console.log(charFrequency("aab")); // { a: 2, b: 1 }

function removeDuplicates(str) {
  // write your code
  let struniqueArray=[...new Set(str)]
  return struniqueArray.join("")

}

console.log(removeDuplicates("aabbcc")); // "abc"

function isAnagram(str1, str2) {
  // write your code
  const revWord=(str)=>{
    let angram=str.split("").sort().join("")
    return angram
  }
  return revWord(str1)===revWord(str2)
}

console.log(isAnagram("listen", "silent")); // true

function capitalizeWords(str) {
  // write your code
//   here ascii can be used
  let toCamalcase=str.split(/\s+/).map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
  return toCamalcase

}

console.log(capitalizeWords("hello world")); // "Hello World"




// 10 no que is double

function longestWord(str) {
  // write your code
  let maxlen=0;
  let  maxLenWord=""
  let mapOnStr=str.split(/\s+/).forEach(word => {
    let wordlen=word.length;
    if(maxlen<wordlen){
        maxlen=wordlen
        maxLenWord=word
    } 
  });
//   with reduce
let maxLenWordWithReduce=str.split(/\s+/).reduce((acc,curr)=>{
    let answer=curr.length>acc.length? curr:acc
    return answer
    
},"")
  return maxLenWordWithReduce;
}

console.log(longestWord("I love javascript")); // "javascript"

function reverseWords(str) {
  // write your code
  let rev=str.split(/\s+/).reverse().join(" ")
  return rev
}

console.log(reverseWords("hello world")); // "world hello"

function isNumeric(str) {
  // write your code
  for(let i=0;i<str.length;i++){
    let asciiVal=str[i].charCodeAt()
    if(asciiVal >=65 && asciiVal<=122){
        return false
    }

  }
  return true
}

console.log(isNumeric("12345")); // true
console.log(isNumeric("12a45")); // false

console.log("1".charCodeAt())

function removeSpaces(str) {
  // write your code
  return withoutSpace=str.split(/\s+/).join("")
}

console.log(removeSpaces("hello world")); // "helloworld"


function findIndex(str, char) {
  // write your code
  for(let i=0;i<str.length;i++){
    if(str[i]===char){
        return i
    }

  } return -1
}

console.log(findIndex("hello", "e")); // 1

function replaceSpaces(str) {
  // write your code
  return str.split(/\s+/).join("-")
}

console.log(replaceSpaces("hello world js")); // "hello-world-js"


function countUppercase(str) {
  // write your code
  let upperCaseCount=0
  for(let i=0;i<str.length;i++){
    let asciiVal=str[i].charCodeAt()
    if(asciiVal>=65 && asciiVal <=90){
        upperCaseCount++
    }
  }
  return upperCaseCount
}

console.log(countUppercase("HeLLLo")); // 3




function truncate(str, length) {
  // write your code

  return  trucnted=str.slice(0,length)
}

console.log(truncate("javascript", 4)); // "java"


function containsSubstring(str, sub) {
  // write your code
  let splited=str.split("").join(",")+","+str.split("").join(",")
  return splited.includes(sub.split("").join(","))
}

console.log(containsSubstring("javascript", "scriptm")); // true

function repeatString(str, times) {
  // write your code
  let res="";
  for(i=0;i<times;i++){
    res+=str

  }
  return res
}

console.log(repeatString("a", 3)); // "aaa"

function swapCase(str) {
  // write your code
  let res="";
  for(let i=0;i<str.length;i++){
    let asciiVal=str[i].charCodeAt();
    if(asciiVal>=65 && asciiVal<=90){
        res=res+str[i].toLowerCase()
    }else{
        res=res+str[i].toUpperCase()
    }

  }
  return res
}

console.log(swapCase("HeLLO")); // "hEllO"

function removeSpecialChars(str) {
  // write your code
  let res=""
  for(let i=0;i<str.length;i++){
    let ascval=str[i].charCodeAt(); //92
    if((ascval >=65 && ascval<=90) || (ascval>=97 && ascval<=122)){
        res+=str[i]

    }
  }
  return res
}

console.log(removeSpecialChars("((he@llo#*****")); // "hello"

function countChar(str, char) {
  // write your code
  let count=0
  for(let i=0;i<str.length;i++){
    if(str[i]===char){
        count++

    }
  }
  return count
}

console.log(countChar("hello", "l")); // 2

function lastChar(str) {
  // write your code
  return str[str.length-1]
}

console.log(lastChar("hello")); // "o"

function stringLength(str) {
  // write your code
  let count=0;
  for(let i=0;i<str.length;i++){
    count++
  }
  return count
}

console.log(stringLength("hello")); // 5








