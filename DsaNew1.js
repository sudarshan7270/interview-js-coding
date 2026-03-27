// const { useCallback, useRef, default: React } = require("react")

function solveTwoSum(nums, target) {
    // Write your logic herex 
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let required = target - nums[i]
        if (map.has(required)) {
            return [map.get(required), i]
        }
        map.set(nums[i], i)
    }

    return -1
}
console.log(solveTwoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(solveTwoSum([3, 2, 4], 6));     // [1,2]



function solveRemoveDuplicates(nums) {
    // Write your logic here
    let uniquet = [...new Set(nums)]
    return uniquet.length
}

// Test Cases
console.log(solveRemoveDuplicates([1, 1, 2]));        // 2
console.log(solveRemoveDuplicates([0, 0, 1, 1, 2]));    // 3
console.log(solveRemoveDuplicates([1, 2, 3]));        // 3


function solveMaxSubarray(nums) {
    // Write your logic here
    let maxSum = nums[0]
    let currSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(currSum + nums[i], nums[i])
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum
}

// Test Cases
console.log(solveMaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(solveMaxSubarray([1]));                     // 1
console.log(solveMaxSubarray([5, 4, -1, 7, 8]));            // 23


function solveMoveZeroes(nums) {
    // Write your logic here
    let insertPos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i]
            insertPos++
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos] = 0
        insertPos++
    }
    return nums
}

// Test Cases
console.log(solveMoveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(solveMoveZeroes([0, 0, 1]));      // [1,0,0]
console.log(solveMoveZeroes([1, 2, 3]));      // [1,2,3]


function solveContainsDuplicate(nums) {
    // Write your logic here
    let unique = [...new Set(nums)]

    return nums.length !== unique.length
}

// Test Cases
console.log(solveContainsDuplicate([1, 2, 3, 1])); // true
console.log(solveContainsDuplicate([1, 2, 3, 4])); // false
console.log(solveContainsDuplicate([1, 1, 1, 3])); // true


function solveProductExceptSelf(nums) {
    // Write your logic here
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let proExceptSelf=1
        for(let j=0;j<nums.length;j++){
            if(j!==i){
                proExceptSelf=proExceptSelf*nums[j]
            }
        }
        res.push(proExceptSelf)
    }
    return res
}

// Test Cases
console.log(solveProductExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(solveProductExceptSelf([2, 3, 4, 5])); // [60,40,30,24]
console.log(solveProductExceptSelf([1, 1, 1, 1])); // [1,1,1,1]


function solveMergeIntervals(intervals) {
  // Write your logic here
}

// Test Cases
console.log(solveMergeIntervals([[1,3],[2,6],[8,10]])); // [[1,6],[8,10]]
console.log(solveMergeIntervals([[1,4],[4,5]]));        // [[1,5]]
console.log(solveMergeIntervals([[1,2],[3,4]]));        // [[1,2],[3,4]]


function solveFindPeak(nums) {
  // Write your logic here
}

// Test Cases
console.log(solveFindPeak([1,2,3,1]));    // 2
console.log(solveFindPeak([1,2,1,3,5,6,4])); // 1 or 5
console.log(solveFindPeak([1]));          // 0


function solveSubarraySum(nums, k) {
  // Write your logic here
}

// Test Cases
console.log(solveSubarraySum([1,1,1], 2));     // 2
console.log(solveSubarraySum([1,2,3], 3));     // 2
console.log(solveSubarraySum([1,-1,0], 0));    // 3

function outer(){
    let count=0
    return function(){
        count++
        console.log(count)
    }
}
let counter=outer()
counter()
counter()

function balance(){
    let balance=0
     return {
        deposit(amount){
             balance=balance+amount
           console.log(balance)
            
        },
         witdraw(amount){
             balance=balance-amount
                      console.log(balance)

            
        }
    }
}
let bank=balance()
bank.deposit(500)
bank.deposit(500)
bank.deposit(500)
bank.witdraw(500)

function deepClone(obj){
    if(typeof obj !=="object" || obj===null){
        return obj
    }
    let clone=Array.isArray(obj)?[]:{}
    for(let key in obj){
        clone[key]=deepClone(obj[key])
    }
    return clone
}

function isdeepCopy(obj1 , obj2){
    if(obj1===obj2) return true
    if(obj1 === null || obj2===null || typeof obj1 !=="object" || typeof obj2 !== "object"){
        return false
    }
    let key1=Object.keys(obj1)
    let key2=Object.keys(obj2)
    if(key1.length!==key2.length) return false

    for(let key of obj1){
        if(!key2.includes(key) || !deepCopy(obj1[key],obj2[key])){
            return false
        }
    }
    return true

}

// const aboertAPi=new AbortController()

// const api= fetch("",{signal:aboertAPi.signal})

// return ()=>{
//     aboertAPi.abort()
// }
// const observer=useRef(null)
// const apiCall=useCallback(()=>{

// },[])
// const callbackFunxtion=useCallback((node)=>{
//     if(loading) return
//     if(observer.current) observer.current.disconnect()

//         lastObserver.current=new IntersectionObserver((entries)=>{
//             if(entries[0].isIntersecting && hasMoreData && !loading){
//                 apiCall()
//             }
//         })
//         if(node) observer.current.observe(node)
// },[apiCall,loading,hasmOrDate])

// list.map((item,i)=>(
//         <Componet ref={list.length-1?callbackFunxtion:null}/>
// ))
// const Componet=React.forwardRef((prop,ref)=>{
//     return (
//         <div ref={ref}></div>
//     )
// })
// export default  Componet