// function checkScore(score) {
//   if (score > 50) {
//     return "Pass";
//   } else {
//     return "Fail";
//   }
// }
 
// console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
// console.log(checkScore(40)); // Expected: "Fail"


function checkScore(mark){
    if(mark>=50){
        return "Pass";

    }
    return "Fail";
}

console.log(checkScore(50));
console.log(checkScore(40));
console.log(checkScore(49));
console.log(checkScore(55));