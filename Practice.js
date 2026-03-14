let Input = "Hello World";

let revers = Input.split(/\s+/)
  .map((w) => w.split("").reverse().join(""))
  .join(" ");
console.log("Revers", revers);

let InputFalt = [1, [2, 3], 4, [5]];
// let flatIthFlat=InputFalt.flat(1);
// let flatIthFlat=InputFalt.flat(Infinity);
let flatIthFlat = InputFalt.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
console.log("Flatter", flatIthFlat);

// 3. Check for Palindrome

// Input: "madam"
// Output: true
let pal = "madam";

let Palindrome = pal.split("").reverse().join("");
let ispalindrome = pal === Palindrome;
console.log(" is Palindrome", ispalindrome);

let InputOccu = [1, 2, 3, 2, 4, 2, 5, 5, 5, 5, 5];

let occurFreq = InputOccu.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = +1;
  }
  return acc;
}, {});
console.log("Max occu", occurFreq);
let maxOccuerab = 0;
let resulet;

for (let key in occurFreq) {
  if (occurFreq[key] > maxOccuerab) {
    maxOccuerab = key;
    resulet = key;
  }
  // return resulet;
}
console.log("Max occu", resulet);

let duplictaeInput = [1, 2, 2, 3, 4, 4];

let uniqueArr = new Set(duplictaeInput);
console.log("Uniques", [...uniqueArr]);

let sum = 12345;
let allSum = sum
  .toString()
  .split("")
  .reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
console.log("Sum of all", allSum);

let captitalInput = "hello world";

let firstCap = captitalInput
  .split(/\s+/)
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");
console.log("First Cap", firstCap);

const twoAnagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};
console.log("is angream", twoAnagram("listen", "silent"));

let firnduplicate = [1, 2, 3, 2, 4, 4, 5];
let reduceFindOccu = firnduplicate.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(reduceFindOccu);
let duplicateArr = [];

for (let key in reduceFindOccu) {
  if (reduceFindOccu[key] > 1) {
    duplicateArr.push(Number(key));
  }
}
console.log(duplicateArr);

let longestInput = "React is powerful and extensible";

let longestWord = longestInput.split(/\s+/).reduce((acc, curr) => {
  if (acc.length < curr.length) {
    return curr;
  } else {
    return acc;
  }
}, "");
console.log("Longest WOr", longestWord);

let InputFalsyt = [0, "hello", false, "", 42, null, undefined];
let falsyFilter = InputFalsyt.filter(Boolean);
console.log(falsyFilter);

let vowelInput = "JavaScript is awesome";
let vowelArray = ["a", "e", "i", "o", "u"];
let count = 0;
let vowelinString = vowelInput
  .toLowerCase()
  .split("")
  .filter(Boolean)
  .reduce((acc, curr) => {
    if(vowelArray.includes(curr)){
        acc++
    }
    return acc;
  },0);
  console.log("vowels",vowelinString)

  let groupedInput= ["apple", "banana", "avocado", "cherry"];

  let group=groupedInput.reduce((acc,curr)=>{

    let firstLtter=curr[0];

    if(!acc[firstLtter]){
        acc[firstLtter]=[curr]
    }else{
        acc[firstLtter].push(curr)
    }
    return acc;

  },{})
    console.log("grouoed",group)

    for(let key in group){
    }

let  InputtoTitle= "hello world from react"

let titleCase=InputtoTitle.split(/\s+/).map((word)=>word[0].toUpperCase()+word.slice(1)).join(" ")
console.log("Splitted Arr",titleCase)

const arraySum=(arr)=>{
    return arr.reduce((acc,curr)=>{
        return Number(acc)+Number(curr)     
    },0)
}
console.log("Are two array smae", arraySum([1,2,3])===arraySum([3,2,1]))
// ([1,2,3,4,5], 2)

const chukedARraFunction=(arr,sizr)=>{
    const chunks=[];
    for (let i=0;i<arr.length;i+=sizr){
        let chunk=arr.slice(i,i+sizr)
        chunks.push(chunk)
    }
    return chunks
}
console.log("Chunk",chukedARraFunction([1,2,3,4,5], 4))

let str= "abc12xyz34";

let wordonly=str.match(/\d+/g)
console.log(wordonly)
let result=""

for(let i=1; i<=100;i++){
    if(i%3===0 && i%5===0  ){
         console.log("FizzBuzz");
    }else if (i%3===0){
         console.log("Fizz");

    }else if(i%5===0){
         console.log("Buzz");
    }else{
         console.log(i);
    }

}
console.log("suslete",result)


