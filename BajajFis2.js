// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 9

function addTarget(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let res = []
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === target) {
            res.push(left, right)
            // res.push(right)
            return res;


        } else if (sum > target) {
            right--
        } else {
            left++
        }
    }

}
let arr = [2, 7, 11, 15], target = 9
console.log("sum find", addTarget(arr, target))

//Kadens algorithm
// Input: [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the maximum product = 6

function maxSubArray(arr) {
    let maxSum = arr[0]
    let sum = 0

    for (let i = 0; i < arr.length - 1; i++) {
        sum = sum + arr[i]
        if (sum > maxSum) {
            maxSum = sum
        }
        if (sum < 0) {
            sum = 0
        }

    }
    return maxSum
}
let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log("max Sum", maxSubArray(arr1))


// Input: [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the maximum product = 6

function maxSubArrayProduct(arr) {
    let currMax=arr[0];
    let currMin=arr[0];
    let result=arr[0]
    for (let i = 1; i < arr.length; i++) {
        let temp=currMax;
        currMax=Math.max(arr[i],arr[i]*currMax,arr[i]*currMin)
        currMin=Math.min(arr[i],arr[i]*temp,arr[i]*currMin)
        result=Math.max(result,currMax,currMin)
        
    }
    return result
}

let arr2 = [2, 3, -2, 4]
console.log("max product", maxSubArrayProduct(arr2))

function checkSameState(arr1,arr2){
    let res;
    let map=new Map()
    for(let i of arr1){
        map.set(i,"")
    }
    for(let j of arr2){
        if(map.has(j)){
            res=true
        }else{
            return false
        }
    }
    return res
}
let arr3 = [1, 2, 2, 3];
let arr4 = [3, 2, 1];
console.log("checkSameStae",checkSameState(arr3,arr4))
