console.log(1)
console.log(2)
console.log(3)
console.log(4)
setTimeout(() => {
    setTimeout(() => { add(2, 2), 5000 });
    console.log('B')

}, 2000);
function add(a, b) {
    distructor(3, 2)
    console.log(a + b);
}

function distructor(a, x) {
    console.log(a - x);
}