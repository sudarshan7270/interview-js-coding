const sentence = "The quick brown fox jumps over the lazy dog";

const output = sentence.split(/\s+/).reduce((acc, curr) => {
  return curr.length > acc.length ? curr : acc;
}, "");
console.log("Longest word", output);

const nums = [1, 2, 2, 3, 5, 4, 4, 5];
const uniqueNoArray = nums.filter((val, index) => nums.indexOf(val) === index);
console.log("Unique Array", uniqueNoArray);

const sentc = "hello world from js";

const firstUpper = sentc
  .split(/\s+/)
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log("to uppercaer", firstUpper);

const arrMao = [1, 2, 2, 3, 3, 3];

const frequencyMap = arrMao.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log("Frequency object", frequencyMap);

let str = "pop";
const reverseString = () => {
  let array = str.split("");
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr.join("");
};
console.log("Revers STring", reverseString(str));

const maxFromArr = [1, 7, 3, 9, 5].reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, 0);
console.log("Max from arr", maxFromArr);

const removeDulicatefrom = [1, 2, 2, 3, 4, 4, 5];

const unique = removeDulicatefrom.filter(
  (val, index) => removeDulicatefrom.indexOf(val) === index
);
console.log("Unique array", unique);

let sents = "JavaScript is awesome";
const arrayofletter = sents
  .split("")
  .filter(Boolean)
  .filter((char) => char !== " ");
console.log("splsietedarray", arrayofletter);

const vowelsArray = ["a", "e", "i", "o", "u"];

const vowelCount = arrayofletter.reduce((count, vowel) => {
  if (vowelsArray.includes(vowel)) {
    count++;
  }

  return count;
}, 0);

console.log("Vowel count", vowelCount);

let snets = "hello World";
let outputNew = snets
  .split(/\s+/)
  .map((word) => word.split("").reverse().join(""))
  .join(" ");
console.log("Revere strieneg", outputNew);

// You need to add the return keyword inside your normalize arrow function {}: i iw ato to add if idonet donet add {{}} it simpel retun value

const isAnagram = (str1, str2) => {
  const normalize = (str) => {
    return str.toLowerCase().split("").sort().join("");
  };
  return normalize(str1) === normalize(str2);
};
console.log("Check anagra", isAnagram("Silent", "listen"));

let steCouetOcc = "banana";
let arraccoum = steCouetOcc.split("").reduce((outPot, charc) => {
  if (outPot[charc]) {
    outPot[charc] = outPot[charc] + 1;
  } else {
    outPot[charc] = 1;
  }
  return outPot;
}, {});

// with loop
let emptyObjStor = {};
for (let char of steCouetOcc) {
  if (emptyObjStor[char]) {
    emptyObjStor[char] = emptyObjStor[char] + 1;
  } else {
    emptyObjStor[char] = 1;
  }
}
console.log("Checking", arraccoum);
console.log("Checking", emptyObjStor);

function secondLargest(arr) {
  const uniqurArr = [...new Set(arr)].sort((a, b) => b - a);
  return uniqurArr[1];
}

console.log(secondLargest([10, 5, 8, 12, 7, 715, 7])); // 10

const moveZeros = (arr) => {
  const nonZeros = arr.filter((n) => n !== 0);
  const zeros = arr.filter((n) => n === 0);
  return [...nonZeros, ...zeros];
};

console.log(moveZeros([0, 1, 0, 3, 0, 5])); // [1, 3, 5, 0, 0, 0]

let newSentc = "hello world test";
// outPut= helloWorldTest

const newSentcn = "hello world test";

const arrOfCamel = newSentcn
  .split(/\s+/)
  .map((word, index) => {
    if (index === 0) {
      return word.toLowerCase()
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
  })
  .join("")
console.log("ne warrayaa", arrOfCamel);




