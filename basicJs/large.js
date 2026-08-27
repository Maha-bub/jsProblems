const height= [140,241,15,124,178,145,125,147,123,85,156, 10, 250];
function maxheight(numbers){
    let maximumNumber=numbers[0];
    for(let number of numbers){
        if(number>=maximumNumber){
            maximumNumber=number;
        }
        
    }return maximumNumber;

}
const largest=maxheight(height);
console.log(largest);