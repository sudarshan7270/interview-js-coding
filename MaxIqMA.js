const data = [1, 2, 3, 2, 4, 1, 5];

// Expected Output:
// [1, 2, 3, 4, 5]

let uniq=[...new Set(data)]
console.log(uniq)
let withFilr=data.filter((num,i)=>data.indexOf(num)===i)
console.log(withFilr)
const scores = [10, 40, 20, 50, 30];

// Expected Output:
// 40
let sort=scores.sort((a,b)=>b-1)
console.log(sort[1])

const nested = [1, [2, [3,[[[9]]], 4], 5], 6];

// Expected Output:
// [1, 2, 3, 4, 5, 6]
function fltArry(arr){
    let res=[]
    for(let num of arr){
        if(Array.isArray(num)){
             res.push(...fltArry(num))
        }else{
            res.push(num)
        }
    }
    return res
}
console.log(fltArry(nested))

const users = [
  { name: "Amit", role: "admin" },
  { name: "Neha", role: "user" },
  { name: "Ravi", role: "admin" }
];
let grpByrole=users.reduce((acc,curr)=>{
    if(!acc[curr.role]){
        acc[curr.role]=[]
    }
    acc[curr.role].push(curr)
    return acc
},{})
console.log(grpByrole)

let grpByroleWithKey=users.reduce((acc,{role,...curr})=>{
    if(!acc[role]){
        acc[role]=[]
    }
    acc[role].push(curr)
    return acc
},{})
console.log(grpByroleWithKey)

let arrEntries=Object.entries(grpByroleWithKey)
console.log(arrEntries)

const logs = ["error", "info", "error", "warn", "info", "error"];

// Expected Output:
// { error: 3, info: 2, warn: 1 }
let countOccue=logs.reduce((acc,curr)=>{
    acc[curr]=(acc[curr] || 0)+1
    return acc

},{})
console.log(countOccue)



// Expected Output:
// {
//   admin: [
//     { name: "Amit", role: "admin" },
//     { name: "Ravi", role: "admin" }
//   ],
//   user: [
//     { name: "Neha", role: "user" }
//   ]
// }

const numbers = [0, 1, 0, 3, 12];

// Expected Output:
// [1, 3, 12, 0, 0]
let insertPos=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]!==0){
        numbers[insertPos]=numbers[i]
        insertPos++
    }
}
while(insertPos<numbers.length){
    numbers[insertPos]=0
    insertPos++
}
console.log(numbers)
var insertPosMew=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===0){

        let temp=numbers[i]
        for(let j=i;j>insertPosMew;j--){
            numbers[j-1]=numbers[j]
        }
        numbers[insertPosMew]=0;
        insertPosMew++

    }

}
console.log(numbers)