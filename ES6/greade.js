const result = (mark) => {
    return typeof mark != 'number' ? "Invalid" : mark >= 80 ? "You got A+" : mark >= 70 ? "You got A" : mark >= 50 ? "You got B" : "You failled";
}
console.log(result(60, 50))
console.log(result(70, 50))
console.log(result(80, 50))
console.log(result(90, 50))
console.log(result('90', 50))