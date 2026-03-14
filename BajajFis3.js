// function sample(){
//     console.log(this.a)
// }
//  let obj1={
//         a:10,
//         b:20
//     }
//     let obj2={
//         a:30,
//         b:40
//     }

//     let fun1=sample.bind(obj1)
//     let fun2=sample.bind(obj2)
//         fun1()
//         fun2()



// let str="hello"
// let revStr="";
// for(let i=str.length-1;i>=0;i--){
// revStr=revStr+str[i]
// }
// console.log(revStr)

let arr=[5,6,8,8,4,4]

function findDuplicates(arr){
let map=new Map();
let res=[]

for(let i=0;i<arr.length;i++){
let value=(map.get(arr[i]) || 0)+1
map.set(arr[i],value)
}

let arrnew=Array.from(map)

for(let [key,value] of arrnew){
if(value>=2){
res.push(key)
}
}
return res;

}
console.log(findDuplicates(arr))