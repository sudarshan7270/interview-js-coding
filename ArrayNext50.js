let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSum(arr){
    let currMaxsum=arr[0];
    let globalMaxSum=arr[0]
    for(let i=0;i<arr.length;i++){
        currMaxsum=Math.max(arr[i],currMaxsum+arr[i])
        globalMaxSum=Math.max(globalMaxSum,currMaxsum)
    }
    return globalMaxSum
}
console.log("max sum sub array", maxSum(arr))

let twoSumNonSort=[9,0,15,2,7]
let map=new Map()
let target =9
for(let i=0;i<twoSumNonSort.length;i++){
    let required=target-twoSumNonSort[i];

    if(map.has(required)){
        console.log([map.get(required),i])
    }

    map.set(twoSumNonSort[i],i)
}

let prices = [7, 1, 5, 3, 6, 4]
function maxprofitBrute(arr){
    let maxProfit=arr[1]
    let currProfit=arr[1];

    for(let i=0;i<arr.length;i++){
        
    }
}

let newArrRightShift=[1, 2, 3, 4, 5, 6, 7]

function reverseArray(arr,left,right){
    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    return arr
}
let length=newArrRightShift.length
const k = 3;

reverseArray(newArrRightShift,0,length-1)
reverseArray(newArrRightShift,0,k-1)
reverseArray(newArrRightShift,k,length-1)
console.log("right shift by k",newArrRightShift)


const maxSubArray = [-2, -1, 0,-3, -4, -1, -2, -1, -5, -4];
let max=maxSubArray[0]
let currMax=maxSubArray[0]
for(let i=0;i<maxSubArray.length;i++){
  currMax = Math.max(arr[i], currMax + arr[i]);
    max=Math.max(currMax,max)
    if(currMax<0){
        currMax=0
    }

}
console.log(max)


const str = "rAc9448&2929(ecai";
let formattedStr=""
function isAlphabet(char){
    let val=char.charCodeAt(0)
    return ((val>=65 && val<=90) || (val>=97 &&  val<=122))
}

for(let i=0;i<str.length;i++){
    if(isAlphabet(str[i])){
        formattedStr=formattedStr+str[i].toLowerCase()
    }
}
console.log(formattedStr)
let rev=""

for(let i=formattedStr.length-1;i>=0;i--){
    rev=rev+formattedStr[i]
}
console.log(rev)
console.log("is palindrome",rev===formattedStr)

function allAlphabet(str){
    let res=""
    for(let i=0;i<str.length;i++){
        if(isAlphabet(str[i])){
            res=res+str[i]

        }
    }
    return res.toLowerCase().split("").sort().join("")
}
console.log("is anagram",allAlphabet("Listen!!")===allAlphabet("Silent@"))

let newStr="aaAbbccdde!f"

function isAlpha(char){
    let asciiVal=char.charCodeAt(0);
    return ((asciiVal>=65 && asciiVal<=90) ||(asciiVal>=97 && asciiVal<=122))
}
function nonRepeating(str){
    let map=new Map();

    for(let i=0;i<str.length;i++){
        if(isAlpha(str[i])){
        let val=(map.get(str[i]) ||0)+1
        map.set(str[i],val)
        }
    }
    for (let char of str){
        if(map.get(char)===1){
            return char
        }
    }
    return -1
    // console.log(map)
}
console.log(nonRepeating(newStr))

const arrRed = [
  { name: "TV", age: 2, type: "electronics" },
  { name: "Mobile", age: 1, type: "electronics" },
  { name: "Shirt", age: 3, type: "fashion" },
  { name: "Jeans", age: 2, type: "fashion" }
];

const usingReduce=arrRed.reduce((acc,{type,...curr})=>{

    if(!acc[type]){
        acc[type]=acc[curr.type] || []
    } 
        acc[type].push(curr)
    
    return acc
},{})
console.log(usingReduce)