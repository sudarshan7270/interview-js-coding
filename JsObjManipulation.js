/**************** 1️⃣ Convert object into array of key-value pairs ****************/

const profileData = {
  username: "sudarshan",
  role: "developer",
  experience: 3
};

// Expected Output:
// [
//   ["username", "sudarshan"],
//   ["role", "developer"],
//   ["experience", 3]
// ]

function convertObjectToPairs(objInput) {
  // logic here
  return Object.entries(objInput)
}

console.log("1️⃣", convertObjectToPairs(profileData));


/**************** 2️⃣ Convert array of objects into a single object ****************/

const deviceList = [
  { deviceId: "d1", status: "online" },
  { deviceId: "d2", status: "offline" }
];

// Expected Output:
// {
//   d1: { deviceId: "d1", status: "online" },
//   d2: { deviceId: "d2", status: "offline" }
// }

function arrayToObjectMapper(arrInput) {
  // logic here
  return arrInput.reduce((acc,curr)=>{
    acc[curr.deviceId]=curr
    return acc
  },{})
}

console.log("2️⃣", arrayToObjectMapper(deviceList));


/**************** 3️⃣ Deep clone an object ****************/

const originalConfig = {
  theme: "dark",
  settings: {
    notifications: true
  }
};

// Expected Output:
// Deep cloned object (no reference sharing)

function deepCloneObject(sourceObj) {
  // logic here
  return JSON.parse(JSON.stringify(sourceObj))
}

console.log("3️⃣", deepCloneObject(originalConfig));


/**************** 4️⃣ Check if two objects are equal ****************/

const configA = { a: 1, b: 2 };
const configB = { a: 1, b: 2 };

// Expected Output: true

function deepCopy(objOne, objTwo) {
  // logic here
  if(objOne===objTwo) return true

  if(typeof objOne !== "object" || typeof objTwo !== "object" || objOne ===null || objTwo ===null){
    return false
  }
  let key1=Object.keys(objOne);
  let key2=Object.keys(objTwo);
  if(key1.length !== key2.length) return false

  return key1.every(key=> Object.hasOwn(objTwo,key) && deepCopy(objOne[key],objTwo[key]))

}


console.log("4️⃣", deepCopy(configA, configB));


/**************** 5️⃣ Remove a property without mutating ****************/

const userRecord = {
  id: 101,
  name: "Ravi",
  password: "secret"
};

// Expected Output:
// { id: 101, name: "Ravi" }

function removeKeyImmutably(dataObj, keyToRemove) {
  // logic here
  let objNew={}
  for(let key in dataObj){
    console.log(key)
    if(key!==keyToRemove){
        objNew={...objNew,[key]:dataObj[key]}
    }
  }
  return objNew
  
}


console.log("5️⃣", removeKeyImmutably(userRecord, "password"));


const baseSettings = { theme: "light", lang: "en" };
const overrideSettings = { theme: "dark" };

// Expected Output:
// { theme: "dark", lang: "en" }

function mergeObjects(objA, objB) {
  // logic here
  let merger={...objA,...objB}
  return  merger
}

console.log("6️⃣", mergeObjects(baseSettings, overrideSettings));


const nestedStats = {
  cpu: {
    usage: 70,
    temp: 60
  },
  memory: {
    free: 2048
  }
};

// Expected Output:
// {
//   "cpu.usage": 70,
//   "cpu.temp": 60,
//   "memory.free": 2048
// }

function flattenObjectStructure(nestedObj) {
  // logic here
  return Object.entries(nestedObj).reduce((acc,curr)=>{
    console.log(curr)
    return acc
  },{})
}

console.log("7️⃣", flattenObjectStructure(nestedStats));


/**************** 8️⃣ Rename a key in an object ****************/

const orderInfo = {
  order_id: 555,
  amount: 1200
};

// Expected Output:
// { orderId: 555, amount: 1200 }

function renameObjectKey(sourceObj, oldKey, newKey) {
  // logic here
  let obj={};
  for (let key in sourceObj){
    if(key !==oldKey){
        obj[key]=sourceObj[key]
    }
  }
  obj[newKey]=sourceObj[oldKey]
  return obj
}

console.log("8️⃣", renameObjectKey(orderInfo, "order_id", "orderId"));


const scoreBoard = {
  math: 80,
  english: 45,
  science: 90
};

// Expected Output:
// { math: 80, science: 90 }

function filterObjectValues(inputObj) {
  // logic here
  const array=Object.entries(inputObj).filter(([key,val])=>val>50)
  return Object.fromEntries(array)
}

console.log("9️⃣", filterObjectValues(scoreBoard));



/**************** 🔟 Count number of properties ****************/

const metaInfo = {
  version: "1.0",
  env: "prod",
  region: "IN"
};

// Expected Output: 3

function countObjectKeys(objData) {
  // logic here

  return Object.keys(objData).length
}
console.log("a".charCodeAt(0))

console.log("🔟", countObjectKeys(metaInfo));

console.log(["z","a","m"].sort())


/**************** 1️⃣1️⃣ Sort object keys alphabetically ****************/

const unsortedObject = {
  z: 1,
  a: 2,
  m: 3
};

// Expected Output:
// { a: 2, m: 3, z: 1 }

function sortObjectKeys(inputData) {
  // logic here
  let arr=Object.entries(inputData).sort()
  return Object.fromEntries(arr)
}

console.log("1️⃣1️⃣", sortObjectKeys(unsortedObject));


/**************** 1️⃣2️⃣ Convert object values into array ****************/

const pricingTable = {
  apple: 100,
  mango: 80
};

// Expected Output:
// [100, 80]

function extractValues(objSource) {
  // logic here
  let res=[]
  for(let key in objSource){
    res.push(objSource[key])
  }
//   return res // we can remove dupliacte here with set if asked  [...new Set(res)]
  return Object.values(objSource)
}

console.log("1️⃣2️⃣", extractValues(pricingTable));


const statusCodes = {
  success: 200,
  notFound: 404,
  error: 500
};

// Expected Output:
// "notFound"

function findKeyFromValue(objData, searchValue) {
  // logic here
  for(let key in objData){
    if(objData[key]===searchValue){
        return key
    }
    
  }
  return -1
}

console.log("1️⃣3️⃣", findKeyFromValue(statusCodes, 404));

let arr=[0,9,7,2,-9,-9,9]

let currMax=arr[0];
let max=arr[0];

for(let i=0;i<arr.length-1;i++){
  currMax =Math.max( arr[i],currMax +arr[i+1]);
  max=Math.max(currMax,max)
  
}
console.log(max);

let arr1=[1,6,3,8,5,9,7].sort((a,b)=>a-b);
console.log(arr1)
let left=0;
let right=arr1.length-1;
let target=3;
// while(left<right){
//   let mid=(left+right)/2
//   if(arr1[mid]===target){
//     console.log( mid)
//     return
//   }else if(arr1[mid]>target){
//     right=mid-1
//   }else{
//     left=mid+1
//   }

// }

function recursiveBinary(arr,target,left,right){
  if(arr.length<=0) return -1
  let mid=(left+right)/2
  if(arr[mid]===target){
    return mid
  }else if(arr[mid]<target){
    return recursiveBinary(arr,target,mid+1,right)
  }else{
    return recursiveBinary(arr,target,left,mid-1)
    
  }

}
console.log("recursive",recursiveBinary(arr1,3,0,arr1.length-1))
// remove all non repeating
// udrhn
let str="sudarshan"
let res=""
let map=new Map();

for(let i=0;i<str.length;i++){
  if(!map.has(str[i])){
    map.set(str[i],0)
  }
  let val=map.get(str[i])+1
  map.set(str[i],val)

}
console.log(map)
for (let [key,val] of map){
  if(val===1){
    res=res+key
  }
}
console.log(res)