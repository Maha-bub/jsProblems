console.log(1);
console.log(2);
// console.log(3);
setTimeout(() => {
  doSomething();
}, 3000);

console.log(4);
console.log(5);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(6);

function doSomething() {
  console.log(3);
}
