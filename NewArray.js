function removeDuplicates(arr) {
    // write logic
    return [...new Set(arr)] //simple with set also we can use map alsi filter
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 3]));
console.log(removeDuplicates([5, 5, 5, 1]));


function secondLargest(arr) {
    // write logic
    let fmax = -Infinity
    let smax = -Infinity
    for (let num of arr) {
        if (num > fmax) {
            smax = fmax
            fmax = num
        } else if (fmax > num && num > smax) {
            smax = num

        }
    }
    return smax
}

console.log(secondLargest([10, 20, 30, 40]));
console.log(secondLargest([5, 5, 4, 3]));


function rotateArray(arr, k) {
    // write logic
    function revArray(arr, left, right) {
        while (left < right) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }
        return arr
    }
    revArray(arr, 0, arr.length - 1)
    revArray(arr, 0, k - 1)
    revArray(arr, k, arr.length - 1)
    return arr

}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([10, 20, 30], 1));


function findMissing(arr, n) {
    // write logic
    let set = new Set(arr)
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            return i
        }
    }
}

console.log(findMissing([1, 2, 4, 3], 5));
console.log(findMissing([2, 3, 1, 5], 5));

function moveZeros(arr) {
    // write logic
    let insertPos = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i]
            insertPos++
        }
    }
    while (insertPos < arr.length) {
        arr[insertPos++] = 0
    }
    return arr

}

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([1, 2, 0, 0, 4]));


function intersection(arr1, arr2) {
    // write logic
    let set = new Set(arr1);
    let res = []
    for (let num of arr2) {
        if (set.has(num)) {
            res.push(num)
        }
    }
    return res
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5]));
console.log(intersection([10, 20, 30], [40, 20]));


function isSorted(arr) {
    // write logic
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return false
        }
    }
    return true
}

console.log(isSorted([1, 2, 3, 4]));
console.log(isSorted([1, 3, 2, 4]));


function countFrequency(arr) {
    // write logic
    //   here  i can use both map as well as reduce 
    // let map = new Map()
    // for (let num of arr) {
    //     map.set(num , (map.get(num)||0)+1)
    // }
    // return Object.fromEntries(map)
    const usingReduce=arr.reduce((acc,curr)=>{
        acc[curr]=(acc[curr]||0)+1
        return acc
    },{})
    return usingReduce
}

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
console.log(countFrequency(["a", "b", "a"]));

function findPairs(arr, target) {
  // write logic
  let res=[]
  let set =new Set()
  for(let i=0;i<arr.length;i++){
    let complemet=target-arr[i]
    if(set.has(complemet)){
        res.push([complemet,arr[i]])
    }
    set.add(arr[i])

  }
  return res
}

console.log(findPairs([1,2,3,4,5], 6));
console.log(findPairs([2,4,3,5,7], 9));


function flattenArray(arr) {
  // write logic
  let res=[]
  for(let num of arr){
    if(Array.isArray(num)){
        res.push(...flattenArray(num)) // used recusive for all level if not requite then i can use loop in chain 
    }else{
        res.push(num)
    }
  }
  return res
}

console.log(flattenArray([1,[2,[3,4]],5]));
console.log(flattenArray([[1,2],[3,4],[5]]));

