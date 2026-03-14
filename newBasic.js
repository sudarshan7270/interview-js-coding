function isAnagram(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log("is anagram", isAnagram("listen", "silent"));

function charFrequency(str) {
  let frq = {};
  for (let char of str) {
    if (frq[char]) {
      frq[char] = frq[char] + 1;
    } else {
      frq[char] = 1;
    }
  }
  return frq;
}
let strI = "banana";
const withRedice = strI.split("").reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log("is anagram", withRedice);

// Input: [1, 2, 4, 6, 10], target = 12

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}
let arr = [18, 373, 8, 9, 88, 9];
let sotedaarr = [...new Set(arr.sort())];
let index = sotedaarr.length - 2;
console.log("2nd max", sotedaarr[index]);

function twwMidSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let resulet = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      resulet = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return resulet;
}
console.log("occur", twwMidSorted([1, 2, 2, 2, 3], 2));

function findDuplicates(arr) {
  let map = {};
  let duplicate = [];
  let unique = [];

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let key in map) {
    let number = Number(key);
    let count = map[key];
    if (count >= 2) {
      duplicate.push(key);
    } else {
      unique.push(key);
    }
  }

  return { duplicate: duplicate, unique: unique };
}
const result = findDuplicates([4, 3, 2, 7, 8, 2, 8, 3, 1]);

console.log("Duplicate array:", result.duplicate);
console.log("Unique array:", result.unique);

function findDuplicates(arr) {
  let mapStoerCount = {};
  let dulicate = [];
  for (let num of arr) {
    mapStoerCount[num] = (mapStoerCount[num] || 0) + 1;
  }
  for (let key in mapStoerCount) {
    let numberKey = Number(key);
    let count = mapStoerCount[key];
    if (count >= 2) {
      dulicate.push(numberKey);
    }
  }
  return dulicate;
}
console.log("Duplicate :", findDuplicates([4, 3, 2, 7, 8, 2, 8, 3, 1]));

const vowels = "aeiou";
let arrayofletter = "Sudarshan".split("");

const vowelCount = arrayofletter.reduce((count, vowel) => {
  if (vowels.includes(vowel)) {
    count++;
  }

  return count;
}, 0);

console.log("Vowel count", vowelCount);

let Input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const anagraea = () => {
  let map = new Map();
  for (let word of Input) {
    let keyForWords = word.split("").sort().join("");
    if (!map.has(keyForWords)) {
      map.set(keyForWords, []);
    }
    map.get(keyForWords).push(word);
  }
  return Array.from(map.values());
};

let newarrr = anagraea(Input);
console.log("Anagram", newarrr);

let arrnew = [1, 2, 3, 4, 5, 6, 67, 7];

const binarySerachALgo = (arr, target, left, right) => {
  if(!left){
    left=0
  }
 if(!right){
  right=arr.length-1
 }
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
     return binarySerachALgo(arr, target,mid + 1,right)
    } else {
       return  binarySerachALgo(arr, target,left,mid-1)
  }
};
console.log("find",binarySerachALgo(arrnew.sort((a,b)=>a-b),67))
let newarsmsr = [2, 7, 11, 15]

const twoSUm=(arr,tarhetS)=>{
  let left=0;
  let right=arr.length-1
  let res=[];
  while(left<right){
    let sum=arr[left]+arr[right]
    if(sum===tarhetS){
      return [left,right]
    }else if(sum<right){
      left++
    } else {
      right--
    }
  }
}
console.log("fisn occu",twoSUm(newarsmsr,9))



let newarsmsrCheck = [2, 7, 11, 7,15]


const firstOccuranec=(arr,target)=>{
  let left =0;
  let right=arr.length-1;
  while(left<=right){
    if(arr[left]===target){
      return left;
    }
    
  }
}

