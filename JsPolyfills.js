
// arr.map(num,i,arr)
// map return new array so need to return new array

// arr.myMap() this refer to this arr
Array.prototype.myMap = function (callback) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this))
    }
    return temp
}
const customMap = [1, 2, 3].myMap((num) => num * 2)
console.log("Custom Map Poly fill", customMap)


// arr.filter(num,i,arr)
// filter return new array so need to return new array

// arr.filter() this refer to this arr
Array.prototype.myFilter = function (callback) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp
}

const customFilter = [2, 3, 4, 5, 6].myFilter((num) => num % 2 === 0)
console.log("Custom Filter", customFilter)


// arr.reduce((acc,curr,i,arr))
// arr.reduce(()=>{},initials)

Array.prototype.myReduce = function (callback, initials) {
    var acc = initials

    for (let i = 0; i < this.length; i++) {
        acc = acc ? callback(acc, this[i], i, this) : this[i]
    }
    return acc
}


const myReduce = [1, 1, 2, 3, 4, 4, 5].myReduce((acc, curr) => {
    // if(!acc[curr]){
    //     acc[curr]=0
    // }
    // acc[curr]=acc[curr]+1
    acc[curr] = (acc[curr] || 0) + 1
    return acc
}, {})
console.log("Custom reduce", myReduce)



// function.call(this,args)

Function.prototype.myCall = function (context = {}, ...args) {

    if (typeof this !== "function") {
        throw new Error(this, "is not function")
    }
    context.fn = this  // insert function in context object
    context.fn(...args) // call inserted function args
}

const obj = {
    name: "Sudarshan"
}
function yourName(age) {
    console.log("Call my name is", this.name, "age:", age)
}
// const yuoeo=10;
yourName.call(obj, 24)


//apply
// fn.apply(this,[...args])

Function.prototype.myApply = function (context = {}, args = []) {

    if (typeof this !== "function") {
        throw new Error(this + "is not function")
    }
    if (!Array.isArray(args)) {
        throw new Error(this + "requierd array as argas")
    }
    context.fn = this  // insert function in context object
    context.fn(...args) // call inserted function args
}


function yourNameApply(age) {
    console.log("Apply my name is", this.name, "age:", age)
}
// const yuoeo=10;
yourNameApply.myApply(obj, [24])



//bind
// fn.bind(this,...args) // return new function

Function.prototype.myBind = function (context = {}, ...args) {

    if (typeof this !== "function") {
        throw new Error(this + "is not function")
    }

    context.fn = this  // insert function in context object
    return function (...newArgs) {
        return context.fn(...args, ...newArgs)
    }
}


function yourNameBind(age) {
    console.log("Bind my name is", this.name, "age:", age)
}
// const yuoeo=10;
const newBindFun = yourNameBind.myBind(obj, 24)
newBindFun()  // new args we can provide 24 here as well


// once

function once(func, context) {
    let ran;

    return function () {
        if (func) {
            ran = func.call(context || this, ...arguments)
            func = null
        }
    }
    return ran
}
const newOnce = once((a, b) => {
    console.log("Called", a, b)
})
newOnce(1, 2)
newOnce()
newOnce() // called only onec becwi wrappeen in once

console.log("node", this)

function normalFun() {
    console.log("noramal", this)
}
normalFun()

const obj7 = {
    a: 10,
    b: function () {
        console.log("object functin", this.a)
    },
    c: () => { console.log("arrow functin", this.a) }
}
obj7.b()
obj7.c()
const newObjChainBrake = obj7.b
newObjChainBrake() //Still fails - loses 'this' context (prints "object functin undefined")

const inhertObj = { a: 10, b: 30 }
const inhertObj2 = { c: 40 }

inhertObj2.__proto__ = inhertObj
console.log("object 2 inherit form 1-", inhertObj2.a)
console.log(inhertObj2.__proto__)  //{a:10,b:30}
console.log(inhertObj2.__proto__.__proto__)  // Object.prototype all built in method of object
console.log(inhertObj2.__proto__.__proto__.__proto__) // null
console.log(obj7.kdkkd) //undefine
// entried // form entries

// entries ignore proto
const objectEntries = Object.entries(inhertObj) // converet array pairs [["a":10,"b":30]]
console.log("entriess", objectEntries)

const objectEntriesProto = Object.entries(inhertObj2) // converet array pairs ["c":40]
console.log("entries proto", objectEntriesProto)


const arrayObj = [["a", 10]]
const fromentries = Object.fromEntries(arrayObj)
console.log(fromentries)

const original = { a: 10, b: 30, c: 40 };
const arrObject = Object.entries(original) // returm array from obj 
const update = arrObject.map(([key, val]) => [key.toUpperCase(), val * 2])

const backToOriginal = Object.fromEntries(update) // retrun obj form array
console.log("updated obj", backToOriginal)

const arr1 = [1, 2, 3, 4, 5]
console.log(arr1.slice(1, 3))// retuen new array as requested
console.log(arr1.slice(2, arr1.length)) // retuen new array as requested
const splic = arr1.splice(1, 2, 7, 8) // change in original array
console.log("spl", arr1)  //  change in oroginal array as start 1 inclusive 2 delecte count 7,8 are new no add in original
console.log("spl", splic)  //  retrun strt index no till delcet cocunct 2 ,3
console.log("arr",arr1)


// shallow and deep

const shallowObj = { a: 30, b: { c: 20 } }
const shallowObj1 = shallowObj;
const shallowRest = { ...shallowObj };

shallowObj1.a = 30;
shallowRest.a = 60
console.log("20", shallowObj.b.c) //nested change original
console.log("60", shallowRest.a) // change original 60

console.log("30", shallowObj.a) //ot affect without nest


const sampleDeep = { a: 30, b: { c: 20 } }
const deepCopy = JSON.parse(JSON.stringify(shallowObj))
deepCopy.b.c = 40
deepCopy.a=70;
console.log(sampleDeep.b.c) // 20 not cahneg origina
console.log(deepCopy.b.c) // 40  cahneg origina
console.log(sampleDeep.a) // 30
console.log(deepCopy.a) // 70 

// function closureLeak(){
//     const val=new Array(100000).fill(0)
//     return ()=>val.length;
// }
// const leaky = closureLeak();
// console.log(leaky())
// fix
function closureLeakFix(){
    const val=new Array(100000).fill(0)
    return val.length;
}

console.log(closureLeakFix())

// Execution Timeline:
// 1. closureLeak() runs → creates 100K array
// 2. Returns inner function → CAPTURES entire val array
// 3. closureLeak() ends → BUT val can't be GC'd (closure holds reference)
// 4. leaky() called → val still in memory!

// useeffcet setInterval if not cel ain clenaup clearInterval


const arr = [10, 20, 30, 40, 50];

// Skip middle elements
const [first, , third] = arr;  // 10, 30
console.log(first, third);

// Rest operator (get remaining)
const [x, ...rest] = arr;
console.log(x);     // 10
console.log(rest);  // [20, 30, 40, 50]
// const [fisrst,...this]=ffa

const arsp=[1,2,3,4]
console.log(...arsp)

function restEx(...nums){ // rest aggter all in array
    return nums.map(x=>x*2)
}
console.log(restEx(1,2,3)) // gethet this 1,2,3 in one array and us ein function


const counter=(function outer(){
        // Private variable - inaccessible from outside

    let count=0;

    return{
        increment(){
            return count++
        },
        decrement(){
            return count--
        },
        getValue(){
            return count
        }
    }

})()
counter.increment()
counter.increment()
counter.decrement()

console.log(counter.getValue())

function outerNew(){
        // Private variable - inaccessible from outside

    let count=0;

    return{
        increment(){
            return count++
        },
        decrement(){
            return count--
        },
        getValue(){
            return count
        }
    }

}

const newcall=outerNew()
newcall.increment()
newcall.increment()

console.log("new",newcall.getValue())


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