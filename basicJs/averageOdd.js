function oddAverage(numbers){

    
    let sum =0;
    let count= 0;
    for(const number of numbers){
        
        if(number%2===1){
            sum=sum+number;
            count=number.length;
        }
    }return sum;

}
const numbers =[24,21,14,15,13,16]
const avg = oddAverage(numbers);
coun
console.log("Average of the odd numbers is:",avg);