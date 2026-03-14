// const a=async()=>{

// }
// const b=async()=>{

// }
// const c=async()=>{

// }
// const promiseAll=new Promise.all([a(),b(),c()]); // runs parallel resolv only when all resolved

// promiseAll
// .then((res)=>console.log("when all function resolved"))
// .catch((err)=>console.log("ANy funtion return erro thows"))

// const promiseAllSettled=new Promise.allSettled([a(),b(),c()]) // runs all promises wait till resolve  or rejected
// /*
// [
//   { status: 'fulfilled', value: 10 },
//   { status: 'rejected', reason: 'Failed' },
//   { status: 'fulfilled', value: 30 }
// ]
// */

// promiseAllSettled.then((res)=>console.log("called when at least resolved "))
// .catch((err)=>console.log("if all in catch"))

// const promiserace=Promise.race([a(),b()] ) // when first promise settle retrun thst resolev or reject


function debounceFn(fn,delay){

    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>fn(...args),delay)
        
    }
}
const debounchk=()=>{
    console.log("called")
}
const deb=debounceFn(debounchk,1000)
deb()
deb()

function throttle(fn,delay){
    let lastCall=0;

    return function(...args){
        let curren=Date.now()
        if(curren-lastCall>=delay){
            lastCall=curren;
            fn(...args)
        }
    }
}


const obj={a:"1",b:{c:"3"}}
// let objNewShallow={...obj} // shallow copy
let objDeep=JSON.parse(JSON.stringify(obj))
objDeep.b.c=10
console.log(obj)  // upadte original with c 10 with deep copy does not update original

// 

let arr=[1,2,3]
let mapfun=arr.map(x=>x*2) // retuen new array with same size
console.log(mapfun)


arr.forEach(x=>console.log(x*2)) // just iterate over arrye doent retrun anything  just perodm opein insie loop


let filter=arr.filter(x=>x%2===0)
console.log(filter)

let reduceSum=arr.reduce((acc,curr)=>{
    acc=acc+curr
    return acc
},0)
console.log(reduceSum)
let newArray=[1,2,3]
let sliceArray=newArray.slice(0,2) // return new array with requested value 1st is inclusiev 2nd excluseiv
console.log("slice",sliceArray)



let arrT = [1, 2, 3, 4, 5]

// ❌ splice MUTATES original
let splice1 = arrT.splice(0, 2, "A", "B");   //(start,deleteCount,item1,item2 )
console.log(splice1);  // [1, 2] - DELETED items
console.log(arrT);      // [ "A", "B",3, 4, 5] - CHANGED!

let objArray=[{a:99},{a:10},{a:11}]
let sortedArray=objArray.sort((a,b)=>b.a-a.a)
console.log(sortedArray)


let flatter=[1,2,[3,[4],5]]
// console.log(flatter.flat(Infinity))

function  flatterArray(arr) {
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res.push(...flatterArray(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
    
}
console.log("flat",flatterArray(flatter))

let str="sudarshan"
let revStr=""
for(let i=str.length-1;i>=0;i--){
    revStr=revStr+str[i];
}
console.log(revStr)

let countocc=revStr.split("").reduce((acc,curee)=>{
    if(acc[curee]){
        acc[curee]=acc[curee]+1
    }else{
        acc[curee]=1
    }
    return acc
},{})
console.log(countocc)

let arrmaxMin=[1,2,3,4,5]
 for(let i=0;i<arrmaxMin.length;i++){
    if(arrmaxMin[i]>arrmaxMin[i+1]){
        let temp=arrmaxMin[i];
        arrmaxMin[i]=arrmaxMin[i+1];
        arrmaxMin[i+1]=temp
    }
 }
 console.log(arrmaxMin)
 console.log("Max",arrmaxMin[arrmaxMin.length-1])
  console.log("Min",arrmaxMin[0])

  console.log("max",Math.max(...arrmaxMin))
    console.log("min",Math.min(...arrmaxMin))