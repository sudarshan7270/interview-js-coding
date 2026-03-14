let arr=[1,2,3,4,5]

let sum=0;
arr.forEach((num)=>sum=sum+num)
console.log(sum)

const entireSum=arr.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc
},0)
console.log("reduce",entireSum)

let newMap=arr.map(num=>num*2)
console.log("map",newMap)

let newfilter=arr.filter((num)=>num%3===0)
console.log("filter",newfilter)
