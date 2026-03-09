let arr =[41,12,14,15,17,18,71,32];
for(let i=0; i<=arr.length; i++){
    console.log(i);
}

// for each function used for pow.
let sum=[];
arr.forEach(function(value){
     sum.push(value*value);
})
console.log(sum)

// for each function use for increment
arr.forEach(function(x,index,arr){
    arr[index]=x+5;
})
console.log(arr);