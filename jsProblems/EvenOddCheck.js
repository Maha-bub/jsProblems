function checkNumber(num) {
    if (num % 2 === 0) {
        return "This is even number:" + num;
    } else if (num % 2 === 1) {
        return 'This is odd number:' + num;
    }
    else
        return "This is Zero:" + num;
}

const result=checkNumber(25);
const result1=checkNumber(21);
const result2=checkNumber(20);
const result3=checkNumber(0);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);