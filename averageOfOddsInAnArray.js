function averageOfOdds(numbers) {
  let sum = 0;
  let oddsNum=0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum = sum + num;
      oddsNum++;
      
    }
    

  }
  return sum;

}

const numbers = [12, 13, 25, 41, 42];
const sumOfOdds = averageOfOdds(numbers);
let average = sumOfOdds/oddsNum;
console.log(average);