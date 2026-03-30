// IIFE function used

let sum=0;
(function addition(a,b){
    sum=a+b;
    console.log(sum);
})(5,15);


// function expression
// when a function is assigned a value of a variable , this is called function expression

const displayMessage= function displaymsg(){
    console.log("I am Mahabub Alam")


}
displayMessage();