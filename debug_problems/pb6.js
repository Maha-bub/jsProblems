// Bug: find why this doesn't return the first element
 
function getFirstElement(arr) {
//   return arr[1]; find the bug
  return arr[0]; 
}
 
console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)
