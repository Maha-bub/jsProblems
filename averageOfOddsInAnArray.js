function averageOfOdds(numbers) {
  
  let oddsNum=[];
  for (const num of numbers) {
    if (num % 2 === 1) {
      oddsNum.push(num);
         
    }
    

  }console.log(oddsNum);

  let sum = 0;
  for (const num of oddsNum){
    sum = sum+num;
  }

  const count = oddsNum.length;
  const average = sum/count;
  return average;
 

}

const numbers = [12, 13, 25, 41, 42];
const sumOfOdds = averageOfOdds(numbers);
console.log(sumOfOdds);