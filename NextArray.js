function findRunnerUp(numsArr) {
    // write logic here
    let numsArrUniq=[...new Set(numsArr)]
    let max=-Infinity;
    let sMax=-Infinity
    for(let num of numsArrUniq){
        if(num>max){
            sMax=max;
            max=num
            
        }else if(num<max && num>sMax){
            sMax=num
        }
    }
    return sMax
}

const dataOne = [10, 5, 8, 20, 20, 3, 15];
console.log("Q1:", findRunnerUp(dataOne)); // expected: 15


function singleAppearance(listPack) {
    // write logic here
    let map=new Map();
    for(let num of listPack){
        map.set(num, (map.get(num)||0)+1)
    }
        for(let num of listPack){
            if(map.get(num)===1){
                return num
            }
        }
        return -1
}

const dataThree = [4, 5, 1, 2, 1, 4, 5];
console.log("Q3:", singleAppearance(dataThree)); // expected: 2

function shiftZeros(inputSeq) {
    // write logic here
    let insertPos=0

    for(let i=0;i<inputSeq.length;i++){
        if(inputSeq[i]!==0){
            inputSeq[insertPos]=inputSeq[i];
            insertPos++
        }
    }
    while(insertPos<inputSeq.length){
        inputSeq[insertPos]=0
        insertPos++
    }
    return inputSeq
}

const dataTwo = [0, 1, 0, 3, 12];
console.log("Q2:", shiftZeros(dataTwo)); // expected: [1,3,12,0,0]

function checkSorted(orderSet) {
    // write logic here
    isSorted=false;
    for(let i=1;i<orderSet.length;i++){
        if(orderSet[i]>=orderSet[i-1]){
            isSorted=true
        }else{
            return false
        }
    }
    return isSorted
}

const dataFour = [1, 2, 3, 4, 5,9,8];
console.log("Q4:", checkSorted(dataFour)); // expected: true


function findLostNum(bucketVals) {
    // write logic here
    let set=new Set(bucketVals);
    for(let i=0;i<bucketVals.length;i++){
        if(!set.has(i)){
            return i
        }

    }
    return -1
}

const dataFive = [3, 0, 1];
console.log("Q5:", findLostNum(dataFive)); // expected: 2


function uniqueStream(arrInput) {
    // write logic
    return [...new Set(arrInput)]
}

const dataSeven = [1, 2, 2, 3, 4, 3, 5];
console.log("Q7:", uniqueStream(dataSeven)); // expected: [1,2,3,4,5]


function rotateRight(numsBox, stepCount) {
    // write logic
    function revArray(arr,left,right){
        while(left<right){
            let temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp
            left++
            right--
        }
    }
    revArray(numsBox,0,numsBox.length-1)
    revArray(numsBox,0,stepCount-1)
    revArray(numsBox,stepCount,numsBox.length-1)
    return numsBox
}

const dataEight = [1,2,3,4,5];
console.log("Q8:", rotateRight(dataEight, 2)); // expected: [4,5,1,2,3]

function pairCollector(series, targetVal) {
    // write logic
    let res=[];
    let set=new Set();
    for(let num of series){
        let target=targetVal-num
        if(set.has(target)){
            res.push([target,num])
        }
        set.add(num)
    }
    return res
}

const dataNine = [2,7,11,15,3,6];
console.log("Q9:", pairCollector(dataNine, 9)); // expected pairs: [2,7] and [3,6]


function maxPairProduct(setArr) {
    // write logic
    let max=-Infinity;
    let sMax=-Infinity;
    for(let num of setArr){
        if(num>max){
            sMax=max;
            max=num
        }else if(num<max && num>sMax){
            sMax=num
        }
    }
    return max*sMax
}

// const dataTen = [5, 20, 2, 6];
// console.log("Q10:", maxPairProduct(dataTen)); // expected: 120

// function majorityPick(groupArr) {
//     // write logic
//     let map=new Map()
//     for(let num of groupArr){
//         map.set(num,(map.get(num)||0)+1)
//     }
//     let arr=Array.from(map)
//     let sort=arr.sort((a,b)=>b[1]-a[1])
//     for (let [key,val] of sort){
//         return key
//     }
// }

// const dataElevenAlgo = [1,2,2,1,1,2,2,2];
// console.log("Q11:", majorityPick(dataEleven)); // expected: 2


// function majorityPickAlgo(groupArr) {
//     // write logic
//     let majority=arr[0]
//     let count=0;
//     for(let num of groupArr){
//         if(arr[majority]===num){
//             count++
//         }//else if(){}
//     }
// }

// const dataEleven = [2,2,1,1,2,2,2];
// console.log("Q11:", majorityPickAlgo(dataElevenAlgo)); // expected: 2

// Problem: Maximum sum subarray of size k
// Input: arr = [2, 1, 5, 1, 3, 2], k = 3
// Expected Output: 9  // subarray [5,1,3]

function maxSumSubarray(arr, k) {
    let maxSum = 0;      // store maximum sum
    let windowSum = 0;   // store current window sum
    let window=[]

    // write your logic here
    for(let i=0;i<arr.length;i++ ){
        for(let j=i;j<k;j++){
            window.push(arr[i],arr[j])
        }
    }
    console.log(window)

    return maxSum;
}

// Test cases
const arr1 = [2, 1, 5, 1, 3, 2];
const k1 = 3;
console.log(maxSumSubarray(arr1, k1)); // expected: 9

const arr2 = [2, 3, 4, 1, 5];
const k2 = 2;
console.log(maxSumSubarray(arr2, k2)); // expected: 7  // subarray [3,4]

let gameArr=[2,3,0,4,5,4,6]

function zeroWildcard(arr) {
    let setAlredySeen=new Set();
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0 && !setAlredySeen.has(arr[i])){
            setAlredySeen.add(arr[i-1])
            setAlredySeen.add(arr[i+1])
            // arr[i-1]=0
            // arr[i+1]=0
            // console.log(arr[i-1])
            
            

        }

    }
    return arr;
}
function makeZero(arr, i) {
  // stop conditions
  if (i < 0 || i >= arr.length) return;
  if (arr[i] === 0) return;

  arr[i] = 0;

  // recurse left and right
  makeZero(arr, i - 1);
  makeZero(arr, i + 1);
}


console.log("Wild Card",zeroWildcard(gameArr)); 


function findMissing(arr) {
  // write logic
  let set=new Set(arr)
  for(let i=1;i<arr.length+1;i++){
    if(!set.has(i)){
        return i
    }
  }
  return -1
}

console.log(findMissing([1, 2,3, 4, 5, 6,8])); // 3


function countPairs(arr, target) {
  // write logic
  let map=new Map();
  let count=0;
  for(let num of arr){
    let required=target-num
    if(map.has(required)){
        count++
    }
    map.set(num,(map.get(num)||0)+1)
  }
  return count
}

console.log(countPairs([1, 5, 7, -1, 5], 6)); // 3



function rotateByK(arr, k) {
  // write logic
  function revArr(arr,left,right){
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
  }
  revArr(arr,0,arr.length-1)
    revArr(arr,0,k-1)
  revArr(arr,k,arr.length-1)
  return arr

}

console.log(rotateByK([1, 2, 3, 4, 5], 2));
// [4,5,1,2,3]



function longestIncreasing(arr) {
  // write logic
}

console.log(longestIncreasing([1, 2, 2, 3, 4, 1, 2, 3])); // 3


function productExceptSelf(arr) {
  // write logic
  let res=[]
  for(i=0;i<arr.length;i++){
          let product=1;
          for(let j=0;j<arr.length;j++){
          if(arr[j] !== arr[i]){
            product=product*arr[j]
          }
        }
    res.push(product)
  }
  return res
}

console.log(productExceptSelf([1,2,3,4]));
// [24,12,8,6]


function secondLargest(arr) {
  // write logic
  let fmax=-Infinity;
  let sMax=-Infinity;
  for(let num of arr){
    if(num>fmax){
        sMax=fmax
        fmax=num
    } else if(num<fmax && num>sMax){
        sMax=num
    }
  }
  return sMax
}

console.log(secondLargest([10, 5, 20, 8])); // 10

// function isMountain(arr) {
//   // write logic
//   if(arr.length%2===0) return false
//   let mid=Math.floor(0+arr.length-1)/2
//   let res;
//   for(let i=mid;mid>=0;i--){
//     if(arr[i]<arr[i-1]){
//         return false
//     }else if(arr[i]>arr[i-1]){
//         res=true
//     }else{res=false}
//   }
//   return res
// }

// console.log(isMountain([1, 3, 5, 4, 2])); // true
// console.log(isMountain([1, 2, 3, 4])); // false



function findLeaders(arr) {
  // write logic
  let max=arr[arr.length-1]
  let res=[]
  res.push(max)
  for (let i=arr.length-2;i>=0;i--){
    if(arr[i]>max){
        max=arr[i]
        res.push(arr[i])
    }
  }
  return res.reverse()
}

console.log(findLeaders([16, 17, 4, 3, 5, 2]));
[17,5,2]

















