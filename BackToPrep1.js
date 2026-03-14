const arr = [1, [2, [3, 4], 5], 6]

function flatterArr(arr){
    let res=[]
    for(let num of arr){
        if(Array.isArray(num)){
            res.push(...flatterArr(num))
        }else{
            res.push(num)
        }
    }
    return res
}

console.log(flatterArr(arr))

const arr1=[2,-999,5,2,-899,7,9,10,-11,2,99,9]
function secondMax(arr){
    let max=-Infinity
    let smax=-Infinity
    for(let num of arr){
        if(num>max){
            smax=max
            max=num
        }else if(num<max && num>smax){
            smax=num
        }

    }
    return smax
}
console.log(secondMax(arr1))

function maxSumSubArray(arr){
    let maxSum=arr[0]
    let currSum=arr[0]
    let left=0
    let right=0
    let temp=0
    for(let i=0;i<arr.length;i++){
       if(currSum+arr[i]<arr[i]){
        currSum=arr[i]
        temp=i
       }else{
        currSum=currSum+arr[i]
       }
       if(currSum>maxSum){
        maxSum=currSum
        left=temp
        right=i
       }
    }
    return arr.slice(left,right+1)
}
console.log(maxSumSubArray([-2,1,-3,4,-1,2,1,-5,4]))

function maxSum(arr){
    let maxSum=arr[0]
    let currSum=arr[0]
    for(let i=1;i<arr.length;i++){
        currSum=Math.max(currSum+arr[i],arr[i])
         maxSum=Math.max(currSum,maxSum)
    }
    return maxSum
}
console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4]))

function maxPro(arr){
    let max=arr[0]
    let min=arr[0]
    let res=arr[0]
    for(let i=0;i<arr.length;i++){
        let tempMax=Math.max(arr[i],arr[i]*max, arr[i]*min)
         min=Math.min(arr[i],arr[i]*max, arr[i]*min)
         max=tempMax
         res=Math.max(res,max)

        }
        return res
}
console.log(maxPro([-2,1,-3,4,-1,2,1,-5,4]))




