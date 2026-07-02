// // Apply the full debugging process to find this bug

// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;

//   for (let i = 0; i <= str.length; i++) { // find the bug
//     if (vowels.includes(str[i])) {
//       count = count + 1;
//     }
//   }

//   return count;
// }

// console.log(countVowels("orange")); // Expected: 3

const intro = "Hi, I am Mmahabubul Alam";
function coutnVowels(strings) {
    let vowels = "aeiouAEIOU";
    let vowelsCountTotal = [];
    let count=0;
    for(let str of strings) {
        // console.log(str);
        if (vowels.includes(str)) {
            vowelsCountTotal.push(str);
            count++;

        }
    }
    // console.log(count);
    return vowelsCountTotal;

}

console.log(coutnVowels(intro));