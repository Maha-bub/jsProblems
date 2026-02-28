function averageOfOdds(numbers) {
  let sum = 0;
  let oddsNum=[];
  for (const num of numbers) {
    if (num % 2 === 1) {
      oddsNum.push(num);
         
    }
    

  }console.log(oddsNum);
 

}

const numbers = [12, 13, 25, 41, 42];
const sumOfOdds = averageOfOdds(numbers);
