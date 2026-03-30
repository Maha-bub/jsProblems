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
var newarr =[]; 
var numbers=[12,47,14,12,13,14,15,];

numbers.forEach(function(x){
    newarr.push(x*x);
})

// console.log(newarr);

// map function

let squareNumber = numbers.map(function(x){
    return x*x;
})
console.log(squareNumber);


var numbersArr=[5,54,10,47,8,12,9,54,5];
const bignum=numbersArr.filter(function(x){
    return x>10;
})
console.log(bignum);