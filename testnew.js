let counter=0
    let alreadySeen=[];

function gamorZeros(arr,alreadySeen=[]){
// for(let j=0;j<arr.length;j++){
    for(let i=0;i<arr.length;i++){
        // counter++
        if(arr[i]===0 && ( !alreadySeen.includes(arr[i]) )){
            alreadySeen.push(arr[i-1])
            alreadySeen.push(arr[i+1])
            arr[i-1]=0;
            arr[i+1]=0
            
            //  gamorZeros(arr,alreadySeen)
            // i++
        // }
        
    }
}
    return arr;
}
let arr=[2, 3, 0, 4, 5, 4, 6];
console.log(gamorZeros(arr))