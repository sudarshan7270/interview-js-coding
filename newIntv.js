let str = "JavaScript is awesome";

function reverseString(str) {
  return str
    .split(/\s+/)
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
console.log("Reverse String", reverseString(str));

let flatstesmaple = [1, [2, 3], 4, [5]];
console.log("Flatten", flatstesmaple.flat());
// with reduec contaat
console.log(
  " with reduce Flatten",
  flatstesmaple.reduce((acc, curr) => {
    acc = acc.concat(curr);
    return acc;
  }, [])
);

let occ = ["a", "b", "a", "c", "b"];

let findOccu = occ.reduce((acc, cuu) => {
  if (acc[cuu]) {
    acc[cuu] = acc[cuu] + 1;
  } else {
    acc[cuu] = 1;
  }
  return acc;
}, {});

console.log("Occurenac object", findOccu);
let debouce;

function debounceFunction() {
  clearTimeout(debouce);

  debouce = setTimeout(() => {
    console.log("called after rypein");
  }, 500);
}

// useEffect(()=>{
//     let timeout;
//      debouce=setTimeout(() => {
//         console.log("called after rypein")
//     }, 500);
//     return(()=>{clearTimeout(debouce)})
// })

let sameARR = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr = sameARR.filter((num, index) => sameARR.indexOf(num) === index);
console.log("UniqueArr", uniqueArr);

let numForSUm = 123456789;

const sumOfAll = numForSUm
  .toString()
  .split("")
  .reduce((acc, crr) => acc + Number(crr), 0);
console.log("Sum of all", sumOfAll);

// import React, { useState, useEffect } from "react";

// export default function App() {
//   const products = [
//     { name: "iPhone", category: "Electronics", price: 999 },
//     { name: "T-Shirt", category: "Clothing", price: 19 },
//     { name: "Samsung TV", category: "Electronics", price: 499 },
//     { name: "Jeans", category: "Clothing", price: 39 },
//   ];

//   let filterCategory = products.map((item) => item.category);

//   let uniqueCategoryArr = [...new Set(filterCategory)];

//   const [searchValue, setSearchValue] = useState("");
//   const [category, setCategory] = useState("");
//   const [filteredList, setFilteredList] = useState(products);

//   const handleCatgeoryClick = (e) => {
//     setCategory(e.target.value);
//   };

//   useEffect(() => {
//     let filterlist = products; // Always start with the original full list

//     // 1. Filter by Category
//     if (category) {
//       // If a specific category is selected (not empty string)
//       filterlist = filterlist.filter((item) => item.category === category);
//     }

//     let debounce = setTimeout(() => {
//       if (searchValue) {
//         filterlist = filterlist.filter((item) =>
//           item.name.toLowerCase().includes(searchValue)
//         );
//       }
//       setFilteredList(filterlist);
//     }, 500);

//     return () => clearTimeout(debounce);
//   }, [category, searchValue]); 

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter text"
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//       />

//       <select value={category} onChange={handleCatgeoryClick}>
//         {/* Add a default 'All' option if you want */}
//         <option value="">All Categories</option>
//         {uniqueCategoryArr.map((cat) => (
//           <option key={cat} value={cat}>
//             {" "}
//             {/* Use 'cat' itself as the key if it's unique */}
//             {cat}
//           </option>
//         ))}
//       </select>
//       {filteredList.length !== 0 ? (
//         filteredList.map((item, key) => (
//           <div key={item.name}>
//             {" "}
//             {/* Best practice to use a unique key, like item.name */}
//             {item.name}
//           </div>
//         ))
//       ) : (
//         <p>Empty List</p>
//       )}
//     </div>
//   );
// }


let Input=["eat", "tea", "tan", "ate", "nat", "bat"];
let sortedWorArray=Input.map((word)=>word.split("").sort().join(""));
console.log("SortedWIrdArray", sortedWorArray)
// for(let word of Input){

//   let key=word.split("").sort().join("");
//   if(!map.has(key)){
//     map.set(key,[])
//   }
//   map.get(key).push(word);

//   return Array.from(map.values())

// }
const anagraea=(arr)=>{
  const map=new Map();

  for(let word of arr){

  let key=word.split("").sort().join("");
  if(!map.has(key)){
    map.set(key,[])
  }
  map.get(key).push(word);


}
  return Array.from(map.values());


}
let newarrr=anagraea(Input)
console.log("Anagram",newarrr)

let arrUni=[1,1,2,3,4,5,5];
let unique=new Set(arrUni)
console.log("unique" ,[...unique])

let jj="Hello World";
let rever=jj.split(/\s+/).map((w)=>w.split("").reverse().join("")).join(" ")
console.log("rversrere" ,rever)

let flate=[1, [2, 3], 4, [5]]
// with flat=flate.flat(Infinity)
let flat=flate.reduce((acc, curr)=>{return acc.concat(curr)},[])
console.log("flate arr",flat)


let InputNew=["eat", "tea", "tan", "ate", "nat", "bat"];
let map=new Map();

for(let word of InputNew){
  let key=word.split("").sort().join("")
  if(!map.has(key)){
    map.set(key,[])
  }
  map.get(key).push(word);
  
}
const value=Array.from(map.values())
console.log("isgarahene",value)

let frq=[1, 2, 3, 2, 4, 2, 5];

let freq={};
let max=0;
let result=0;

for(let num of frq){

  freq[num]=(freq[num] || 0)+1;

  if(freq[num]>max){
    max=freq[num];
    result=num
  }

}
console.log("max occu",result)

let reduecOcc=frq.reduce((acc,curr)=>{
  if(acc[curr]){
    acc[curr]=acc[curr]+1
  }else{
     acc[curr]=1
  }
  return acc

},{})

console.log("max occu reduce",reduecOcc)
let maxCount = 0;
let mostFrequent = null;

for (let key in reduecOcc) {
  console.log(reduecOcc[key])
  if (reduecOcc[key] > maxCount) {
    
    maxCount = reduecOcc[key];
    mostFrequent = key;
  }
}
console.log("max occu reduce",mostFrequent)








