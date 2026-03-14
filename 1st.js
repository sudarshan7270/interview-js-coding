// Input: "aabbcde"
// Output: "c"
const noRepetingoCCu=(str)=>{
    let freq={};
    for(let char of str){
        freq[char]=(freq[char]||0)+1

    }
    for(let char of str){
        if(freq[char]===1){
            return char;
        }
    }
    return null;

}
let str="aabbcde"
console.log("First Occureance",noRepetingoCCu(str));



function debounce(fn,delay){
    let time;
    return function(...args){
        clearTimeout(time)
        time=setTimeout(()=>{fn(...args)},delay)
    }
}

// function fetchSearchResults(query) {
//   console.log(`Searching for: "${query}"...`);
//   // Simulate some delay for API call
//   // For demonstration, we'll just log.
// }

// const debousceFunction=debounce(fetchSearchResults,1000);
// console.log("Simulating rapid calls...");
// debousceFunction("apple");   // Call 1
// debousceFunction("apple p"); // Call 2 (cancels Call 1)
// debousceFunction("apple ph");
// setTimeout(() => {
//     console.log("\nAfter a pause...");
//     debousceFunction("orange"); // New sequence
//     debousceFunction("oranges");
// }, 1500)
// setTimeout(() => {
//     console.log("\nFinal check.");
// }, 3000); 
// {0: 1, 1: 1, 4: 1, 5: 2, 6: 4, 7: 1, 9: 1}


let arr=[1,4,5,5,6,6,6,6,9,7,0,0,0,0,0,0,0,0,0,0];
let res;
let currMax=0;
const mostFreq=arr.reduce((acc, curr)=>{
    acc[curr]=(acc[curr] || 0)+1;
    if(acc[curr]>currMax){
        currMax=acc[curr]
        res=curr;
    }
    return acc

},{})
console.log("max",res)