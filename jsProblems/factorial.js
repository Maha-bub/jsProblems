function factorial(num) {
    let factorialNum = 1;
    for (let i = 1; i <= num; i++) {
        factorialNum *= i;
    }
    return factorialNum;
}

console.log("Factorial of 5:",factorial(5));
console.log("Factorial of 4:",factorial(4));
console.log("Factorial of 3:",factorial(3));
